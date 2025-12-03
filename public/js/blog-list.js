// Blog List Loader - Dynamically loads blog posts from blogPostMap
(function() {
    'use strict';
    
    // Wait for blog-post.js to load
    function initializeBlogList() {
        if (typeof blogPostMap === 'undefined') {
            console.warn('blog-post.js not loaded yet, retrying...');
            setTimeout(initializeBlogList, 100);
            return;
        }
        
        const blogGrid = document.querySelector('.blog-grid');
        if (!blogGrid) {
            console.warn('Blog grid not found');
            return;
        }
        
        // Get current language
        const currentLang = localStorage.getItem('language') || 'es';
        const translations = typeof languages !== 'undefined' ? languages[currentLang] : null;
        
        // Convert blogPostMap to array and sort by date (newest first)
        const blogPosts = Object.entries(blogPostMap).map(([slug, data]) => ({
            slug,
            ...data
        })).sort((a, b) => {
            // Simple date comparison (you might want to improve this)
            return new Date(b.date.replace(/\s/g, ' ')) - new Date(a.date.replace(/\s/g, ' '));
        });
        
        // Remove all existing blog cards (hardcoded ones)
        const existingCards = blogGrid.querySelectorAll('.blog-card');
        existingCards.forEach(card => card.remove());
        
        // Remove loading message
        const loadingMsg = blogGrid.querySelector('#blog-loading');
        if (loadingMsg) loadingMsg.remove();
        
        // Generate blog cards
        blogPosts.forEach(post => {
            // Get translation keys (e.g., 'blog.posts.chooseForexBroker.title' -> 'chooseForexBroker')
            const titleKey = post.titleKey.split('.').pop();
            const descKey = post.descriptionKey.split('.').pop();
            const catKey = post.categoryKey.split('.').pop();
            
            const title = translations && translations.blog && translations.blog.posts && translations.blog.posts[titleKey]
                ? translations.blog.posts[titleKey].title || translations.blog.posts[titleKey] || post.titleKey
                : post.titleKey;
            
            const description = translations && translations.blog && translations.blog.posts && translations.blog.posts[descKey]
                ? translations.blog.posts[descKey].description || translations.blog.posts[descKey] || post.descriptionKey
                : post.descriptionKey;
            
            const category = translations && translations.blog && translations.blog.categories && translations.blog.categories[catKey]
                ? translations.blog.categories[catKey] || post.categoryKey
                : post.categoryKey;
            
            const gradientColors = [
                'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
                'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
                'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
                'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
                'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
                'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)'
            ];
            const randomGradient = gradientColors[Math.floor(Math.random() * gradientColors.length)];
            
            const blogCard = document.createElement('div');
            blogCard.className = 'blog-card';
            blogCard.style.cssText = 'background: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); transition: transform 0.3s ease;';
            blogCard.innerHTML = `
                <div style="height: 200px; overflow: hidden; background: ${randomGradient}; position: relative;">
                    <img src="${post.imageUrl}" alt="${title}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <div style="display: none; position: absolute; top: 0; left: 0; width: 100%; height: 100%; align-items: center; justify-content: center; background: ${randomGradient};">
                        <i class="fas fa-newspaper" style="font-size: 48px; color: #fff;"></i>
                    </div>
                </div>
                <div style="padding: 25px;">
                    <div style="display: flex; gap: 15px; margin-bottom: 15px; font-size: 14px; color: #666;">
                        <span><i class="fas fa-calendar"></i> ${post.date}</span>
                        <span><i class="fas fa-tag"></i> ${category}</span>
                    </div>
                    <h3 style="margin-bottom: 10px; color: #333;">${title}</h3>
                    <p style="color: #666; line-height: 1.6; margin-bottom: 20px;">${description}</p>
                    <a href="/blog/${post.slug}" class="btn btn-primary" style="display: inline-block; padding: 10px 20px; background: #667eea; color: white; text-decoration: none; border-radius: 5px;">Leer Más</a>
                </div>
            `;
            
            blogGrid.appendChild(blogCard);
        });
        
        console.log(`Loaded ${blogPosts.length} blog posts dynamically`);
    }
    
    function getNestedValue(obj, path) {
        return path.split('.').reduce((current, key) => current && current[key], obj);
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeBlogList);
    } else {
        initializeBlogList();
    }
})();

