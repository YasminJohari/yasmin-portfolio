// Theme Toggle Handler
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// Load saved theme or system preference
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    document.documentElement.setAttribute('data-theme', 'dark');
    if (themeIcon) themeIcon.textContent = '☀️';
} else {
    document.documentElement.setAttribute('data-theme', 'light');
    if (themeIcon) themeIcon.textContent = '🌙';
}

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        let newTheme = 'light';
        
        if (currentTheme === 'light') {
            newTheme = 'dark';
            themeIcon.textContent = '☀️';
        } else {
            themeIcon.textContent = '🌙';
        }
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}