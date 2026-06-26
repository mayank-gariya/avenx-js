/**
 * Avenx-JS Docs Application Client-Side Controller (HTML-First)
 * Handles routing, DOM-based search, syntax highlighting, mobile drawer, and themes.
 */

(function () {
    'use strict';

    // Cache DOM Elements
    const sidebarNav = document.getElementById('sidebar-nav');
    const prevPageBtn = document.getElementById('prev-page-btn');
    const prevPageTitle = document.getElementById('prev-page-title');
    const nextPageBtn = document.getElementById('next-page-btn');
    const nextPageTitle = document.getElementById('next-page-title');
    const themeToggle = document.getElementById('theme-toggle');
    const mobileToggle = document.getElementById('mobile-toggle');
    const sidebar = document.getElementById('app-sidebar');
    const sidebarBackdrop = document.getElementById('sidebar-backdrop');
    
    const searchInput = document.getElementById('search-input');
    const clearSearchBtn = document.getElementById('clear-search');
    const searchResults = document.getElementById('search-results');
    
    const crumbSection = document.getElementById('crumb-section');
    const crumbPage = document.getElementById('crumb-page');

    // State Variables
    let currentPageId = 'intro';
    let flatPages = [];

    // Initialize Flat Pages list dynamically from the DOM (HTML-first content)
    function initFlatPages() {
        flatPages = [];
        const pageElements = document.querySelectorAll('.doc-page');
        
        pageElements.forEach(el => {
            const id = el.id.replace(/^page-/, '');
            const h1El = el.querySelector('h1');
            const pageTitle = h1El ? h1El.textContent.trim() : 'Untitled Page';
            
            // Derive section title from the sidebar link relationship
            const sidebarLink = document.querySelector(`.nav-page-link[data-page-id="${id}"]`);
            let sectionTitle = 'Getting Started';
            let sectionId = 'getting-started';
            
            if (sidebarLink) {
                const sectionContainer = sidebarLink.closest('.sidebar-section');
                if (sectionContainer) {
                    const sectionTitleEl = sectionContainer.querySelector('.nav-section-title');
                    if (sectionTitleEl) {
                        sectionTitle = sectionTitleEl.textContent.trim();
                        sectionId = sectionTitleEl.getAttribute('data-section') || 'getting-started';
                    }
                }
            }

            const keywordsAttr = el.getAttribute('data-keywords') || '';
            const keywords = keywordsAttr.split(/\s+/).filter(kw => kw.trim().length > 0);

            flatPages.push({
                element: el,
                id: id,
                pageTitle: pageTitle,
                sectionTitle: sectionTitle,
                sectionId: sectionId,
                keywords: keywords,
                highlighted: false
            });
        });
    }

    // Highlighting engine
    function highlightJS(code) {
        return code.replace(
            /(\/\/[^\n]*|\/\*[\s\S]*?\*\/)|("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`[\s\S]*?`)|(\b(const|let|var|function|return|class|extends|import|export|default|new|typeof|super|this|state|props|args|event|onMount|onUpdate|onUnmount)\b)|(\b(AvenxApp|AvenxComponent|AvenxPage|AvenxRouter|AvenxGuard|AvenxBridge|HtmlEscaper|SafeHtml|Sanitizer|DynamicEvaluator|LifecycleManager)\b)|(\b\d+\b)/g,
            (match, comment, string, keyword, keywordWord, className, classWord, number) => {
                if (comment) return `<span class="token-comment">${comment}</span>`;
                if (string) return `<span class="token-string">${string}</span>`;
                if (keyword) return `<span class="token-keyword">${keyword}</span>`;
                if (className) return `<span class="token-class">${className}</span>`;
                if (number) return `<span class="token-number">${number}</span>`;
                return match;
            }
        );
    }

    function highlightCSS(code) {
        return code.replace(
            /(\/\*[\s\S]*?\*\/)|(@def|@css|@global|@media|@supports|@keyframes)|(:\s*[^;}]+)|(\b(color|background-color|background|border-radius|border|padding|margin|font-family|font-size|box-shadow|text-align|max-width|opacity|cursor|font-weight|transition|display|flex-direction|flex|justify-content|align-items|position|top|left|right|bottom|z-index|height|width|gap|min-height|overflow-y|transform|box-sizing|line-height|letter-spacing|scroll-behavior|list-style)\b)/g,
            (match, comment, keyword, valBlock, prop) => {
                if (comment) return `<span class="token-comment">${comment}</span>`;
                if (keyword) return `<span class="token-keyword">${keyword}</span>`;
                if (prop) return `<span class="token-attribute">${prop}</span>`;
                if (valBlock) {
                    const val = valBlock.replace(/(\b(none|white|transparent|center|fixed|hidden|absolute|relative|block|flex|column|sans-serif|monospace|bold|pointer)\b|\d+px|\d+rem|\d+em|\d+s|\d+ms|#[a-fA-F0-9]{3,8})/g, '<span class="token-value">$1</span>');
                    return val;
                }
                return match;
            }
        );
    }

    function highlightHTML(code) {
        let escaped = code
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
            
        escaped = escaped.replace(/(&lt;!--[\s\S]*?--&gt;)/g, '<span class="token-comment">$1</span>');
        escaped = escaped.replace(/(\{\{\{[\s\S]*?\}\}\}|\{\{[\s\S]*?\}\})/g, '<span class="token-keyword">$1</span>');

        escaped = escaped.replace(/(&lt;\/?)([A-Za-z0-9@_$-]+)([\s\S]*?)(\/?&gt;)/g, (match, openTag, tagName, attrs, closeTag) => {
            let parsedAttrs = attrs;
            parsedAttrs = parsedAttrs.replace(/(\b[\w:-]+|@[\w-]+)(?=\s*=)/g, '<span class="token-attribute">$1</span>');
            parsedAttrs = parsedAttrs.replace(/("[^"]*"|'[^']*')/g, '<span class="token-value">$1</span>');
            return `${openTag}<span class="token-tag">${tagName}</span>${parsedAttrs}${closeTag}`;
        });

        return escaped;
    }

    function highlightPageCode(page) {
        if (page.highlighted) return;
        
        const codeBlocks = page.element.querySelectorAll('pre code');
        codeBlocks.forEach(block => {
            const codeClass = block.className || '';
            const codeText = block.textContent;
            
            if (codeClass.includes('language-javascript') || codeClass.includes('language-js')) {
                block.innerHTML = highlightJS(codeText);
            } else if (codeClass.includes('language-css')) {
                block.innerHTML = highlightCSS(codeText);
            } else if (codeClass.includes('language-html') || codeClass.includes('language-xml')) {
                block.innerHTML = highlightHTML(codeText);
            }
        });
        
        page.highlighted = true;
    }

    // Render page layout based on active ID
    function loadRoute() {
        let hash = window.location.hash || '#/intro';
        let routeId = hash.replace(/^#\//, '');
        
        let page = flatPages.find(p => p.id === routeId);
        if (!page) {
            page = flatPages[0];
            routeId = page.id;
        }

        currentPageId = routeId;

        // Toggle visibility of DOM pages
        flatPages.forEach(p => {
            if (p.id === routeId) {
                p.element.classList.add('active');
                highlightPageCode(p); // Lazy highlight active page
            } else {
                p.element.classList.remove('active');
            }
        });

        // Update Breadcrumbs
        crumbSection.textContent = page.sectionTitle;
        crumbPage.textContent = page.pageTitle;
        document.title = `Avenx-JS | ${page.pageTitle}`;

        // Update Sidebar Active Links
        document.querySelectorAll('.nav-page-link').forEach(link => {
            if (link.getAttribute('data-page-id') === routeId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        // Navigation Footer controls
        const currentIndex = flatPages.findIndex(p => p.id === routeId);
        
        // Previous page
        if (currentIndex > 0) {
            const prev = flatPages[currentIndex - 1];
            prevPageBtn.style.visibility = 'visible';
            prevPageBtn.href = `#/${prev.id}`;
            prevPageTitle.textContent = prev.pageTitle;
        } else {
            prevPageBtn.style.visibility = 'hidden';
        }

        // Next page
        if (currentIndex < flatPages.length - 1) {
            const next = flatPages[currentIndex + 1];
            nextPageBtn.style.visibility = 'visible';
            nextPageBtn.href = `#/${next.id}`;
            nextPageTitle.textContent = next.pageTitle;
        } else {
            nextPageBtn.style.visibility = 'hidden';
        }

        // Close sidebar drawer on mobile after navigation
        closeSidebar();
        
        // Scroll content back to top
        window.scrollTo(0, 0);
    }

    // Toggle navigation drawer on mobile
    function openSidebar() {
        sidebar.classList.add('open');
        sidebarBackdrop.classList.add('show');
        document.body.style.overflow = 'hidden'; // Lock scrolling
    }

    function closeSidebar() {
        sidebar.classList.remove('open');
        sidebarBackdrop.classList.remove('show');
        document.body.style.overflow = ''; // Unlock scrolling
    }

    // Theme Management
    function initTheme() {
        const storedTheme = localStorage.getItem('theme') || 'dark';
        document.documentElement.setAttribute('data-theme', storedTheme);
    }

    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    }

    // Search functionality (DOM based)
    function handleSearch(query) {
        const cleanQuery = query.toLowerCase().trim();
        
        if (!cleanQuery) {
            searchResults.style.display = 'none';
            clearSearchBtn.style.display = 'none';
            return;
        }

        clearSearchBtn.style.display = 'block';

        // Filter flatPages
        const matches = flatPages.filter(page => {
            const textContent = page.element.textContent.toLowerCase();
            return (
                page.pageTitle.toLowerCase().includes(cleanQuery) ||
                page.sectionTitle.toLowerCase().includes(cleanQuery) ||
                page.keywords.some(kw => kw.toLowerCase().includes(cleanQuery)) ||
                textContent.includes(cleanQuery)
            );
        });

        if (matches.length === 0) {
            searchResults.innerHTML = '<div class="no-results-msg">No documentation matches found</div>';
        } else {
            let dropdownHtml = '';
            matches.slice(0, 5).forEach(match => {
                const textContent = match.element.textContent.replace(/\s+/g, ' ');
                const queryIndex = textContent.toLowerCase().indexOf(cleanQuery);
                let snippet = '';
                
                if (queryIndex !== -1) {
                    const start = Math.max(0, queryIndex - 40);
                    const end = Math.min(textContent.length, queryIndex + 80);
                    snippet = '...' + textContent.substring(start, end).trim() + '...';
                } else {
                    snippet = textContent.substring(0, 100).trim() + '...';
                }

                dropdownHtml += `<a href="#/${match.id}" class="search-result-item">
                    <div class="result-title">${match.pageTitle}</div>
                    <div class="result-snippet">${snippet}</div>
                </a>`;
            });
            searchResults.innerHTML = dropdownHtml;
        }

        searchResults.style.display = 'block';
    }

    // Event Listeners Configuration
    function setupEvents() {
        // Hash routing
        window.addEventListener('hashchange', loadRoute);

        // Mobile sidebar navigation toggling
        mobileToggle.addEventListener('click', () => {
            if (sidebar.classList.contains('open')) {
                closeSidebar();
            } else {
                openSidebar();
            }
        });

        sidebarBackdrop.addEventListener('click', closeSidebar);

        // Theme switching
        themeToggle.addEventListener('click', toggleTheme);

        // Search inputs
        searchInput.addEventListener('input', (e) => handleSearch(e.target.value));
        
        clearSearchBtn.addEventListener('click', () => {
            searchInput.value = '';
            handleSearch('');
        });

        // Hide search results dropdown on click outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.search-container')) {
                searchResults.style.display = 'none';
            }
        });

        // Focus search container using '/' shortcut key
        document.addEventListener('keydown', (e) => {
            if (e.key === '/' && document.activeElement !== searchInput) {
                e.preventDefault();
                searchInput.focus();
                searchInput.select();
            }
        });

        // Navigate search results using Enter or click
        searchResults.addEventListener('click', () => {
            searchResults.style.display = 'none';
            searchInput.value = '';
            clearSearchBtn.style.display = 'none';
        });
    }

    // Application Bootstrap
    function bootstrap() {
        initTheme();
        initFlatPages();
        loadRoute();
        setupEvents();
    }

    // Run app once DOM load complete
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', bootstrap);
    } else {
        bootstrap();
    }

})();
