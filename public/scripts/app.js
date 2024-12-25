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
    overlay.classList.remove('active');
});

// Close active elements when overlay is clicked
overlay.addEventListener('click', () => {
    mobileCart.classList.remove('active');
    overlay.classList.remove('active');
    mobileMenu.classList.remove('active');
    searchModal.classList.remove('active');
    categorySlide.classList.remove('active')
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
    categorySlide.classList.remove('active')

});

openCategory.addEventListener('click', () => {
    categorySlide.classList.add('active')
})

closeCategorySlide.addEventListener('click', () => {
    categorySlide.classList.remove('active')
})


document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.open-detail-category').forEach(item => {
        item.addEventListener('click', () => {
            const detailCategory = item.nextElementSibling;
            if (detailCategory) {
                detailCategory.classList.add('active');
            }
        });
    });

    document.querySelectorAll('.close-detail-category').forEach(closeButton => {
        closeButton.addEventListener('click', () => {
            const detailCategory = closeButton.closest('.detail-category');
            if (detailCategory) {
                detailCategory.classList.remove('active');
            }
        });
    });
});

document.querySelectorAll('.open-submenu').forEach(item => {
    item.addEventListener('click', function () {
        const submenu = this.nextElementSibling;
        const svg = this.querySelector('svg'); // انتخاب SVG داخل آیتم کلیک شده

        // بررسی اگر فعال است، آن را غیرفعال کن و کلاس rotate-90 را حذف کن
        if (submenu.classList.contains('active')) {
            submenu.classList.remove('active');
            svg.classList.remove('rotate-90');
        } else {
            // غیر فعال کردن سایر منوها و حذف کلاس rotate-90 از تمام SVG‌ها
            document.querySelectorAll('.menu-category-submenu').forEach(sub => {
                sub.classList.remove('active');
            });
            document.querySelectorAll('.open-submenu svg').forEach(svgItem => {
                svgItem.classList.remove('rotate-90');
            });

            // فعال کردن منوی مرتبط و اضافه کردن کلاس rotate-90 به SVG مرتبط
            submenu.classList.add('active');
            svg.classList.add('rotate-90');
        }
    });
});
;

