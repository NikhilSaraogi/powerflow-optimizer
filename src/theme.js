
// Theme management utility
const ThemeManager = {
  init() {
    this.setInitialTheme();
    this.attachListeners();
  },

  setInitialTheme() {
    // Check for saved theme or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      document.documentElement.classList.toggle('dark', prefersDark);
    }
    
    this.updateThemeIcon(savedTheme === 'dark' || (!savedTheme && prefersDark));
  },

  attachListeners() {
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', () => this.toggleTheme());
    }

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('theme')) {
        this.updateTheme(e.matches);
      }
    });
  },

  toggleTheme() {
    const isDark = document.documentElement.classList.toggle('dark');
    this.updateTheme(isDark);
  },

  updateTheme(isDark) {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    this.updateThemeIcon(isDark);
  },

  updateThemeIcon(isDark) {
    const moonIcon = document.querySelector('.theme-toggle svg:first-child');
    const sunIcon = document.querySelector('.theme-toggle svg:last-child');
    
    if (isDark) {
      moonIcon.classList.add('hidden');
      sunIcon.classList.remove('hidden');
    } else {
      moonIcon.classList.remove('hidden');
      sunIcon.classList.add('hidden');
    }
  }
};

// Initialize theme management when DOM is loaded
document.addEventListener('DOMContentLoaded', () => ThemeManager.init());
