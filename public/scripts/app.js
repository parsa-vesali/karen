const toggleThemeBtns = document.querySelectorAll('.toggle-theme');
const searchBtnOpen = document.querySelector('.search-btn-open')
const searchModal = document.querySelector('.search-modal')
const searchModalClose = document.querySelector('.search-modal-close')

// Function to toggle theme
const toggleTheme = () => {
    if (localStorage.theme === 'dark') {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
    } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }
};

toggleThemeBtns.forEach(btn => {
    btn.addEventListener('click', toggleTheme);
});

searchBtnOpen.addEventListener('click', () => {
    searchModal.classList.add('active')
})
searchModalClose.addEventListener('click', () => {
    searchModal.classList.remove('active')
})

document.addEventListener('click', (event) => {
    if (searchModal.classList.contains('active') && !searchModal.contains(event.target) && !searchBtnOpen.contains(event.target)) {
        searchModal.classList.remove('active');
    }
});