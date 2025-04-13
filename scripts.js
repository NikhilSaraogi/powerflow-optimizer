
// Initialize sidebar state and handle toggle
let sidebarCollapsed = false;
const sidebar = document.getElementById('sidebar');
const mainContent = document.getElementById('main-content');
const sidebarToggle = document.getElementById('sidebar-toggle');

function toggleSidebar() {
  sidebarCollapsed = !sidebarCollapsed;
  
  if (sidebarCollapsed) {
    sidebar.classList.remove('w-64');
    sidebar.classList.add('w-16');
    mainContent.classList.remove('ml-64');
    mainContent.classList.add('ml-16');
    sidebar.classList.remove('sidebar-expanded');
    sidebar.classList.add('sidebar-collapsed');
  } else {
    sidebar.classList.remove('w-16');
    sidebar.classList.add('w-64');
    mainContent.classList.remove('ml-16');
    mainContent.classList.add('ml-64');
    sidebar.classList.add('sidebar-expanded');
    sidebar.classList.remove('sidebar-collapsed');
  }
}

sidebarToggle.addEventListener('click', toggleSidebar);

// Set default sidebar state
sidebar.classList.add('w-64', 'sidebar-expanded');
mainContent.classList.add('ml-64');

// Update current time
function updateCurrentTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit',
    second: '2-digit'
  });
  const dateString = now.toLocaleDateString('en-US', { 
    weekday: 'short', 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  });
  
  document.getElementById('current-time').innerText = `${dateString} ${timeString}`;
}

// Update time every second
updateCurrentTime();
setInterval(updateCurrentTime, 1000);

// Audio alerts configuration
let audioEnabled = true;
let currentVoice = 'male'; // Default voice
const audioAlertToggle = document.getElementById('audio-alert-toggle');
const audioAlertIcon = document.getElementById('audio-alert-icon');
const audioAlertBadge = document.getElementById('audio-alert-badge');
const notificationSound = document.getElementById('notification-sound');
const voiceMessage = document.getElementById('voice-message');
const audioNotification = document.getElementById('audio-notification');
const audioNotificationTitle = document.getElementById('audio-notification-title');
const audioNotificationMessage = document.getElementById('audio-notification-message');

// Voice selection dropdown
const voiceSelectorToggle = document.getElementById('voice-selector-toggle');
const voiceDropdown = document.getElementById('voice-dropdown');
const voiceOptions = document.querySelectorAll('.voice-option');

// Toggle audio alerts
audioAlertToggle.addEventListener('click', () => {
  audioEnabled = !audioEnabled;
  
  if (audioEnabled) {
    audioAlertIcon.classList.remove('audio-alert-icon-off');
    // Show a confirmation toast
    showToast('Audio alerts enabled', 'success');
  } else {
    audioAlertIcon.classList.add('audio-alert-icon-off');
    // Show a confirmation toast
    showToast('Audio alerts disabled', 'info');
  }
});

// Voice selection dropdown toggle
voiceSelectorToggle.addEventListener('click', () => {
  voiceDropdown.classList.toggle('active');
});

// Close dropdown when clicking outside
document.addEventListener('click', (event) => {
  if (!voiceSelectorToggle.contains(event.target) && !voiceDropdown.contains(event.target)) {
    voiceDropdown.classList.remove('active');
  }
});

// Handle voice selection
voiceOptions.forEach(option => {
  option.addEventListener('click', () => {
    const voice = option.getAttribute('data-voice');
    currentVoice = voice;
    
    // Update selected state
    voiceOptions.forEach(opt => opt.classList.remove('selected'));
    option.classList.add('selected');
    
    // Close dropdown
    voiceDropdown.classList.remove('active');
    
    // Show confirmation toast
    showToast(`${voice.charAt(0).toUpperCase() + voice.slice(1)} voice selected`, 'success');
  });
});

// Show audio notification
function showAudioNotification(title, message) {
  audioNotificationTitle.textContent = title;
  audioNotificationMessage.textContent = message;
  audioNotification.classList.add('show');
  
  // Hide notification after 5 seconds
  setTimeout(() => {
    audioNotification.classList.remove('show');
  }, 5000);
}

// Play audio alert
async function playAudioAlert(alertData) {
  if (!audioEnabled) return;
  
  // Show notification badge
  audioAlertBadge.classList.add('active');
  
  // Play notification sound
  notificationSound.play();
  
  // Show audio notification
  showAudioNotification(alertData.title, alertData.message);
  
  // Wait for notification sound to finish
  await new Promise(resolve => {
    setTimeout(resolve, 1500); // Wait for notification sound
  });
  
  // Set the appropriate voice URL based on the selected voice
  const voiceUrl = currentVoice === 'male' 
    ? `https://elevenlabs-proxy.freecodecamp.rocks/api/speech?voice=male&text=${encodeURIComponent(alertData.message)}`
    : `https://elevenlabs-proxy.freecodecamp.rocks/api/speech?voice=female&text=${encodeURIComponent(alertData.message)}`;
  
  // Play the voice message
  voiceMessage.src = voiceUrl;
  voiceMessage.play();
  
  // Remove notification badge after voice message ends
  voiceMessage.onended = () => {
    setTimeout(() => {
      audioAlertBadge.classList.remove('active');
    }, 2000);
  };
}

// Toast notification function
function showToast(message, type = 'info') {
  // Create toast element
  const toast = document.createElement('div');
  toast.className = `fixed bottom-4 right-4 p-3 rounded-md shadow-md max-w-xs z-50 animate-fade-in`;
  
  // Set background color based on type
  if (type === 'success') {
    toast.classList.add('bg-green-100', 'text-green-800', 'border-l-4', 'border-green-500');
  } else if (type === 'error') {
    toast.classList.add('bg-red-100', 'text-red-800', 'border-l-4', 'border-red-500');
  } else if (type === 'warning') {
    toast.classList.add('bg-yellow-100', 'text-yellow-800', 'border-l-4', 'border-yellow-500');
  } else {
    toast.classList.add('bg-blue-100', 'text-blue-800', 'border-l-4', 'border-blue-500');
  }
  
  // Add message
  toast.innerHTML = message;
  
  // Add to document
  document.body.appendChild(toast);
  
  // Remove after 3 seconds
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s ease-out';
    
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 300);
  }, 3000);
}

// Simulate API call for audio alerts
function fetchAlerts() {
  // Simulate API response with sample data
  return new Promise(resolve => {
    setTimeout(() => {
      const alerts = [
        {
          id: 1,
          title: "High Pressure Alert",
          message: "HP Heater 7B pressure has reached critical levels. Reduce load to prevent damage.",
          priority: "high",
          timestamp: new Date()
        },
        {
          id: 2,
          title: "Temperature Warning",
          message: "HP Heater 8A temperature gradient exceeding recommended values. Check drain flow.",
          priority: "medium",
          timestamp: new Date()
        },
        {
          id: 3,
          title: "Maintenance Recommendation",
          message: "Schedule inspection for HP Heater 7A based on operating hours threshold reached.",
          priority: "low",
          timestamp: new Date()
        }
      ];
      
      resolve(alerts);
    }, 1000);
  });
}

// Test audio alerts with simulated API data
setTimeout(async () => {
  const alerts = await fetchAlerts();
  const highPriorityAlerts = alerts.filter(alert => alert.priority === 'high');
  
  if (highPriorityAlerts.length > 0) {
    playAudioAlert(highPriorityAlerts[0]);
  }
  
  // Populate alerts container
  populateAlerts(alerts);
  
  // Populate recommendations
  populateRecommendations();
  
  // Update last updated time
  document.getElementById('alerts-time').innerText = 'Updated: ' + new Date().toLocaleTimeString();
  document.getElementById('recommendations-time').innerText = 'Updated: ' + new Date().toLocaleTimeString();
}, 2000);

// Set up periodic checks for new alerts
setInterval(async () => {
  // In a real application, this would check for new alerts from the API
  // For demo purposes, we'll randomly trigger alerts
  if (Math.random() > 0.7) { // 30% chance of a new alert
    const alerts = await fetchAlerts();
    const randomAlert = alerts[Math.floor(Math.random() * alerts.length)];
    playAudioAlert(randomAlert);
  }
}, 30000); // Check every 30 seconds

// Comment modal functionality
const commentModal = document.getElementById('comment-modal');
const closeCommentModal = document.getElementById('close-comment-modal');
const modalNotificationTitle = document.getElementById('modal-notification-title');
const modalNotificationMessage = document.getElementById('modal-notification-message');
const commentText = document.getElementById('comment-text');
const saveComment = document.getElementById('save-comment');

// Close modal when clicking X
closeCommentModal.addEventListener('click', () => {
  commentModal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (event) => {
  if (event.target === commentModal) {
    commentModal.style.display = 'none';
  }
});

// Save comment
saveComment.addEventListener('click', () => {
  const comment = commentText.value.trim();
  if (comment) {
    // In a real application, this would save the comment to the server
    commentText.value = '';
    commentModal.style.display = 'none';
    showToast('Comment saved successfully', 'success');
  } else {
    showToast('Please enter a comment', 'warning');
  }
});

// Function to show comment modal for a notification
function showCommentModal(notification) {
  modalNotificationTitle.textContent = notification.title;
  modalNotificationMessage.textContent = notification.message;
  commentText.value = '';
  commentModal.style.display = 'block';
}

// Populate alerts container
function populateAlerts(alerts) {
  const alertsContainer = document.getElementById('alerts-container');
  alertsContainer.innerHTML = '';
  
  alerts.forEach(alert => {
    const priorityClass = alert.priority === 'high' ? 'text-adani-red' :
                         alert.priority === 'medium' ? 'text-adani-yellow' : 'text-adani-green';
    
    const alertTime = alert.timestamp.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
    
    const alertElement = document.createElement('div');
    alertElement.className = 'p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors duration-150 notification-item animate-fade-in';
    alertElement.innerHTML = `
      <div class="flex justify-between items-start">
        <div class="flex-1">
          <div class="flex items-center">
            <div class="${priorityClass} font-medium">${alert.title}</div>
          </div>
          <p class="text-sm text-gray-600 mt-1">${alert.message}</p>
        </div>
        <div class="text-xs text-gray-500 whitespace-nowrap ml-2">${alertTime}</div>
      </div>
      <div class="flex justify-end mt-2">
        <button class="btn-action btn-accept mr-2">Accept</button>
        <button class="btn-action btn-reject mr-2">Reject</button>
        <button class="btn-action btn-comment">Comment</button>
      </div>
    `;
    
    // Add event listeners for buttons
    alertElement.querySelector('.btn-comment').addEventListener('click', () => {
      showCommentModal(alert);
    });
    
    alertElement.querySelector('.btn-accept').addEventListener('click', () => {
      const statusBadge = document.createElement('span');
      statusBadge.className = 'status-badge status-accepted';
      statusBadge.textContent = 'Accepted';
      alertElement.querySelector('.notification-item').appendChild(statusBadge);
      showToast('Alert accepted', 'success');
    });
    
    alertElement.querySelector('.btn-reject').addEventListener('click', () => {
      const statusBadge = document.createElement('span');
      statusBadge.className = 'status-badge status-rejected';
      statusBadge.textContent = 'Rejected';
      alertElement.querySelector('.notification-item').appendChild(statusBadge);
      showToast('Alert rejected', 'warning');
    });
    
    alertsContainer.appendChild(alertElement);
  });
}

// Populate recommendations container
function populateRecommendations() {
  const recommendationsContainer = document.getElementById('recommendations-container');
  recommendationsContainer.innerHTML = '';
  
  // Sample recommendations data
  const recommendations = [
    {
      id: 1,
      title: "Optimize HP Heater 7B Drain Flow",
      message: "Increase drain flow rate by 5% to improve heat transfer efficiency and prevent subcooling.",
      priority: "high",
      savings: "₹ 3.2L per month",
      timestamp: new Date()
    },
    {
      id: 2,
      title: "Adjust HP Heater 8A Shell Pressure",
      message: "Reduce shell pressure to 12.5 MPa to maintain optimal pressure differential across the tubes.",
      priority: "medium",
      savings: "₹ 1.8L per month",
      timestamp: new Date()
    },
    {
      id: 3,
      title: "HP Heater 7A Extraction Line Inspection",
      message: "Schedule inspection of extraction line for possible steam leakage based on temperature profile.",
      priority: "low",
      savings: "₹ 0.9L per month",
      timestamp: new Date()
    }
  ];
  
  recommendations.forEach(recommendation => {
    const priorityClass = recommendation.priority === 'high' ? 'text-adani-red' :
                       recommendation.priority === 'medium' ? 'text-adani-yellow' : 'text-adani-green';
    
    const recTime = recommendation.timestamp.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
    
    const recElement = document.createElement('div');
    recElement.className = 'p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors duration-150 animate-fade-in';
    recElement.innerHTML = `
      <div class="flex justify-between items-start">
        <div class="flex-1">
          <div class="flex items-center">
            <div class="${priorityClass} font-medium">${recommendation.title}</div>
          </div>
          <p class="text-sm text-gray-600 mt-1">${recommendation.message}</p>
          <div class="text-xs text-adani-green font-medium mt-1">Potential savings: ${recommendation.savings}</div>
        </div>
        <div class="text-xs text-gray-500 whitespace-nowrap ml-2">${recTime}</div>
      </div>
      <div class="flex justify-end mt-2">
        <button class="btn-action btn-accept mr-2">Implement</button>
        <button class="btn-action btn-comment">Comment</button>
      </div>
    `;
    
    // Add event listener for comment button
    recElement.querySelector('.btn-comment').addEventListener('click', () => {
      showCommentModal(recommendation);
    });
    
    recElement.querySelector('.btn-accept').addEventListener('click', () => {
      showToast(`Recommendation "${recommendation.title}" scheduled for implementation`, 'success');
    });
    
    recommendationsContainer.appendChild(recElement);
  });
}

// Populate top bar stats
function populateTopBarStats() {
  const topBarContainer = document.getElementById('top-bar-container');
  
  // Sample data
  const topBarItems = [
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-adani-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>`,
      name: 'Unit Load',
      value: '660',
      unit: 'MW',
      trend: 'up',
      trendValue: '2%'
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-adani-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>`,
      name: 'Main Steam Temp',
      value: '568',
      unit: '°C',
      trend: 'down',
      trendValue: '1%'
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-adani-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>`,
      name: 'Main Steam Pressure',
      value: '170',
      unit: 'bar',
      trend: 'stable',
      trendValue: '0%'
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-adani-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>`,
      name: 'HP Heater Efficiency',
      value: '92.8',
      unit: '%',
      trend: 'up',
      trendValue: '0.3%'
    }
  ];
  
  topBarContainer.innerHTML = '';
  
  topBarItems.forEach(item => {
    const trendColor = item.trend === 'up' ? 'text-adani-green' : 
                     item.trend === 'down' ? 'text-adani-red' : 'text-gray-500';
    
    const trendIcon = item.trend === 'up' ? `<svg class="w-4 h-4 ${trendColor}" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>` :
                    item.trend === 'down' ? `<svg class="w-4 h-4 ${trendColor}" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>` :
                    `<svg class="w-4 h-4 ${trendColor}" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14"></path></svg>`;
    
    const itemElement = document.createElement('div');
    itemElement.className = 'bg-white rounded-lg shadow-md p-4 border border-gray-100 hover:shadow-lg transition-all duration-300 animate-fade-in';
    itemElement.innerHTML = `
      <div class="flex items-center">
        <div class="bg-gray-100 rounded-md p-3 mr-3">
          ${item.icon}
        </div>
        <div>
          <div class="text-sm text-gray-500">${item.name}</div>
          <div class="text-xl font-bold">
            ${item.value} <span class="text-sm">${item.unit}</span>
          </div>
          <div class="flex items-center text-xs">
            ${trendIcon}
            <span class="${trendColor} ml-1">${item.trendValue}</span>
          </div>
        </div>
      </div>
    `;
    
    topBarContainer.appendChild(itemElement);
  });
}

// Populate heater cards with sample data
function populateHeaterCards() {
  const heaterCardsContainer = document.getElementById('heater-cards-container');
  
  // Sample data for heater cards
  const heaters = [
    {
      id: 'heater7a',
      name: 'HP Heater 7A',
      status: 'healthy',
      statusText: 'Operational',
      temp: 172.5,
      pressure: 14.2,
      flow: 142.6,
      efficiency: 93.2,
      indicators: [
        { name: 'TTD', value: 2.3, status: 'healthy' },
        { name: 'DCA', value: 5.1, status: 'healthy' },
        { name: 'Drain Flow', value: 14.2, status: 'healthy' }
      ]
    },
    {
      id: 'heater7b',
      name: 'HP Heater 7B',
      status: 'warning',
      statusText: 'Attention Required',
      temp: 171.2,
      pressure: 14.1,
      flow: 138.5,
      efficiency: 91.8,
      indicators: [
        { name: 'TTD', value: 2.8, status: 'warning' },
        { name: 'DCA', value: 4.9, status: 'healthy' },
        { name: 'Drain Flow', value: 13.7, status: 'warning' }
      ]
    },
    {
      id: 'heater8a',
      name: 'HP Heater 8A',
      status: 'critical',
      statusText: 'Critical',
      temp: 175.3,
      pressure: 14.7,
      flow: 124.3,
      efficiency: 88.5,
      indicators: [
        { name: 'TTD', value: 3.2, status: 'warning' },
        { name: 'DCA', value: 6.3, status: 'critical' },
        { name: 'Drain Flow', value: 12.4, status: 'critical' }
      ]
    }
  ];
  
  heaterCardsContainer.innerHTML = '';
  
  heaters.forEach(heater => {
    const statusClass = heater.status === 'healthy' ? 'status-healthy' : 
                      heater.status === 'warning' ? 'status-warning' : 'status-critical';
    
    const heaterElement = document.createElement('div');
    heaterElement.className = 'bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden animate-slide-up';
    
    // Build indicators HTML
    let indicatorsHtml = '';
    heater.indicators.forEach(indicator => {
      const indicatorStatusClass = indicator.status === 'healthy' ? 'status-healthy' : 
                                indicator.status === 'warning' ? 'status-warning' : 'status-critical';
      
      indicatorsHtml += `
        <div class="flex justify-between items-center mb-1">
          <div class="text-sm text-gray-600">${indicator.name}</div>
          <div class="text-sm font-medium ${indicatorStatusClass}">${indicator.value}</div>
        </div>
      `;
    });
    
    heaterElement.innerHTML = `
      <div class="px-4 py-3 bg-gray-50 border-b border-gray-100 flex justify-between items-center">
        <div class="font-medium">${heater.name}</div>
        <div class="text-sm ${statusClass}">${heater.statusText}</div>
      </div>
      <div class="p-4">
        <div class="grid grid-cols-2 gap-4 mb-4">
          <div>
            <div class="text-sm text-gray-500">Temperature</div>
            <div class="text-lg font-semibold">${heater.temp} °C</div>
          </div>
          <div>
            <div class="text-sm text-gray-500">Pressure</div>
            <div class="text-lg font-semibold">${heater.pressure} MPa</div>
          </div>
          <div>
            <div class="text-sm text-gray-500">Flow Rate</div>
            <div class="text-lg font-semibold">${heater.flow} kg/s</div>
          </div>
          <div>
            <div class="text-sm text-gray-500">Efficiency</div>
            <div class="text-lg font-semibold">${heater.efficiency}%</div>
          </div>
        </div>
        
        <div class="mt-4">
          <div class="text-sm font-medium mb-2">Key Indicators</div>
          ${indicatorsHtml}
        </div>
        
        <div class="mt-4 flex justify-end">
          <button class="bg-adani-blue text-white px-3 py-1 rounded text-sm hover:bg-adani-blue/60 transition-colors">View Details</button>
        </div>
      </div>
    `;
    
    heaterCardsContainer.appendChild(heaterElement);
  });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
  // Populate components with sample data
  populateTopBarStats();
  populateHeaterCards();
  
  // Add hover animations to cards and buttons
  const cards = document.querySelectorAll('.bg-white.rounded-lg');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.classList.add('transform', 'scale-[1.01]', 'transition-transform');
    });
    
    card.addEventListener('mouseleave', () => {
      card.classList.remove('transform', 'scale-[1.01]');
    });
  });
  
  // Add ripple effect to buttons
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      const x = e.clientX - e.target.offsetLeft;
      const y = e.clientY - e.target.offsetTop;
      
      const ripple = document.createElement('span');
      ripple.style.position = 'absolute';
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      ripple.style.width = '0';
      ripple.style.height = '0';
      ripple.style.background = 'rgba(255, 255, 255, 0.4)';
      ripple.style.borderRadius = '50%';
      ripple.style.transform = 'translate(-50%, -50%)';
      ripple.style.animation = 'ripple 0.6s linear';
      
      if (!button.style.position || button.style.position === 'static') {
        button.style.position = 'relative';
      }
      
      button.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
  
  // Add keyframes for ripple animation
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes ripple {
      0% {
        width: 0;
        height: 0;
        opacity: 0.5;
      }
      100% {
        width: 400px;
        height: 400px;
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
});

// Simulate real-time data updates
setInterval(() => {
  // In a real application, this would fetch updated data from the API
  // For demo purposes, we'll just update the time
  document.getElementById('recommendations-time').innerText = 'Updated: ' + new Date().toLocaleTimeString();
  document.getElementById('alerts-time').innerText = 'Updated: ' + new Date().toLocaleTimeString();
}, 60000); // Update every minute
