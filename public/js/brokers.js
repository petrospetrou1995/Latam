// Brokers page functionality
(function() {
    'use strict';
    
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
    
    let brokers = [];
    let filteredBrokers = [];
    let currentView = 'grid';
    let currentPage = 1;
    let itemsPerPage = 9;
    let comparisonBrokers = [];
    
    // Initialize brokers page
    function initBrokers() {
        loadBrokers();
        setupEventListeners();
        updateView();
        applyUrlFilters();
    }
    
    // Load brokers from API
    async function loadBrokers() {
        try {
            const response = await fetch('/api/brokers');
            const data = await response.json();
            brokers = data.brokers || [];
            filteredBrokers = [...brokers];
            displayBrokers();
        } catch (error) {
            console.error('Error loading brokers:', error);
            showError('Error loading brokers. Please try again.');
        }
    }
    
    // Apply URL-based filters
    function applyUrlFilters() {
        const path = window.location.pathname;
        const categoryMap = {
            '/brokers/forex': 'forex',
            '/brokers/stocks': 'stocks', 
            '/brokers/crypto': 'crypto',
            '/brokers/cfd': 'cfd',
            '/brokers/commodities': 'commodities'
        };
        
        const category = categoryMap[path];
        if (category) {
            const categoryFilter = document.getElementById('categoryFilter');
            if (categoryFilter) {
                categoryFilter.value = category;
                // Update page title and hero content
                updatePageContent(category);
                // Apply filters after a short delay to ensure brokers are loaded
                setTimeout(() => {
                    applyFilters();
                }, 100);
            }
        }
    }
    
    // Update page content based on category
    function updatePageContent(category) {
        const categoryNames = {
            'forex': 'Forex',
            'stocks': 'Acciones', 
            'crypto': 'Criptomonedas',
            'cfd': 'CFDs',
            'commodities': 'Commodities'
        };
        
        const categoryName = categoryNames[category];
        if (categoryName) {
            // Update hero title
            const heroTitle = document.querySelector('.brokers-hero h1');
            if (heroTitle) {
                heroTitle.textContent = `Mejores Brokers de ${categoryName} en América Latina`;
            }
            
            // Update hero subtitle
            const heroSubtitle = document.querySelector('.brokers-hero p');
            if (heroSubtitle) {
                heroSubtitle.textContent = `Descubre los mejores brokers especializados en ${categoryName.toLowerCase()} para traders latinoamericanos.`;
            }
            
            // Update page title
            document.title = `Brokers de ${categoryName} - LatamBrokerReviews`;
        }
    }
    
    // Setup event listeners
    function setupEventListeners() {
        // Filter controls
        document.getElementById('categoryFilter')?.addEventListener('change', applyFilters);
        document.getElementById('ratingFilter')?.addEventListener('change', applyFilters);
        document.getElementById('countryFilter')?.addEventListener('change', applyFilters);
        document.getElementById('sortFilter')?.addEventListener('change', applyFilters);
        
        // Filter buttons
        document.getElementById('applyFiltersBtn')?.addEventListener('click', applyFilters);
        document.getElementById('clearFiltersBtn')?.addEventListener('click', clearFilters);
        
        // View controls
        document.getElementById('gridView')?.addEventListener('click', () => setView('grid'));
        document.getElementById('listView')?.addEventListener('click', () => setView('list'));
        document.getElementById('compareView')?.addEventListener('click', () => setView('compare'));
        
        // Modal controls
        document.getElementById('comparisonModal')?.addEventListener('click', (e) => {
            if (e.target.id === 'comparisonModal') {
                closeComparison();
            }
        });
        
        // Comparison modal buttons
        document.getElementById('closeComparisonBtn')?.addEventListener('click', closeComparison);
        document.getElementById('closeComparisonModalBtn')?.addEventListener('click', closeComparison);
        document.getElementById('exportComparisonBtn')?.addEventListener('click', exportComparison);
        document.getElementById('openComparisonModalBtn')?.addEventListener('click', openComparisonModal);
        
        // Delegated event listeners for dynamically generated buttons
        document.addEventListener('click', function(e) {
            // Add to comparison buttons
            if (e.target.closest('.btn-compare[data-action="add-comparison"]')) {
                const button = e.target.closest('.btn-compare');
                const brokerId = button.getAttribute('data-broker-id');
                if (brokerId) {
                    addToComparison(brokerId);
                }
            }
            
            // Remove from comparison buttons
            if (e.target.closest('.remove-btn[data-action="remove-comparison"]')) {
                const button = e.target.closest('.remove-btn');
                const brokerId = button.getAttribute('data-broker-id');
                if (brokerId) {
                    removeFromComparison(brokerId);
                }
            }
            
            // Pagination buttons
            if (e.target.closest('button[data-action="change-page"]')) {
                const button = e.target.closest('button[data-action="change-page"]');
                const page = parseInt(button.getAttribute('data-page'));
                if (page && !button.disabled) {
                    changePage(page);
                }
            }
        });
    }
    
    // Apply filters
    function applyFilters() {
        const category = document.getElementById('categoryFilter')?.value || '';
        const rating = document.getElementById('ratingFilter')?.value || '';
        const country = document.getElementById('countryFilter')?.value || '';
        const sort = document.getElementById('sortFilter')?.value || 'rating';
        
        filteredBrokers = brokers.filter(broker => {
            if (category && broker.category !== category) return false;
            if (rating && broker.rating < parseFloat(rating)) return false;
            if (country && !broker.countries.includes(country)) return false;
            return true;
        });
        
        // Sort brokers
        filteredBrokers.sort((a, b) => {
            switch (sort) {
                case 'rating':
                    return b.rating - a.rating;
                case 'reviews':
                    return b.totalReviews - a.totalReviews;
                case 'name':
                    return a.name.localeCompare(b.name);
                default:
                    return 0;
            }
        });
        
        currentPage = 1;
        displayBrokers();
    }
    
    // Clear filters
    function clearFilters() {
        document.getElementById('categoryFilter').value = '';
        document.getElementById('ratingFilter').value = '';
        document.getElementById('countryFilter').value = '';
        document.getElementById('sortFilter').value = 'rating';
        
        filteredBrokers = [...brokers];
        currentPage = 1;
        displayBrokers();
    }
    
    // Set view mode
    function setView(view) {
        currentView = view;
        updateView();
        displayBrokers();
    }
    
    // Update view buttons
    function updateView() {
        document.querySelectorAll('.view-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        const viewBtn = document.getElementById(currentView + 'View');
        if (viewBtn) {
            viewBtn.classList.add('active');
        }
        
        const container = document.getElementById('brokersContainer');
        if (container) {
            container.className = `brokers-grid ${currentView}-view`;
        }
    }
    
    // Display brokers
    function displayBrokers() {
        const container = document.getElementById('brokersContainer');
        if (!container) return;
        
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const pageBrokers = filteredBrokers.slice(startIndex, endIndex);
        
        if (currentView === 'compare') {
            displayComparisonView();
        } else {
            container.innerHTML = pageBrokers.map(broker => createBrokerCard(broker)).join('');
        }
        
        updatePagination();
    }
    
    // Create broker card
    function createBrokerCard(broker) {
        const isFeatured = broker.isFeatured ? 'featured' : '';
        const stars = generateStars(broker.rating);
        
        return `
            <div class="broker-card ${currentView === 'list' ? 'list-view' : ''} ${isFeatured}" ${isFeatured ? `data-featured-text="${getTranslation('brokers.features.Destacado')}"` : ''}>
                <div class="broker-header">
                    <div class="broker-info">
                        <h3>${broker.name}</h3>
                        <div class="broker-rating">
                            <div class="stars">${stars}</div>
                            <span class="rating-number">${broker.rating}/5</span>
                            <span class="reviews-count">(${broker.totalReviews} ${getTranslation('brokers.reviews')})</span>
                        </div>
                    </div>
                </div>
                
                <div class="broker-description">
                    ${broker.description.substring(0, 150)}...
                </div>
                
                <div class="broker-features">
                    <h4>${getTranslation('brokers.mainFeatures') || 'Características principales'}:</h4>
                    <div class="features-list">
                        ${broker.features.slice(0, 3).map(feature => 
                            `<span class="feature-tag">${translateBrokerFeature(feature.name)}</span>`
                        ).join('')}
                    </div>
                </div>
                
                <div class="broker-stats">
                    <div class="stat-item">
                        <span class="stat-value">${broker.rating}</span>
                        <span class="stat-label">${getTranslation('brokers.rating')}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-value">${broker.totalReviews}</span>
                        <span class="stat-label">${getTranslation('brokers.reviews')}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-value">${broker.countries.length}</span>
                        <span class="stat-label">${getTranslation('brokers.countries')}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-value">${broker.category}</span>
                        <span class="stat-label">${getTranslation('brokers.category')}</span>
                    </div>
                </div>
                
                <div class="broker-actions">
                    <a href="${broker.website}" target="_blank" class="btn-visit" onclick="console.log('Visit site clicked:', '${broker.website}')">
                        <i class="fas fa-external-link-alt"></i>
                        ${getTranslation('brokers.visitSite')}
                    </a>
                    <button class="btn-compare" data-broker-id="${broker._id}" data-action="add-comparison">
                        <i class="fas fa-balance-scale"></i>
                        ${getTranslation('brokers.view.compare')}
                    </button>
                    <a href="/broker/${broker.slug}" class="btn-reviews">
                        <i class="fas fa-star"></i>
                        ${getTranslation('brokers.reviews')}
                    </a>
                </div>
            </div>
        `;
    }
    
    // Generate star rating
    function generateStars(rating) {
        let stars = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars += '<i class="fas fa-star"></i>';
            } else if (i - 0.5 <= rating) {
                stars += '<i class="fas fa-star-half-alt"></i>';
            } else {
                stars += '<i class="far fa-star"></i>';
            }
        }
        return stars;
    }
    
    // Add broker to comparison
    function addToComparison(brokerId) {
        const broker = brokers.find(b => b._id === brokerId);
        if (!broker) return;
        
        if (comparisonBrokers.length >= 3) {
            alert(getTranslation('brokers.comparison.maxBrokers'));
            return;
        }
        
        if (comparisonBrokers.find(b => b._id === brokerId)) {
            alert(getTranslation('brokers.comparison.alreadyAdded'));
            return;
        }
        
        comparisonBrokers.push(broker);
        updateComparisonButton();
        
        if (currentView === 'compare') {
            displayComparisonView();
        }
    }
    
    // Remove broker from comparison
    function removeFromComparison(brokerId) {
        comparisonBrokers = comparisonBrokers.filter(b => b._id !== brokerId);
        updateComparisonButton();
        
        if (currentView === 'compare') {
            displayComparisonView();
        }
    }
    
    // Update comparison button
    function updateComparisonButton() {
        const compareBtn = document.getElementById('compareView');
        if (compareBtn) {
            const count = comparisonBrokers.length;
            compareBtn.innerHTML = `
                <i class="fas fa-balance-scale"></i>
                <span>Comparar ${count > 0 ? `(${count})` : ''}</span>
            `;
        }
    }
    
    // Display comparison view
    function displayComparisonView() {
        const container = document.getElementById('brokersContainer');
        if (!container) return;
        
        if (comparisonBrokers.length === 0) {
            container.innerHTML = `
                <div style="text-align: center; padding: 40px; color: #666;">
                    <i class="fas fa-balance-scale" style="font-size: 3rem; margin-bottom: 20px; opacity: 0.5;"></i>
                    <h3>Selecciona brokers para comparar</h3>
                    <p>Haz clic en "Comparar" en las tarjetas de brokers para agregarlos a la comparación.</p>
                </div>
            `;
            return;
        }
        
        container.innerHTML = `
            <div class="comparison-container">
                <div class="comparison-header">
                    <h3>Comparación de Brokers</h3>
                    <button class="btn btn-primary" id="openComparisonModalBtn">
                        <i class="fas fa-expand"></i>
                        Ver Comparación Completa
                    </button>
                </div>
                <div class="comparison-grid">
                    ${comparisonBrokers.map(broker => createComparisonCard(broker)).join('')}
                </div>
            </div>
        `;
    }
    
    // Create comparison card
    function createComparisonCard(broker) {
        return `
            <div class="broker-card comparison-card">
                <div class="broker-header">
                    <div class="broker-info">
                        <h3>${broker.name}</h3>
                        <div class="broker-rating">
                            <div class="stars">${generateStars(broker.rating)}</div>
                            <span class="rating-number">${broker.rating}/5</span>
                        </div>
                    </div>
                    <button class="remove-btn" data-broker-id="${broker._id}" data-action="remove-comparison">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                
                <div class="comparison-stats">
                    <div class="stat-row">
                        <span class="stat-label">${getTranslation('brokers.reviews')}:</span>
                        <span class="stat-value">${broker.totalReviews}</span>
                    </div>
                    <div class="stat-row">
                        <span class="stat-label">${getTranslation('brokers.countries')}:</span>
                        <span class="stat-value">${broker.countries.length}</span>
                    </div>
                    <div class="stat-row">
                        <span class="stat-label">${getTranslation('brokers.category')}:</span>
                        <span class="stat-value">${broker.category}</span>
                    </div>
                </div>
                
                <div class="broker-actions">
                    <a href="${broker.website}" target="_blank" class="btn-visit">
                        ${getTranslation('brokers.visitSite')}
                    </a>
                </div>
            </div>
        `;
    }
    
    // Open comparison modal
    function openComparisonModal() {
        if (comparisonBrokers.length === 0) {
            alert(getTranslation('brokers.comparison.noBrokers'));
            return;
        }
        
        const modal = document.getElementById('comparisonModal');
        const table = document.getElementById('comparisonTable');
        
        if (modal && table) {
            table.innerHTML = createComparisonTable();
            modal.style.display = 'block';
        }
    }
    
    // Close comparison modal
    function closeComparison() {
        const modal = document.getElementById('comparisonModal');
        if (modal) {
            modal.style.display = 'none';
        }
    }
    
    // Create comparison table
    function createComparisonTable() {
        if (comparisonBrokers.length === 0) return '';
        
        const features = [
            'name', 'rating', 'totalReviews', 'category', 'countries', 
            'languages', 'tradingPlatforms', 'accountTypes', 'regulations'
        ];
        
        let table = '<table class="comparison-table"><thead><tr><th>Característica</th>';
        comparisonBrokers.forEach(broker => {
            table += `<th>${broker.name}</th>`;
        });
        table += '</tr></thead><tbody>';
        
        features.forEach(feature => {
            table += `<tr><td>${getFeatureLabel(feature)}</td>`;
            comparisonBrokers.forEach(broker => {
                table += `<td>${getFeatureValue(broker, feature)}</td>`;
            });
            table += '</tr>';
        });
        
        table += '</tbody></table>';
        return table;
    }
    
    // Get feature label
    function getFeatureLabel(feature) {
        const labels = {
            'name': getTranslation('brokers.name') || 'Name',
            'rating': getTranslation('brokers.rating'),
            'totalReviews': getTranslation('brokers.reviews'),
            'category': getTranslation('brokers.category'),
            'countries': getTranslation('brokers.countries'),
            'languages': getTranslation('brokers.languages') || 'Languages',
            'tradingPlatforms': getTranslation('brokers.tradingPlatforms') || 'Trading Platforms',
            'accountTypes': getTranslation('brokers.accountTypes') || 'Account Types',
            'regulations': getTranslation('brokers.regulations') || 'Regulations'
        };
        return labels[feature] || feature;
    }
    
    // Get feature value
    function getFeatureValue(broker, feature) {
        const value = broker[feature];
        if (Array.isArray(value)) {
            return value.join(', ');
        }
        return value || 'N/A';
    }
    
    // Export comparison
    function exportComparison() {
        if (comparisonBrokers.length === 0) {
            alert(getTranslation('brokers.comparison.noExport'));
            return;
        }
        
        // Simple CSV export
        const csv = createCSV();
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'brokers-comparison.csv';
        a.click();
        window.URL.revokeObjectURL(url);
    }
    
    // Create CSV
    function createCSV() {
        const features = ['name', 'rating', 'totalReviews', 'category', 'countries', 'languages'];
        let csv = 'Característica,' + comparisonBrokers.map(b => b.name).join(',') + '\n';
        
        features.forEach(feature => {
            csv += getFeatureLabel(feature) + ',';
            comparisonBrokers.forEach(broker => {
                const value = getFeatureValue(broker, feature);
                csv += '"' + value.replace(/"/g, '""') + '",';
            });
            csv += '\n';
        });
        
        return csv;
    }
    
    // Update pagination
    function updatePagination() {
        const container = document.getElementById('pagination');
        if (!container) return;
        
        const totalPages = Math.ceil(filteredBrokers.length / itemsPerPage);
        if (totalPages <= 1) {
            container.innerHTML = '';
            return;
        }
        
        let pagination = '';
        
        // Previous button
        pagination += `
            <button ${currentPage === 1 ? 'disabled' : ''} data-page="${currentPage - 1}" data-action="change-page">
                <i class="fas fa-chevron-left"></i>
            </button>
        `;
        
        // Page numbers
        for (let i = 1; i <= totalPages; i++) {
            if (i === 1 || i === totalPages || (i >= currentPage - 2 && i <= currentPage + 2)) {
                pagination += `
                    <button class="${i === currentPage ? 'active' : ''}" data-page="${i}" data-action="change-page">
                        ${i}
                    </button>
                `;
            } else if (i === currentPage - 3 || i === currentPage + 3) {
                pagination += '<span>...</span>';
            }
        }
        
        // Next button
        pagination += `
            <button ${currentPage === totalPages ? 'disabled' : ''} data-page="${currentPage + 1}" data-action="change-page">
                <i class="fas fa-chevron-right"></i>
            </button>
        `;
        
        container.innerHTML = pagination;
    }
    
    // Change page
    function changePage(page) {
        const totalPages = Math.ceil(filteredBrokers.length / itemsPerPage);
        if (page < 1 || page > totalPages) return;
        
        currentPage = page;
        displayBrokers();
    }
    
    // Show error
    function showError(message) {
        const container = document.getElementById('brokersContainer');
        if (container) {
            container.innerHTML = `
                <div style="text-align: center; padding: 40px; color: #dc3545;">
                    <i class="fas fa-exclamation-triangle" style="font-size: 3rem; margin-bottom: 20px;"></i>
                    <h3>Error</h3>
                    <p>${message}</p>
                </div>
            `;
        }
    }
    
    // Make functions globally available
    window.applyFilters = applyFilters;
    window.clearFilters = clearFilters;
    window.setView = setView;
    window.addToComparison = addToComparison;
    window.removeFromComparison = removeFromComparison;
    window.openComparisonModal = openComparisonModal;
    window.closeComparison = closeComparison;
    window.exportComparison = exportComparison;
    window.changePage = changePage;
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initBrokers);
    } else {
        initBrokers();
    }
})();
