
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Check if the user has a saved theme preference
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
    if (savedTheme === 'dark') {
        htmlElement.classList.add('dark');
    } else {
        htmlElement.classList.remove('dark');
    }
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // Respect system preference for dark mode
    htmlElement.classList.add('dark');
} else {
    // Default to dark mode if no preference
    htmlElement.classList.add('dark');
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        if (htmlElement.classList.contains('dark')) {
            htmlElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            htmlElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    });
} else {
    console.warn('Theme toggle button not found.');
}