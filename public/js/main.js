// Main JavaScript for LatamBrokerReviews

// Translation helper function
function getTranslation(key) {
    if (typeof languages !== 'undefined') {
        const currentLang = localStorage.getItem('language') || 'en';
        const translations = languages[currentLang];
        if (translations) {
            return key.split('.').reduce((current, k) => current && current[k], translations) || key;
        }
    }
    return key;
}

// Translate broker feature names
function translateBrokerFeature(featureName) {
    if (typeof languages !== 'undefined') {
        const currentLang = localStorage.getItem('language') || 'en';
        const translations = languages[currentLang];
        if (translations && translations.brokers && translations.brokers.features) {
            return translations.brokers.features[featureName] || featureName;
        }
    }
    return featureName;
}

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

// Initialize website functionality
function initializeWebsite() {
    setupNavigation();
    loadFeaturedBrokers();
    loadRecentReviews();
    setupContactForm();
    setupSmoothScrolling();
    setupMobileMenu();
    setupEventListeners();
}

// Setup event listeners for buttons
function setupEventListeners() {
    // Load more reviews button
    const loadMoreBtn = document.getElementById('loadMoreReviewsBtn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            if (window.reviewsManager && window.reviewsManager.loadReviews) {
                window.reviewsManager.loadReviews();
            }
        });
    }
    
    // Review helpful buttons (delegated event listener)
    document.addEventListener('click', function(e) {
        if (e.target.closest('.helpful-btn')) {
            const button = e.target.closest('.helpful-btn');
            const reviewId = button.getAttribute('data-review-id');
            const isHelpful = button.getAttribute('data-helpful') === 'true';
            
            if (reviewId) {
                rateReview(reviewId, isHelpful);
            }
        }
    });
}

// Navigation functionality
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    // Setup dropdown functionality
    setupDropdowns();
    
    // Update active navigation link
    function updateActiveNav() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav();
}

// Setup dropdown functionality
function setupDropdowns() {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    
    dropdownToggles.forEach(toggle => {
        // Find dropdown - try nextElementSibling first, then parent's dropdown-menu
        let dropdown = toggle.nextElementSibling;
        if (!dropdown || !dropdown.classList.contains('dropdown-menu')) {
            const parent = toggle.closest('.nav-dropdown');
            if (parent) {
                dropdown = parent.querySelector('.dropdown-menu');
            }
        }
        
        if (!dropdown) {
            console.warn('Dropdown menu not found for toggle:', toggle);
            return;
        }
        
        // Toggle dropdown on click
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Close other dropdowns
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                if (menu !== dropdown) {
                    menu.classList.remove('show');
                }
            });
            
            // Toggle current dropdown
            dropdown.classList.toggle('show');
            
            // Ensure dropdown translations are applied when opened
            if (dropdown.classList.contains('show') && window.ensureDropdownTranslations) {
                window.ensureDropdownTranslations();
            }
        });
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.nav-dropdown')) {
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                menu.classList.remove('show');
            });
        }
    });
}

// Load featured brokers
async function loadFeaturedBrokers() {
    try {
        const response = await fetch('/api/brokers/featured');
        const data = await response.json();
        
        if (data.brokers) {
            displayBrokers(data.brokers, 'brokersGrid');
        }
    } catch (error) {
        console.error('Error loading featured brokers:', error);
        displayBrokerPlaceholders();
    }
}

// Load recent reviews
async function loadRecentReviews() {
    try {
        const response = await fetch('/api/reviews?limit=6');
        const data = await response.json();
        
        if (data.reviews) {
            displayReviews(data.reviews, 'reviewsGrid');
        }
    } catch (error) {
        console.error('Error loading recent reviews:', error);
        displayReviewPlaceholders();
    }
}

// Display brokers in grid
function displayBrokers(brokers, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = brokers.map(broker => `
        <div class="broker-card ${broker.isFeatured ? 'featured' : ''}" ${broker.isFeatured ? `data-featured-text="${getTranslation('brokers.features.Destacado')}"` : ''}>
            <div class="broker-header">
                <div class="broker-logo">
                    <i class="fas fa-building"></i>
                </div>
                <div class="broker-info">
                    <h3>${broker.name}</h3>
                    <div class="broker-rating">
                        ${generateStars(broker.rating)}
                        <span>${broker.rating.toFixed(1)}</span>
                    </div>
                </div>
            </div>
            <div class="broker-description">
                ${broker.description.substring(0, 150)}...
            </div>
            <div class="broker-features">
                ${broker.features.slice(0, 3).map(feature => 
                    `<span class="feature-tag">${translateBrokerFeature(feature.name)}</span>`
                ).join('')}
            </div>
            <div class="broker-actions">
                <a href="/broker/${broker.slug}" class="btn btn-primary">
                    <i class="fas fa-eye"></i>
                    ${getTranslation('brokers.details')}
                </a>
                <a href="${broker.website}" target="_blank" class="btn btn-secondary" onclick="console.log('Visit site clicked:', '${broker.website}')">
                    <i class="fas fa-external-link-alt"></i>
                    ${getTranslation('brokers.visitSite')}
                </a>
            </div>
        </div>
    `).join('');
}

// Display reviews in grid
function displayReviews(reviews, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = reviews.map(review => `
        <div class="review-card">
            <div class="review-header">
                <div class="review-user">
                    <div class="user-avatar">
                        ${review.user.name.charAt(0).toUpperCase()}
                    </div>
                    <div class="user-info">
                        <h4>${review.user.name}</h4>
                        <p>${review.user.country}</p>
                    </div>
                </div>
                <div class="review-rating">
                    ${generateStars(review.rating)}
                </div>
            </div>
            <div class="review-content">
                <h5>${review.title}</h5>
                <p>${review.content.substring(0, 200)}...</p>
            </div>
            <div class="review-actions">
                <button class="helpful-btn" data-review-id="${review._id}" data-helpful="true">
                    <i class="fas fa-thumbs-up"></i>
                    ${review.helpful || 0}
                </button>
                <button class="helpful-btn" data-review-id="${review._id}" data-helpful="false">
                    <i class="fas fa-thumbs-down"></i>
                    ${review.notHelpful || 0}
                </button>
                <span class="review-date">${formatDate(review.createdAt)}</span>
            </div>
        </div>
    `).join('');
}

// Generate star rating HTML
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

// Rate review helpfulness
async function rateReview(reviewId, helpful) {
    try {
        const response = await fetch(`/api/reviews/${reviewId}/helpful`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ helpful })
        });
        
        const data = await response.json();
        
        if (data.success) {
            // Update the UI with new counts
            const buttons = document.querySelectorAll(`[onclick*="${reviewId}"]`);
            buttons.forEach(button => {
                if (button.innerHTML.includes('thumbs-up')) {
                    button.innerHTML = `<i class="fas fa-thumbs-up"></i> ${data.helpful}`;
                } else if (button.innerHTML.includes('thumbs-down')) {
                    button.innerHTML = `<i class="fas fa-thumbs-down"></i> ${data.notHelpful}`;
                }
            });
        }
    } catch (error) {
        console.error('Error rating review:', error);
    }
}

// Setup contact form
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message'),
            country: 'Unknown' // You might want to detect this
        };

        try {
            const response = await fetch('/api/contacts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                showNotification('Mensaje enviado correctamente. Te contactaremos pronto.', 'success');
                contactForm.reset();
            } else {
                showNotification('Error al enviar el mensaje. Intenta nuevamente.', 'error');
            }
        } catch (error) {
            console.error('Error sending contact form:', error);
            showNotification('Error de conexión. Intenta nuevamente.', 'error');
        }
    });
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add styles if not already added
    if (!document.getElementById('notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'notification-styles';
        styles.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 10000;
                padding: 15px 20px;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                animation: slideIn 0.3s ease;
            }
            .notification-success {
                background: #d4edda;
                color: #155724;
                border: 1px solid #c3e6cb;
            }
            .notification-error {
                background: #f8d7da;
                color: #721c24;
                border: 1px solid #f5c6cb;
            }
            .notification-info {
                background: #d1ecf1;
                color: #0c5460;
                border: 1px solid #bee5eb;
            }
            .notification-content {
                display: flex;
                align-items: center;
                gap: 10px;
            }
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(styles);
    }
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 5000);
}

// Setup smooth scrolling
function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Setup mobile menu
function setupMobileMenu() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }
}

// Display placeholder content when data is loading
function displayBrokerPlaceholders() {
    const container = document.getElementById('brokersGrid');
    if (!container) return;
    
    container.innerHTML = `
        <div class="broker-card">
            <div class="broker-header">
                <div class="broker-logo">
                    <i class="fas fa-building"></i>
                </div>
                <div class="broker-info">
                    <h3>Libertex</h3>
                    <div class="broker-rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <span>4.8</span>
                    </div>
                </div>
            </div>
            <div class="broker-description">
                Libertex es uno de los brokers más confiables para trading en América Latina, ofreciendo acceso a más de 300 instrumentos financieros...
            </div>
            <div class="broker-features">
                <span class="feature-tag">Forex</span>
                <span class="feature-tag">CFDs</span>
                <span class="feature-tag">Criptomonedas</span>
            </div>
            <div class="broker-actions">
                <a href="https://libertex.com" target="_blank" class="btn btn-primary">
                    <i class="fas fa-eye"></i>
                    ${getTranslation('brokers.details')}
                </a>
                <a href="https://libertex.com" target="_blank" class="btn btn-secondary">
                    <i class="fas fa-external-link-alt"></i>
                    ${getTranslation('brokers.visitSite')}
                </a>
            </div>
        </div>
    `;
}

function displayReviewPlaceholders() {
    const container = document.getElementById('reviewsGrid');
    if (!container) return;
    
    container.innerHTML = `
        <div class="review-card">
            <div class="review-header">
                <div class="review-user">
                    <div class="user-avatar">M</div>
                    <div class="user-info">
                        <h4>María González</h4>
                        <p>México</p>
                    </div>
                </div>
                <div class="review-rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
            </div>
            <div class="review-content">
                <h5>Excelente plataforma para trading</h5>
                <p>He estado usando Libertex por más de 2 años y la experiencia ha sido excelente. La plataforma es muy intuitiva y el soporte al cliente es excepcional...</p>
            </div>
            <div class="review-actions">
                <button class="helpful-btn">
                    <i class="fas fa-thumbs-up"></i>
                    12
                </button>
                <button class="helpful-btn">
                    <i class="fas fa-thumbs-down"></i>
                    1
                </button>
                <span class="review-date">15 Nov 2024</span>
            </div>
        </div>
    `;
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Search functionality
function setupSearch() {
    const searchInput = document.getElementById('brokerSearch');
    if (!searchInput) return;
    
    const debouncedSearch = debounce(async (query) => {
        if (query.length < 2) return;
        
        try {
            const response = await fetch(`/api/brokers/search/${encodeURIComponent(query)}`);
            const data = await response.json();
            
            if (data.brokers) {
                displayBrokers(data.brokers, 'brokersGrid');
            }
        } catch (error) {
            console.error('Error searching brokers:', error);
        }
    }, 300);
    
    searchInput.addEventListener('input', (e) => {
        debouncedSearch(e.target.value);
    });
}

// Initialize search when DOM is ready
document.addEventListener('DOMContentLoaded', setupSearch);
