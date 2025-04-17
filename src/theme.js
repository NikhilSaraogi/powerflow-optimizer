
// Theme management utility
const ThemeManager = {
  init() {
    this.setInitialTheme();
    this.attachListeners();
    this.initAIEnhancements();
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
  },

  // New AI enhancement features
  initAIEnhancements() {
    // Add pulsing effects to critical data points
    this.initPulsingEffects();
    
    // Add AI data scan visual effects
    this.initDataScanEffects();
    
    // Initialize intelligent notifications
    this.initIntelligentNotifications();
  },
  
  initPulsingEffects() {
    // Find elements with critical status and add pulsing effect
    document.querySelectorAll('.status-critical').forEach(element => {
      const parent = element.closest('.parameter-card');
      if (parent) {
        parent.classList.add('ai-pulse-attention');
      }
    });
  },
  
  initDataScanEffects() {
    // Add data scanning effects to charts and data displays
    document.querySelectorAll('.chart-container').forEach((chart, index) => {
      // Create scan line overlay
      const scanOverlay = document.createElement('div');
      scanOverlay.className = 'ai-scan-overlay';
      chart.style.position = 'relative';
      chart.appendChild(scanOverlay);
      
      // Stagger animation start for visual interest
      setTimeout(() => {
        scanOverlay.classList.add('scanning');
      }, index * 750);
    });
  },
  
  initIntelligentNotifications() {
    // Find recommendation and alert containers
    const recommendationsContainer = document.getElementById('recommendations-container');
    const alertsContainer = document.getElementById('alerts-container');
    
    if (recommendationsContainer && recommendationsContainer.children.length > 0) {
      // Add AI processing indicators to recommendations
      Array.from(recommendationsContainer.children).forEach((item, index) => {
        const aiIndicator = document.createElement('div');
        aiIndicator.className = 'ai-processing-indicator';
        aiIndicator.innerHTML = `
          <div class="ai-confidence">
            <span class="ai-confidence-label">AI Confidence:</span>
            <div class="ai-confidence-bar">
              <div class="ai-confidence-fill" style="width: ${85 + Math.floor(Math.random() * 15)}%"></div>
            </div>
          </div>
        `;
        
        // Insert after the first child (usually the title) to maintain visual hierarchy
        if (item.childNodes.length > 0) {
          item.insertBefore(aiIndicator, item.childNodes[1]);
        } else {
          item.appendChild(aiIndicator);
        }
      });
    }
    
    if (alertsContainer && alertsContainer.children.length > 0) {
      // Add predictive indicators to alerts
      Array.from(alertsContainer.children).forEach(item => {
        const titleEl = item.querySelector('h4');
        if (titleEl) {
          const predictionTime = Math.floor(Math.random() * 10) + 2;
          const predictionTag = document.createElement('span');
          predictionTag.className = 'ai-prediction-tag';
          predictionTag.textContent = `Detected ${predictionTime}m before alarm`;
          titleEl.appendChild(predictionTag);
        }
      });
    }
  }
};

// Initialize theme management when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  ThemeManager.init();
  
  // Add AI data analysis simulation
  simulateAIAnalysis();
});

// Simulate AI analysis behaviors
function simulateAIAnalysis() {
  // Add typing animation to recommendation messages to simulate AI thinking
  document.querySelectorAll('#recommendations-container li p').forEach((element, index) => {
    const originalText = element.textContent || '';
    element.innerHTML = '';
    element.classList.add('ai-typewriter');
    
    // Stagger the typing animation
    setTimeout(() => {
      let i = 0;
      const typeInterval = setInterval(() => {
        if (i < originalText.length) {
          element.textContent += originalText.charAt(i);
          i++;
        } else {
          clearInterval(typeInterval);
          // Highlight key values after typing is complete
          setTimeout(() => {
            const highlightedText = element.textContent.replace(/(\d+\.?\d*)(°C|%|MW|t\/h)/g, 
              '<span class="ai-highlighted-value">$1$2</span>');
            element.innerHTML = highlightedText;
          }, 200);
        }
      }, 15);
    }, index * 1200);
  });
  
  // Add dynamic analysis indicators
  const analysisPoints = [
    'Optimizing heat transfer rates...',
    'Analyzing efficiency trends...',
    'Calculating optimal parameters...',
    'Predicting maintenance needs...'
  ];
  
  // Create AI analysis indicator
  const aiAnalysisIndicator = document.createElement('div');
  aiAnalysisIndicator.className = 'ai-analysis-indicator';
  aiAnalysisIndicator.innerHTML = `
    <div class="ai-analysis-content">
      <div class="ai-analysis-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12" y2="16"></line>
        </svg>
      </div>
      <div class="ai-analysis-text">Initializing analysis...</div>
    </div>
  `;
  
  // Add to document
  document.body.appendChild(aiAnalysisIndicator);
  
  // Show dynamic analysis messages
  let analysisIndex = 0;
  setTimeout(() => {
    const analysisInterval = setInterval(() => {
      const aiAnalysisText = document.querySelector('.ai-analysis-text');
      if (aiAnalysisText) {
        aiAnalysisText.textContent = analysisPoints[analysisIndex];
        analysisIndex = (analysisIndex + 1) % analysisPoints.length;
      }
    }, 3000);
    
    // Remove analysis indicator after some time
    setTimeout(() => {
      clearInterval(analysisInterval);
      aiAnalysisIndicator.classList.add('ai-analysis-complete');
      setTimeout(() => {
        aiAnalysisIndicator.remove();
      }, 1000);
    }, 15000);
  }, 2000);
}
