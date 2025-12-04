// Reviews functionality with translation support
(function() {
    'use strict';
    
    let currentLanguage = 'en';
    let reviews = [];
    let displayedCount = 0;
    let currentPage = 1;
    let totalPages = 1;
    let isLoading = false;
    const reviewsPerPage = 6;
    
    // Initialize reviews system
    function initReviews() {
        currentLanguage = localStorage.getItem('language') || 'en';
        currentPage = 1;
        reviews = [];
        displayedCount = 0;
        setupEventListeners();
        setupLoadMoreButtons();
        // Add a small delay to ensure server is ready
        setTimeout(() => {
        loadReviews();
        }, 500);
    }
    
    // Setup load more buttons directly
    function setupLoadMoreButtons() {
        // Wait for DOM to be ready and try multiple times
        const trySetup = (attempt = 0) => {
            const loadMoreBtn = document.getElementById('loadMoreBtn') || document.getElementById('loadMoreReviews');
            if (loadMoreBtn) {
                console.log('Setting up load more button directly');
                
                // Add data attribute for easier targeting
                loadMoreBtn.setAttribute('data-action', 'load-more');
                
                // Remove any existing listeners by cloning
                const newBtn = loadMoreBtn.cloneNode(true);
                newBtn.setAttribute('data-action', 'load-more');
                loadMoreBtn.parentNode.replaceChild(newBtn, loadMoreBtn);
                
                // Add direct click listener
                newBtn.addEventListener('click', function(e) {
                    console.log('Direct load more button click handler fired');
                    e.preventDefault();
                    e.stopPropagation();
                    loadMoreReviews();
                });
                
                // Also add mousedown as backup
                newBtn.addEventListener('mousedown', function(e) {
                    console.log('Load more button mousedown event');
                });
                
                console.log('Load more button setup complete');
            } else if (attempt < 5) {
                // Retry if button not found yet
                setTimeout(() => trySetup(attempt + 1), 500);
            } else {
                console.log('Load more button not found after multiple attempts');
            }
        };
        
        setTimeout(() => trySetup(), 500);
        setTimeout(() => trySetup(), 1500);
        setTimeout(() => trySetup(), 2500);
    }
    
    // Setup event listeners
    function setupEventListeners() {
        // Helpful buttons (delegated event listener)
        document.addEventListener('click', function(e) {
            if (e.target.closest('.helpful-btn, .not-helpful-btn')) {
                const button = e.target.closest('.helpful-btn, .not-helpful-btn');
                const reviewId = button.getAttribute('data-review-id');
                const action = button.getAttribute('data-action');
                
                if (reviewId && action === 'helpful') {
                    toggleHelpful(reviewId);
                } else if (reviewId && action === 'not-helpful') {
                    toggleNotHelpful(reviewId);
                }
            }
            
            // Load more button - check multiple ways
            const loadMoreBtn = e.target.id === 'loadMoreBtn' || e.target.id === 'loadMoreReviews' 
                ? e.target 
                : e.target.closest('#loadMoreBtn') || e.target.closest('#loadMoreReviews');
            
            // Also check for data-action attribute
            const loadMoreByData = e.target.getAttribute('data-action') === 'load-more' 
                ? e.target 
                : e.target.closest('[data-action="load-more"]');
            
            if (loadMoreBtn || loadMoreByData) {
                const btn = loadMoreBtn || loadMoreByData;
                console.log('Load more button clicked!', btn);
                e.preventDefault();
                e.stopPropagation();
                loadMoreReviews();
            }
        });
    }
    
    // Load reviews from API
    async function loadReviews(reset = true) {
        if (isLoading) {
            console.log('Already loading, skipping...');
            return;
        }
        
        if (reset) {
            currentPage = 1;
            reviews = [];
            displayedCount = 0;
        }
        
        try {
            isLoading = true;
            console.log('🔄 Loading reviews for language:', currentLanguage, 'page:', currentPage, 'reset:', reset);
            
            // Use static data loader or JSON file
            let data;
            if (typeof window.loadReviews === 'function') {
                try {
                    console.log('📞 Calling window.loadReviews with page:', currentPage, 'limit:', reviewsPerPage);
                    data = await window.loadReviews({ 
                        limit: reviewsPerPage,
                        page: currentPage 
                    });
                    console.log('✅ Received data from window.loadReviews:', {
                        reviewsCount: data?.reviews?.length || 0,
                        total: data?.total || 0,
                        totalPages: data?.totalPages || 0,
                        currentPage: data?.currentPage || 0
                    });
                    // Validate data structure
                    if (!data || !Array.isArray(data.reviews)) {
                        throw new Error('Invalid data structure received: ' + JSON.stringify(data));
                    }
                } catch (loadError) {
                    console.error('❌ Error calling window.loadReviews:', loadError);
                    throw loadError;
                }
            } else {
                // Fallback to direct JSON fetch
                console.warn('window.loadReviews not available, using direct fetch');
                const paths = [
                    '/public/data/reviews.json',
                    './public/data/reviews.json',
                    'public/data/reviews.json',
                    '/data/reviews.json',
                    './data/reviews.json'
                ];
                
                let reviews = [];
                for (const path of paths) {
                    try {
                        const response = await fetch(path);
                        if (!response.ok) continue;
                        
                        const text = await response.text();
                        if (text.trim().startsWith('<!DOCTYPE') || text.trim().startsWith('<html')) {
                            continue;
                        }
                        
                        const jsonData = JSON.parse(text);
                        if (jsonData && Array.isArray(jsonData.reviews)) {
                            reviews = jsonData.reviews;
                            break;
                        } else if (Array.isArray(jsonData)) {
                            reviews = jsonData;
                            break;
                        }
                    } catch (e) {
                        continue;
                    }
                }
                
                const start = (currentPage - 1) * reviewsPerPage;
                const end = start + reviewsPerPage;
                data = {
                    reviews: reviews.slice(start, end),
                    total: reviews.length,
                    totalPages: Math.ceil(reviews.length / reviewsPerPage),
                    currentPage: currentPage
                };
            }
            
            console.log('Reviews loaded successfully:', data);
            console.log('Received reviews:', data.reviews?.length || 0);
            totalPages = data.totalPages || 1;
            
            const newReviews = data.reviews || [];
            
            if (reset) {
                reviews = newReviews;
                displayedCount = 0;
            } else {
                // Only append new reviews that aren't already in the array
                newReviews.forEach(newReview => {
                    const exists = reviews.some(r => r._id === newReview._id || 
                        (r.id && r.id === newReview.id) ||
                        (r.user && r.user.name === newReview.user?.name && 
                         r.title === newReview.title));
                    if (!exists) {
                        reviews.push(newReview);
                    }
                });
            }
            
            console.log('Total reviews in array:', reviews.length);
            displayReviews(reset);
            updateLoadMoreButton();
        } catch (error) {
            console.error('Error loading reviews:', error);
            
            // Show user-friendly error message
            const errorContainer = document.getElementById('reviewsGrid') || document.getElementById('reviewsContainer');
            if (errorContainer) {
                errorContainer.innerHTML = `
                    <div class="error-message" style="text-align: center; padding: 40px; color: #dc3545;">
                        <i class="fas fa-exclamation-triangle" style="font-size: 3rem; margin-bottom: 20px;"></i>
                        <h3>Error loading reviews</h3>
                        <p>${error.message || 'Unable to connect to the server. Please check your connection and try again.'}</p>
                        <button onclick="location.reload()" class="btn btn-primary" style="margin-top: 20px;">
                            <i class="fas fa-sync-alt"></i> Retry
                        </button>
                    </div>
                `;
            }
            
            // Retry after a short delay if it's a connection error
            if (error.message.includes('ERR_CONNECTION_REFUSED') || 
                error.message.includes('Failed to fetch') ||
                error.name === 'TypeError') {
                console.log('Connection error detected. Retrying in 2 seconds...');
                setTimeout(() => {
                    if (!isLoading) {
                        loadReviews(reset);
                    }
                }, 2000);
            }
        } finally {
            isLoading = false;
        }
    }
    
    // Load more reviews
    function loadMoreReviews() {
        console.log('🔽 loadMoreReviews called. currentPage:', currentPage, 'totalPages:', totalPages, 'isLoading:', isLoading, 'displayedCount:', displayedCount);
        
        if (currentPage >= totalPages) {
            console.log('⚠️ Cannot load more - already on last page');
            updateLoadMoreButton();
            return;
        }
        
        if (isLoading) {
            console.log('⚠️ Cannot load more - already loading');
            return;
        }
        
        console.log('📥 Loading more reviews. Current page:', currentPage, 'Next page:', currentPage + 1);
        currentPage++;
        loadReviews(false);
    }
    
    // Update load more button visibility
    function updateLoadMoreButton() {
        const loadMoreBtn = document.getElementById('loadMoreBtn') || document.getElementById('loadMoreReviews');
        if (loadMoreBtn) {
            console.log('Updating load more button. Current page:', currentPage, 'Total pages:', totalPages);
            if (currentPage >= totalPages) {
                loadMoreBtn.style.display = 'none';
                loadMoreBtn.disabled = true;
                console.log('Hide load more button - all reviews loaded');
            } else {
                loadMoreBtn.style.display = 'block';
                loadMoreBtn.style.visibility = 'visible';
                loadMoreBtn.disabled = isLoading;
                console.log('Show load more button. Disabled:', isLoading);
            }
        } else {
            console.log('Load more button not found');
        }
    }
    
    // Display reviews on the page
    function displayReviews(reset = true) {
        // Try different container IDs
        const reviewsContainer = document.getElementById('reviewsContainer') || 
                                 document.getElementById('reviewsGrid') ||
                                 document.getElementById('reviews-list');
        
        if (!reviewsContainer) {
            console.log('Reviews container not found');
            return;
        }
        
        if (reset) {
            reviewsContainer.innerHTML = '';
            displayedCount = 0;
        }
        
        // Calculate which reviews to display - only show reviews that haven't been displayed yet
        const reviewsToDisplay = reviews.slice(displayedCount);
        
        console.log(`Displaying ${reviewsToDisplay.length} new reviews. Already displayed: ${displayedCount}, Total in array: ${reviews.length}`);
        
        if (reviewsToDisplay.length === 0) {
            console.log('No new reviews to display');
            return;
        }
        
        reviewsToDisplay.forEach(review => {
            // Check if review is already displayed to prevent duplicates
            const reviewId = review._id || review.id || `${review.user?.name}-${review.title}`;
            const existingReview = reviewsContainer.querySelector(`[data-review-id="${reviewId}"]`);
            
            if (!existingReview) {
                const reviewElement = createReviewElement(review);
                reviewsContainer.appendChild(reviewElement);
                displayedCount++;
            } else {
                console.log('Review already displayed, skipping:', reviewId);
            }
        });
        
        console.log(`Now displayed ${displayedCount} reviews total.`);
    }
    
    // Create a review element
    function createReviewElement(review) {
        const reviewDiv = document.createElement('div');
        reviewDiv.className = 'review-card';
        
        // Add data attribute for duplicate detection
        const reviewId = review._id || review.id || `${review.user?.name}-${review.title}`;
        reviewDiv.setAttribute('data-review-id', reviewId);
        
        // Reviews are already translated by static-brokers.js
        const title = review.title;
        const content = review.content;
        const pros = review.pros || [];
        const cons = review.cons || [];
        
        reviewDiv.innerHTML = `
            <div class="review-header">
                <div class="review-user">
                    <div class="user-avatar">
                        <i class="fas fa-user"></i>
                    </div>
                    <div class="user-info">
                        <h4>${review.user.name}</h4>
                        <p>${review.user.country}</p>
                    </div>
                </div>
                <div class="review-rating">
                    ${generateStars(review.rating)}
                    <span class="rating-number">${review.rating}/5</span>
                </div>
            </div>
            
            <div class="review-content">
                <h3 class="review-title">${title}</h3>
                <p class="review-text">${content}</p>
                
                <div class="review-details">
                    <div class="review-pros">
                        <h4>${currentLanguage === 'es' ? 'Pros:' : 'Pros:'}</h4>
                        <ul>
                            ${pros.map(pro => `<li>${pro}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="review-cons">
                        <h4>${currentLanguage === 'es' ? 'Contras:' : 'Cons:'}</h4>
                        <ul>
                            ${cons.map(con => `<li>${con}</li>`).join('')}
                        </ul>
                    </div>
                </div>
                
                <div class="review-meta">
                    <span class="experience">${getExperienceText(review.experience)}</span>
                    <span class="duration">${getDurationText(review.tradingDuration)}</span>
                    ${review.verified ? '<span class="verified"><i class="fas fa-check-circle"></i> Verified</span>' : ''}
                </div>
                
                <div class="review-actions">
                    <button class="helpful-btn" data-review-id="${review._id}" data-action="helpful">
                        <i class="fas fa-thumbs-up"></i>
                        ${review.helpful || 0} ${currentLanguage === 'es' ? 'Útil' : 'Helpful'}
                    </button>
                    <button class="not-helpful-btn" data-review-id="${review._id}" data-action="not-helpful">
                        <i class="fas fa-thumbs-down"></i>
                        ${review.notHelpful || 0} ${currentLanguage === 'es' ? 'No útil' : 'Not helpful'}
                    </button>
                </div>
            </div>
        `;
        
        return reviewDiv;
    }
    
    // Generate star rating display
    function generateStars(rating) {
        let stars = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars += '<i class="fas fa-star"></i>';
            } else {
                stars += '<i class="far fa-star"></i>';
            }
        }
        return stars;
    }
    
    // Get experience text in current language
    function getExperienceText(experience) {
        const translations = {
            'beginner': currentLanguage === 'es' ? 'Principiante' : 'Beginner',
            'intermediate': currentLanguage === 'es' ? 'Intermedio' : 'Intermediate',
            'advanced': currentLanguage === 'es' ? 'Avanzado' : 'Advanced'
        };
        return translations[experience] || experience;
    }
    
    // Get duration text in current language
    function getDurationText(duration) {
        const translations = {
            'less-than-1-year': currentLanguage === 'es' ? 'Menos de 1 año' : 'Less than 1 year',
            '1-3-years': currentLanguage === 'es' ? '1-3 años' : '1-3 years',
            '3-5-years': currentLanguage === 'es' ? '3-5 años' : '3-5 years',
            'more-than-5-years': currentLanguage === 'es' ? 'Más de 5 años' : 'More than 5 years'
        };
        return translations[duration] || duration;
    }
    
    // Toggle helpful rating
    async function toggleHelpful(reviewId) {
        try {
            // For static site, use localStorage instead of API
            const storageKey = `review_${reviewId}_helpful`;
            const currentCount = parseInt(localStorage.getItem(storageKey) || '0') + 1;
            localStorage.setItem(storageKey, currentCount.toString());
            
            // Update UI immediately
            const button = document.querySelector(`[data-review-id="${reviewId}"][data-action="helpful"]`);
            if (button) {
                const span = button.querySelector('span');
                if (span) {
                    const baseCount = parseInt(span.textContent) || 0;
                    span.textContent = baseCount + currentCount;
                }
            }
            
            // Visual feedback
            if (button) {
                button.style.opacity = '0.7';
                setTimeout(() => {
                    button.style.opacity = '1';
                }, 200);
            }
        } catch (error) {
            console.error('Error rating review:', error);
        }
    }
    
    // Toggle not helpful rating
    async function toggleNotHelpful(reviewId) {
        try {
            // For static site, use localStorage instead of API
            const storageKey = `review_${reviewId}_notHelpful`;
            const currentCount = parseInt(localStorage.getItem(storageKey) || '0') + 1;
            localStorage.setItem(storageKey, currentCount.toString());
            
            // Update UI immediately
            const button = document.querySelector(`[data-review-id="${reviewId}"][data-action="not-helpful"]`);
            if (button) {
                const span = button.querySelector('span');
                if (span) {
                    const baseCount = parseInt(span.textContent) || 0;
                    span.textContent = baseCount + currentCount;
                }
            }
            
            // Visual feedback
            if (button) {
                button.style.opacity = '0.7';
                setTimeout(() => {
                    button.style.opacity = '1';
                }, 200);
            }
        } catch (error) {
            console.error('Error rating review:', error);
        }
    }
    
    // Update language and reload reviews
    function updateLanguage(lang) {
        currentLanguage = lang;
        currentPage = 1;
        reviews = [];
        displayedCount = 0;
        loadReviews(true);
    }
    
    // Make functions globally available
    window.reviewsManager = {
        init: initReviews,
        updateLanguage: updateLanguage,
        loadReviews: loadReviews,
        loadMoreReviews: loadMoreReviews
    };
    
    // Expose loadMoreReviews globally for direct access
    window.loadMoreReviews = loadMoreReviews;
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initReviews);
    } else {
        initReviews();
    }
})();
