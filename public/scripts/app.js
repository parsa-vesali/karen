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

// Toggle theme between light and dark modes
const toggleTheme = () => {
    const isDarkMode = localStorage.getItem('theme') === 'dark';
    document.documentElement.classList.toggle('dark', !isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'light' : 'dark');
};

// Attach event listeners to theme toggle buttons
themeToggleButtons.forEach(button => {
    button.addEventListener('click', toggleTheme);
});

// Open search modal and activate overlay
searchButton.addEventListener('click', () => {
    searchModal.classList.add('active');
    overlay.classList.add('active');
});

// Close search modal
closeSearchModalButton.addEventListener('click', () => {
    searchModal.classList.remove('active');
});

// Close active elements when overlay is clicked
overlay.addEventListener('click', () => {
    mobileCart.classList.remove('active');
    overlay.classList.remove('active');
    mobileMenu.classList.remove('active');
    searchModal.classList.remove('active');
});

// Open mobile cart and activate overlay
openCartButton.addEventListener('click', () => {
    mobileCart.classList.add('active');
    overlay.classList.add('active');
});

// Close mobile cart
closeCartButton.addEventListener('click', () => {
    mobileCart.classList.remove('active');
    overlay.classList.remove('active');
});

// Open mobile menu and activate overlay
openMenuButton.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    overlay.classList.add('active');
});

// Close mobile menu
closeMenuButton.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    overlay.classList.remove('active');
});

// Close search modal if clicked outside its area
document.addEventListener('click', (event) => {
    const isClickOutsideSearch = !searchModal.contains(event.target) && !searchButton.contains(event.target);
    if (searchModal.classList.contains('active') && isClickOutsideSearch) {
        searchModal.classList.remove('active');
        overlay.classList.remove('active');
    }
});
