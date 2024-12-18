const toggleThemeBtns = document.querySelectorAll('.toggle-theme');


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