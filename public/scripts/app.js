// Constants for class names
const ACTIVE_CLASS = 'active';
const ROTATE_CLASS = 'rotate-90';
const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';

// Selectors
const themeToggleButtons = document.querySelectorAll('.toggle-theme');
const searchButton = document.querySelector('.search-btn-open');
const searchModal = document.querySelector('.search-modal');
const closeSearchModalButton = document.querySelector('.search-modal-close');
const openCartButton = document.querySelector('.open-mobile-cart');
const mobileCart = document.querySelector('.mobile-cart');
const overlay = document.querySelector('.overlay');
const closeCartButton = document.querySelector('.close-mobile-cart');
const mobileMenu = document.querySelector('.menu-mobile');
const openMenuButton = document.querySelector('.open-menu-mobile');
const closeMenuButton = document.querySelector('.close-menu-mobile');
const openCategory = document.querySelector('.open-category');
const categorySlide = document.querySelector('.category-slide');
const closeCategorySlide = document.querySelector('.close-category-slide');

// Utility Functions
const toggleClass = (element, className, condition) => {
    if (condition) {
        element.classList.add(className);
    } else {
        element.classList.remove(className);
    }
};

const closeAllActiveElements = () => {
    [mobileCart, overlay, mobileMenu, searchModal, categorySlide].forEach(element => {
        element.classList.remove(ACTIVE_CLASS);
    });
};

// Theme Toggle Function
const toggleTheme = () => {
    const isDarkMode = localStorage.getItem('theme') === DARK_THEME;
    document.documentElement.classList.toggle(DARK_THEME, !isDarkMode);
    localStorage.setItem('theme', isDarkMode ? LIGHT_THEME : DARK_THEME);
};

// Event Listeners
// Attach event listeners to theme toggle buttons
themeToggleButtons.forEach(button => {
    button.addEventListener('click', toggleTheme);
});

// Open search modal
searchButton?.addEventListener('click', () => {
    toggleClass(searchModal, ACTIVE_CLASS, true);
    toggleClass(overlay, ACTIVE_CLASS, true);
});

// Close search modal
closeSearchModalButton?.addEventListener('click', closeAllActiveElements);

// Close elements on overlay click
overlay?.addEventListener('click', closeAllActiveElements);

// Open and close mobile cart
openCartButton?.addEventListener('click', () => {
    toggleClass(mobileCart, ACTIVE_CLASS, true);
    toggleClass(overlay, ACTIVE_CLASS, true);
});

closeCartButton?.addEventListener('click', closeAllActiveElements);

// Open and close mobile menu
openMenuButton?.addEventListener('click', () => {
    toggleClass(mobileMenu, ACTIVE_CLASS, true);
    toggleClass(overlay, ACTIVE_CLASS, true);
});

closeMenuButton?.addEventListener('click', closeAllActiveElements);

// Open and close category slide
openCategory?.addEventListener('click', () => {
    toggleClass(categorySlide, ACTIVE_CLASS, true);
});

closeCategorySlide?.addEventListener('click', () => {
    toggleClass(categorySlide, ACTIVE_CLASS, false);
});

// Category Details
const initializeCategoryDetails = () => {
    document.querySelectorAll('.open-detail-category').forEach(item => {
        item.addEventListener('click', () => {
            const detailCategory = item.nextElementSibling;
            if (detailCategory) {
                toggleClass(detailCategory, ACTIVE_CLASS, true);
            }
        });
    });

    document.querySelectorAll('.close-detail-category').forEach(closeButton => {
        closeButton.addEventListener('click', () => {
            const detailCategory = closeButton.closest('.detail-category');
            if (detailCategory) {
                toggleClass(detailCategory, ACTIVE_CLASS, false);
            }
        });
    });
};

// Submenu Toggle
const initializeSubmenuToggle = () => {
    document.querySelectorAll('.open-submenu').forEach(item => {
        item.addEventListener('click', function () {
            const submenu = this.nextElementSibling;
            const svg = this.querySelector('svg');
            const isActive = submenu.classList.contains(ACTIVE_CLASS);

            document.querySelectorAll('.menu-category-submenu').forEach(sub => {
                sub.classList.remove(ACTIVE_CLASS);
            });
            document.querySelectorAll('.open-submenu svg').forEach(svgItem => {
                svgItem.classList.add(ROTATE_CLASS);
            });

            if (!isActive) {
                toggleClass(submenu, ACTIVE_CLASS, true);
                toggleClass(svg, ROTATE_CLASS, false);
            }
        });
    });
};

// Initialize Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    initializeCategoryDetails();
    initializeSubmenuToggle();
});
