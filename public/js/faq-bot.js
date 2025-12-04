// FAQ AI Bot
(function() {
    'use strict';

    let currentLanguage = localStorage.getItem('language') || 'es';
    let chatHistory = [];
    let isOpen = false;

    // Initialize FAQ data from languages.js
    function getFAQData() {
        if (typeof languages === 'undefined' || !languages[currentLanguage]) {
            return [];
        }

        const faqData = languages[currentLanguage].faq;
        if (!faqData) return [];

        const questions = [];
        
        // Extract FAQ questions and answers
        Object.keys(faqData).forEach(key => {
            if (key.startsWith('q') && faqData[key].question && faqData[key].answer) {
                questions.push({
                    question: faqData[key].question.toLowerCase(),
                    answer: faqData[key].answer,
                    originalQuestion: faqData[key].question
                });
            }
        });

        return questions;
    }

    // Simple keyword matching for FAQ search
    function findFAQAnswer(userQuestion) {
        const faqData = getFAQData();
        const questionLower = userQuestion.toLowerCase().trim();
        
        if (!questionLower) return null;

        // Check for exact matches first
        for (const faq of faqData) {
            if (faq.question === questionLower) {
                return faq.answer;
            }
        }

        // Check for keyword matches
        const keywords = questionLower.split(/\s+/);
        let bestMatch = null;
        let bestScore = 0;

        for (const faq of faqData) {
            let score = 0;
            const faqKeywords = faq.question.split(/\s+/);
            
            keywords.forEach(keyword => {
                if (faqKeywords.some(faqKeyword => faqKeyword.includes(keyword) || keyword.includes(faqKeyword))) {
                    score++;
                }
            });

            if (score > bestScore && score >= 2) {
                bestScore = score;
                bestMatch = faq.answer;
            }
        }

        return bestMatch;
    }

    // Generate AI-like response
    function generateResponse(userQuestion) {
        const faqAnswer = findFAQAnswer(userQuestion);
        
        if (faqAnswer) {
            return faqAnswer;
        }

        // Fallback responses based on keywords
        const questionLower = userQuestion.toLowerCase();
        
        if (questionLower.includes('broker') || questionLower.includes('brokers')) {
            return getTranslation('faqBot.brokerInfo');
        }
        
        if (questionLower.includes('trading') || questionLower.includes('operar')) {
            return getTranslation('faqBot.tradingInfo');
        }
        
        if (questionLower.includes('regul') || questionLower.includes('regulacion')) {
            return getTranslation('faqBot.regulationInfo');
        }
        
        if (questionLower.includes('deposit') || questionLower.includes('deposito')) {
            return getTranslation('faqBot.depositInfo');
        }
        
        if (questionLower.includes('withdraw') || questionLower.includes('retiro')) {
            return getTranslation('faqBot.withdrawInfo');
        }

        // Default response
        return getTranslation('faqBot.defaultResponse');
    }

    // Get translation
    function getTranslation(key) {
        if (typeof languages !== 'undefined' && languages[currentLanguage]) {
            const keys = key.split('.');
            let value = languages[currentLanguage];
            
            for (const k of keys) {
                if (value && value[k]) {
                    value = value[k];
                } else {
                    return key;
                }
            }
            return value;
        }
        return key;
    }

    // Create chatbot HTML
    function createChatbotHTML() {
        const chatbotHTML = `
            <div id="faqChatbot" class="faq-chatbot">
                <div class="chatbot-header">
                    <div class="chatbot-title">
                        <i class="fas fa-robot"></i>
                        <span data-translate="faqBot.title">Asistente de Preguntas</span>
                    </div>
                    <button class="chatbot-close" id="chatbotClose">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="chatbot-messages" id="chatbotMessages">
                    <div class="chatbot-message bot-message">
                        <div class="message-avatar">
                            <i class="fas fa-robot"></i>
                        </div>
                        <div class="message-content">
                            <p data-translate="faqBot.welcome">¡Hola! Soy tu asistente de preguntas frecuentes. ¿En qué puedo ayudarte sobre brokers y trading en Latinoamérica?</p>
                        </div>
                    </div>
                </div>
                <div class="chatbot-input-container">
                    <input type="text" id="chatbotInput" class="chatbot-input" placeholder="Escribe tu pregunta..." data-translate-placeholder="faqBot.placeholder">
                    <button id="chatbotSend" class="chatbot-send">
                        <i class="fas fa-paper-plane"></i>
                    </button>
                </div>
            </div>
            <button id="chatbotToggle" class="chatbot-toggle">
                <i class="fas fa-comments"></i>
                <span class="chatbot-badge" id="chatbotBadge">1</span>
            </button>
        `;
        
        document.body.insertAdjacentHTML('beforeend', chatbotHTML);
    }

    // Add message to chat
    function addMessage(text, isBot = false) {
        const messagesContainer = document.getElementById('chatbotMessages');
        if (!messagesContainer) return;

        const messageDiv = document.createElement('div');
        messageDiv.className = `chatbot-message ${isBot ? 'bot-message' : 'user-message'}`;
        
        const avatar = isBot 
            ? '<div class="message-avatar"><i class="fas fa-robot"></i></div>'
            : '<div class="message-avatar user-avatar"><i class="fas fa-user"></i></div>';
        
        messageDiv.innerHTML = `
            ${avatar}
            <div class="message-content">
                <p>${text}</p>
            </div>
        `;

        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;

        // Update badge
        if (!isBot) {
            const badge = document.getElementById('chatbotBadge');
            if (badge) {
                const count = parseInt(badge.textContent) || 0;
                badge.textContent = count + 1;
            }
        }
    }

    // Send message
    function sendMessage() {
        const input = document.getElementById('chatbotInput');
        if (!input || !input.value.trim()) return;

        const userQuestion = input.value.trim();
        addMessage(userQuestion, false);
        chatHistory.push({ role: 'user', content: userQuestion });
        
        input.value = '';
        input.disabled = true;

        // Show typing indicator
        const messagesContainer = document.getElementById('chatbotMessages');
        const typingIndicator = document.createElement('div');
        typingIndicator.className = 'chatbot-message bot-message typing-indicator';
        typingIndicator.innerHTML = `
            <div class="message-avatar"><i class="fas fa-robot"></i></div>
            <div class="message-content">
                <div class="typing-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        `;
        messagesContainer.appendChild(typingIndicator);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;

        // Generate response after delay
        setTimeout(() => {
            typingIndicator.remove();
            const response = generateResponse(userQuestion);
            addMessage(response, true);
            chatHistory.push({ role: 'assistant', content: response });
            input.disabled = false;
            input.focus();
        }, 1000 + Math.random() * 1000); // Simulate thinking time
    }

    // Toggle chatbot
    function toggleChatbot() {
        const chatbot = document.getElementById('faqChatbot');
        if (!chatbot) return;

        isOpen = !isOpen;
        chatbot.classList.toggle('open', isOpen);
        
        if (isOpen) {
            const input = document.getElementById('chatbotInput');
            if (input) {
                setTimeout(() => input.focus(), 300);
            }
        }
    }

    // Initialize chatbot
    function initChatbot() {
        createChatbotHTML();
        
        // Event listeners
        const toggle = document.getElementById('chatbotToggle');
        const close = document.getElementById('chatbotClose');
        const send = document.getElementById('chatbotSend');
        const input = document.getElementById('chatbotInput');

        if (toggle) {
            toggle.addEventListener('click', toggleChatbot);
        }

        if (close) {
            close.addEventListener('click', toggleChatbot);
        }

        if (send) {
            send.addEventListener('click', sendMessage);
        }

        if (input) {
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    sendMessage();
                }
            });
        }

        // Listen for language changes
        window.addEventListener('languageChanged', (event) => {
            currentLanguage = event.detail.language || localStorage.getItem('language') || 'es';
            // Reload chatbot with new language
            const messagesContainer = document.getElementById('chatbotMessages');
            if (messagesContainer) {
                messagesContainer.innerHTML = `
                    <div class="chatbot-message bot-message">
                        <div class="message-avatar">
                            <i class="fas fa-robot"></i>
                        </div>
                        <div class="message-content">
                            <p data-translate="faqBot.welcome">¡Hola! Soy tu asistente de preguntas frecuentes. ¿En qué puedo ayudarte sobre brokers y trading en Latinoamérica?</p>
                        </div>
                    </div>
                `;
                if (typeof window.applyTranslations === 'function') {
                    window.applyTranslations(currentLanguage);
                }
            }
            
            // Update placeholder
            const input = document.getElementById('chatbotInput');
            if (input) {
                const placeholder = getTranslation('faqBot.placeholder');
                input.placeholder = placeholder;
            }
            
            // Update title
            const title = document.querySelector('.chatbot-title span');
            if (title) {
                title.textContent = getTranslation('faqBot.title');
            }
        });
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initChatbot);
    } else {
        initChatbot();
    }
})();

