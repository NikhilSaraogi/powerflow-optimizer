// DOM Elements
const sidebarToggle = document.getElementById('sidebar-toggle');
const sidebar = document.getElementById('sidebar');
const mainContent = document.getElementById('main-content');
const currentTimeElement = document.getElementById('current-time');
const recommendationsTimeElement = document.getElementById('recommendations-time');
const alertsTimeElement = document.getElementById('alerts-time');
const topBarContainer = document.getElementById('top-bar-container');
const heaterCardsContainer = document.getElementById('heater-cards-container');
const recommendationsContainer = document.getElementById('recommendations-container');
const alertsContainer = document.getElementById('alerts-container');
const commentModal = document.getElementById('comment-modal');
const closeCommentModal = document.getElementById('close-comment-modal');
const modalNotificationTitle = document.getElementById('modal-notification-title');
const modalNotificationMessage = document.getElementById('modal-notification-message');
const commentText = document.getElementById('comment-text');
const saveCommentButton = document.getElementById('save-comment');
const audioNotification = document.getElementById('audio-notification');
const audioNotificationTitle = document.getElementById('audio-notification-title');
const audioNotificationMessage = document.getElementById('audio-notification-message');

// State
let sidebarExpanded = true;
let currentNotificationId = null;
let notificationsData = [];
let alertsData = [];
let audioAlertsEnabled = true;

// Voice and Audio Configuration
const VOICES = {
  female: {
    id: 'female_voice_1', // Example voice ID
    audioSrc: 'https://example.com/female_notification.mp3'
  }
};

let currentVoice = VOICES.female;

// Update audio source for notifications
function setVoiceMessage(message) {
  const voiceMessageElement = document.getElementById('voice-message');
  voiceMessageElement.src = `https://api.elevenlabs.io/v1/text-to-speech/${currentVoice.id}/stream`;
  
  // Simulated API call to get voice message
  fetch('https://api.example.com/notifications/voice', {
    method: 'POST',
    body: JSON.stringify({ 
      text: message, 
      voice: currentVoice.id 
    })
  })
  .then(response => response.blob())
  .then(blob => {
    voiceMessageElement.src = URL.createObjectURL(blob);
    voiceMessageElement.play();
  })
  .catch(error => {
    console.error('Voice message error:', error);
  });
}

// Existing audio alert toggle logic
document.getElementById('audio-alert-toggle').addEventListener('click', function() {
  const audioIcon = document.getElementById('audio-alert-icon');
  const audioBadge = document.getElementById('audio-alert-badge');
  
  audioIcon.classList.toggle('audio-alert-icon-off');
  audioBadge.classList.toggle('active');
  
  // Simulate a notification
  const notificationSound = document.getElementById('notification-sound');
  notificationSound.play();
  
  // Play voice message
  setVoiceMessage('Warning: High temperature detected in Heater 3');
});

// Initialize
document.addEventListener('DOMContentLoaded', function() {
  initializeSidebar();
  updateCurrentTime();
  loadDashboardData();
  
  // Set up event listeners
  setupEventListeners();
  
  // Update time every minute
  setInterval(updateCurrentTime, 60000);
  
  // Simulate real-time data updates
  setInterval(loadDashboardData, 300000); // Every 5 minutes
});

// Event Listeners
function setupEventListeners() {
  // Sidebar toggle
  sidebarToggle.addEventListener('click', toggleSidebar);
  
  // Comment modal
  closeCommentModal.addEventListener('click', closeModal);
  saveCommentButton.addEventListener('click', saveComment);
  
  // Close modal when clicking outside
  window.addEventListener('click', function(event) {
    if (event.target === commentModal) {
      closeModal();
    }
  });
}

// Sidebar Functions
function initializeSidebar() {
  if (window.innerWidth < 768) {
    collapseSidebar();
  }
}

function toggleSidebar() {
  if (sidebarExpanded) {
    collapseSidebar();
  } else {
    expandSidebar();
  }
}

function collapseSidebar() {
  sidebar.style.width = '4rem';
  mainContent.style.marginLeft = '4rem';
  
  const sidebarTexts = document.querySelectorAll('.sidebar-text');
  sidebarTexts.forEach(text => {
    text.style.display = 'none';
  });
  
  sidebarExpanded = false;
}

function expandSidebar() {
  sidebar.style.width = '16rem';
  mainContent.style.marginLeft = '16rem';
  
  const sidebarTexts = document.querySelectorAll('.sidebar-text');
  sidebarTexts.forEach(text => {
    text.style.display = 'inline';
  });
  
  sidebarExpanded = true;
}

// Time Functions
function updateCurrentTime() {
  const now = new Date();
  const formattedTime = formatDateTime(now);
  
  currentTimeElement.textContent = formattedTime;
  recommendationsTimeElement.textContent = `Updated: ${formattedTime}`;
  alertsTimeElement.textContent = `Updated: ${formattedTime}`;
}

function formatDateTime(date) {
  const options = { 
    weekday: 'short', 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  };
  return date.toLocaleDateString('en-US', options);
}

// Data Loading Functions
function loadDashboardData() {
  // In a real application, this would be an API call
  // For demo purposes, we'll use mock data
  
  // Load top bar stats
  loadTopBarStats();
  
  // Load heater cards
  loadHeaterCards();
  
  // Load notifications
  loadNotifications();
  
  // Load alerts
  loadAlerts();
  
  // Simulate a new notification after 10 seconds
  setTimeout(simulateNewNotification, 10000);
}

function loadTopBarStats() {
  const topBarStats = [
    {
      title: "ECO Inlet Temperature",
      value: "285.6°C",
      change: "+1.2°C",
      trend: "up",
      status: "normal"
    },
    {
      title: "Load",
      value: "660 MW",
      change: "-5 MW",
      trend: "down",
      status: "normal"
    },
    {
      title: "HDR Pressure",
      value: "167.2 kg/cm²",
      change: "+0.3 kg/cm²",
      trend: "up",
      status: "warning"
    },
    {
      title: "Feed Water Flow",
      value: "1980 t/h",
      change: "-15 t/h",
      trend: "down",
      status: "normal"
    }
  ];
  
  topBarContainer.innerHTML = '';
  
  topBarStats.forEach(stat => {
    const trendIcon = stat.trend === 'up' 
      ? '<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" /></svg>'
      : '<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>';
    
    const statusClass = stat.status === 'warning' ? 'text-adani-yellow' : 'text-adani-green';
    
    const statCard = document.createElement('div');
    statCard.className = 'bg-white rounded-lg shadow-md p-4 border border-gray-100';
    statCard.innerHTML = `
      <div class="flex justify-between items-start">
        <h3 class="text-gray-500 text-sm font-medium">${stat.title}</h3>
        <span class="${statusClass} text-xs font-medium px-2 py-1 rounded-full bg-opacity-10 ${stat.status === 'warning' ? 'bg-adani-yellow' : 'bg-adani-green'}">
          ${stat.status.toUpperCase()}
        </span>
      </div>
      <div class="mt-2">
        <span class="text-2xl font-bold text-adani-navy">${stat.value}</span>
        <span class="ml-2 ${stat.trend === 'up' ? 'text-adani-red' : 'text-adani-green'} text-sm font-medium flex items-center">
          ${trendIcon}
          ${stat.change}
        </span>
      </div>
    `;
    
    topBarContainer.appendChild(statCard);
  });
}

function loadHeaterCards() {
  const heaterData = [
    {
      id: 1,
      name: "HP Heater 7",
      status: "healthy",
      efficiency: 92.5,
      ttd: -1.2,
      dca: 4.5,
      shellPressure: 42.3,
      drainLevel: 68,
      shellTemp: 256.7,
      drainTemp: 252.2,
      drainFlow: 98.5
    },
    {
      id: 2,
      name: "HP Heater 6",
      status: "warning",
      efficiency: 87.3,
      ttd: 2.1,
      dca: 5.8,
      shellPressure: 28.6,
      drainLevel: 72,
      shellTemp: 228.4,
      drainTemp: 226.3,
      drainFlow: 85.2
    },
    {
      id: 3,
      name: "HP Heater 5",
      status: "critical",
      efficiency: 78.9,
      ttd: 3.8,
      dca: 7.2,
      shellPressure: 18.4,
      drainLevel: 85,
      shellTemp: 205.6,
      drainTemp: 201.8,
      drainFlow: 76.4
    }
  ];
  
  heaterCardsContainer.innerHTML = '';
  
  heaterData.forEach(heater => {
    const statusClass = heater.status === 'healthy' ? 'status-healthy' : heater.status === 'warning' ? 'status-warning' : 'status-critical';
    const statusIcon = heater.status === 'healthy' 
      ? '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>'
      : heater.status === 'warning'
        ? '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>'
        : '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>';
    
    const heaterCard = document.createElement('div');
    heaterCard.className = 'bg-white rounded-lg shadow-md overflow-hidden border border-gray-100';
    heaterCard.innerHTML = `
      <div class="px-4 py-3 bg-adani-navy text-white font-medium flex items-center justify-between">
        <span>${heater.name}</span>
        <div class="flex items-center">
          <span class="${statusClass} flex items-center">
            ${statusIcon}
            <span class="ml-1 text-sm">${heater.status.charAt(0).toUpperCase() + heater.status.slice(1)}</span>
          </span>
        </div>
      </div>
      <div class="p-4">
        <div class="flex items-center justify-between mb-4">
          <div class="text-center flex-1">
            <div class="text-sm text-gray-500 mb-1">Efficiency</div>
            <div class="text-xl font-bold ${heater.efficiency > 90 ? 'text-adani-green' : heater.efficiency > 85 ? 'text-adani-yellow' : 'text-adani-red'}">
              ${heater.efficiency}%
            </div>
          </div>
          <div class="text-center flex-1">
            <div class="text-sm text-gray-500 mb-1">TTD</div>
            <div class="text-xl font-bold ${heater.ttd < 0 ? 'text-adani-green' : heater.ttd < 2 ? 'text-adani-yellow' : 'text-adani-red'}">
              ${heater.ttd}°C
            </div>
          </div>
          <div class="text-center flex-1">
            <div class="text-sm text-gray-500 mb-1">DCA</div>
            <div class="text-xl font-bold ${heater.dca < 5 ? 'text-adani-green' : heater.dca < 6 ? 'text-adani-yellow' : 'text-adani-red'}">
              ${heater.dca}°C
            </div>
          </div>
        </div>
        
        <div class="grid grid-cols-2 gap-3">
          <div class="parameter-card">
            <div class="text-sm text-gray-500 mb-1">Shell Pressure</div>
            <div class="parameter-value">${heater.shellPressure} kg/cm²</div>
          </div>
          <div class="parameter-card">
            <div class="text-sm text-gray-500 mb-1">Drain Level</div>
            <div class="parameter-value">${heater.drainLevel}%</div>
          </div>
          <div class="parameter-card">
            <div class="text-sm text-gray-500 mb-1">Shell Temp</div>
            <div class="parameter-value">${heater.shellTemp}°C</div>
          </div>
          <div class="parameter-card">
            <div class="text-sm text-gray-500 mb-1">Drain Temp</div>
            <div class="parameter-value">${heater.drainTemp}°C</div>
          </div>
        </div>
      </div>
    `;
    
    heaterCardsContainer.appendChild(heaterCard);
  });
}

function loadNotifications() {
  notificationsData = [
    {
      id: 1,
      title: "Optimize HP Heater 6 Drain Level",
      message: "Current drain level is 72%. Recommended to adjust to 65% for optimal performance.",
      timestamp: "2023-08-15T10:23:45",
      priority: "medium",
      status: "pending"
    },
    {
      id: 2,
      title: "HP Heater 5 Efficiency Degradation",
      message: "Efficiency has dropped by 5.2% in the last 24 hours. Inspection recommended.",
      timestamp: "2023-08-15T09:15:30",
      priority: "high",
      status: "accepted"
    },
    {
      id: 3,
      title: "Adjust Extraction Steam Flow to HP Heater 7",
      message: "Increasing extraction steam flow by 2% will improve TTD by approximately 0.8°C.",
      timestamp: "2023-08-15T08:45:12",
      priority: "low",
      status: "rejected"
    }
  ];
  
  renderNotifications();
}

function loadAlerts() {
  alertsData = [
    {
      id: 1,
      title: "HP Heater 5 High Drain Level",
      message: "Drain level reached 85%, exceeding the recommended maximum of 75%.",
      timestamp: "2023-08-15T10:05:22",
      priority: "critical",
      status: "active"
    },
    {
      id: 2,
      title: "HP Heater 6 TTD Deviation",
      message: "TTD value is 2.1°C, which is above the design value of 1.5°C.",
      timestamp: "2023-08-15T09:32:18",
      priority: "warning",
      status: "active"
    },
    {
      id: 3,
      title: "HP Heater 5 Shell Pressure Fluctuation",
      message: "Shell pressure showing abnormal fluctuations in the last 30 minutes.",
      timestamp: "2023-08-15T08:55:40",
      priority: "warning",
      status: "resolved"
    }
  ];
  
  renderAlerts();
}

function renderNotifications() {
  recommendationsContainer.innerHTML = '';
  
  if (notificationsData.length === 0) {
    recommendationsContainer.innerHTML = `
      <div class="flex flex-col items-center justify-center h-full p-6 text-gray-500">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mb-2 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p>No recommendations at this time</p>
      </div>
    `;
    return;
  }
  
  notificationsData.forEach(notification => {
    const priorityClass = notification.priority === 'high' ? 'bg-adani-red' : 
                          notification.priority === 'medium' ? 'bg-adani-yellow' : 'bg-adani-green';
    
    const statusBadge = notification.status !== 'pending' ? 
      `<div class="status-badge ${notification.status === 'accepted' ? 'status-accepted' : 'status-rejected'}">
        ${notification.status}
      </div>` : '';
    
    const commentIndicator = notification.hasComment ? 
      `<span class="comment-indicator" title="View comment">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      </span>` : '';
    
    const notificationItem = document.createElement('div');
    notificationItem.className = 'notification-item p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors duration-150';
    notificationItem.innerHTML = `
      ${statusBadge}
      <div class="flex items-start mb-2">
        <div class="h-3 w-3 rounded-full ${priorityClass} mt-1.5 mr-2"></div>
        <div class="flex-1">
          <h4 class="font-medium text-adani-navy flex items-center">
            ${notification.title}
            ${commentIndicator}
          </h4>
          <p class="text-sm text-gray-600 mt-1">${notification.message}</p>
        </div>
      </div>
      <div class="flex items-center justify-between">
        <span class="text-xs text-gray-500">
          ${formatTimeAgo(new Date(notification.timestamp))}
        </span>
        ${notification.status === 'pending' ? `
          <div class="notification-actions">
            <button class="btn-action btn-accept" data-id="${notification.id}" data-action="accept">Accept</button>
            <button class="btn-action btn-reject" data-id="${notification.id}" data-action="reject">Reject</button>
            <button class="btn-action btn-comment" data-id="${notification.id}" data-action="comment">Comment</button>
          </div>
        ` : ''}
      </div>
    `;
    
    // Add event listeners for action buttons
    recommendationsContainer.appendChild(notificationItem);
    
    if (notification.status === 'pending') {
      const acceptBtn = notificationItem.querySelector('.btn-accept');
      const rejectBtn = notificationItem.querySelector('.btn-reject');
      const commentBtn = notificationItem.querySelector('.btn-comment');
      
      acceptBtn.addEventListener('click', () => handleNotificationAction(notification.id, 'accept'));
      rejectBtn.addEventListener('click', () => handleNotificationAction(notification.id, 'reject'));
      commentBtn.addEventListener('click', () => openCommentModal(notification.id));
    }
  });
}

function renderAlerts() {
  alertsContainer.innerHTML = '';
  
  if (alertsData.length === 0) {
    alertsContainer.innerHTML = `
      <div class="flex flex-col items-center justify-center h-full p-6 text-gray-500">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mb-2 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p>No active alerts</p>
      </div>
    `;
    return;
  }
  
  alertsData.forEach(alert => {
    const priorityClass = alert.priority === 'critical' ? 'bg-adani-red' : 
                          alert.priority === 'warning' ? 'bg-adani-yellow' : 'bg-adani-green';
    
    const alertItem = document.createElement('div');
    alertItem.className = `p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors duration-150 ${alert.status === 'resolved' ? 'opacity-60' : ''}`;
    alertItem.innerHTML = `
      <div class="flex items-start mb-2">
        <div class="h-3 w-3 rounded-full ${priorityClass} mt-1.5 mr-2"></div>
        <div>
          <h4 class="font-medium text-adani-navy">${alert.title}</h4>
          <p class="text-sm text-gray-600 mt-1">${alert.message}</p>
        </div>
      </div>
      <div class="flex items-center justify-between">
        <span class="text-xs text-gray-500">
          ${formatTimeAgo(new Date(alert.timestamp))}
        </span>
        <span class="text-xs px-2 py-1 rounded-full ${alert.status === 'active' ? 'bg-adani-red bg-opacity-10 text-adani-red' : 'bg-adani-green bg-opacity-10 text-adani-green'}">
          ${alert.status.toUpperCase()}
        </span>
      </div>
    `;
    
    alertsContainer.appendChild(alertItem);
  });
}

// Notification Actions
function handleNotificationAction(id, action) {
  const notification = notificationsData.find(n => n.id === id);
  if (!notification) return;
  
  notification.status = action === 'accept' ? 'accepted' : 'rejected';
  
  // In a real app, you would send this to the server
  console.log(`Notification ${id} ${action}ed`);
  
  // Re-render notifications
  renderNotifications();
}

function openCommentModal(id) {
  const notification = notificationsData.find(n => n.id === id);
  if (!notification) return;
  
  currentNotificationId = id;
  modalNotificationTitle.textContent = notification.title;
  modalNotificationMessage.textContent = notification.message;
  commentText.value = notification.comment || '';
  
  commentModal.style.display = 'block';
}

function closeModal() {
  commentModal.style.display = 'none';
  currentNotificationId = null;
}

function saveComment() {
  if (!currentNotificationId) return;
  
  const notification = notificationsData.find(n => n.id === currentNotificationId);
  if (!notification) return;
  
  notification.comment = commentText.value;
  notification.hasComment = !!commentText.value;
  
  // In a real app, you would send this to the server
  console.log(`Comment saved for notification ${currentNotificationId}`);
  
  // Re-render notifications
  renderNotifications();
  
  // Close modal
  closeModal();
}

// Utility Functions
function formatTimeAgo(date) {
  const now = new Date();
  const diffMs = now - date;
  const diffSec = Math.round(diffMs / 1000);
  const diffMin = Math.round(diffSec / 60);
  const diffHour = Math.round(diffMin / 60);
  
  if (diffSec < 60) {
    return `${diffSec} seconds ago`;
  } else if (diffMin < 60) {
    return `${diffMin} minute${diffMin > 1 ? 's' : ''} ago`;
  } else if (diffHour < 24) {
    return `${diffHour} hour${diffHour > 1 ? 's' : ''} ago`;
  } else {
    return date.toLocaleDateString();
  }
}

// Simulate new notification
function simulateNewNotification() {
  // Create a new notification
  const newNotification = {
    id: Date.now(),
    title: "HP Heater 7 Efficiency Improvement Opportunity",
    message: "Adjusting drain cooler approach by 0.5°C can improve efficiency by approximately 0.8%.",
    timestamp: new Date().toISOString(),
    priority: "medium",
    status: "pending"
  };
  
  // Add to the beginning of the array
  notificationsData.unshift(newNotification);
  
  // Re-render notifications
  renderNotifications();
  
  // Show audio notification if enabled
  if (audioAlertsEnabled) {
    showAudioNotification(newNotification.title, newNotification.message);
  }
}

// Audio Notifications
function showAudioNotification(title, message) {
  // Update notification content
  audioNotificationTitle.textContent = title;
  audioNotificationMessage.textContent = message;
  
  // Show notification
  audioNotification.classList.add('show');
  
  // Play notification sound
  const notificationSound = document.getElementById('notification-sound');
  notificationSound.play();
  
  // Play voice message
  setVoiceMessage(message);
  
  // Show badge
  const audioBadge = document.getElementById('audio-alert-badge');
  audioBadge.classList.add('active');
  
  // Hide notification after 5 seconds
  setTimeout(() => {
    audioNotification.classList.remove('show');
  }, 5000);
}

// Initialize voice selection
document.getElementById('voice-selector-toggle').addEventListener('click', function() {
  document.getElementById('voice-dropdown').classList.toggle('active');
});

// Voice selection
document.querySelectorAll('.voice-option').forEach(option => {
  option.addEventListener('click', function() {
    const voiceType = this.getAttribute('data-voice');
    
    // Update selected voice
    document.querySelectorAll('.voice-option').forEach(opt => {
      opt.classList.remove('selected');
    });
    this.classList.add('selected');
    
    // Update current voice
    currentVoice = VOICES[voiceType];
    
    // Hide dropdown
    document.getElementById('voice-dropdown').classList.remove('active');
  });
});

// Close voice dropdown when clicking outside
document.addEventListener('click', function(event) {
  const dropdown = document.getElementById('voice-dropdown');
  const toggle = document.getElementById('voice-selector-toggle');
  
  if (!toggle.contains(event.target) && !dropdown.contains(event.target)) {
    dropdown.classList.remove('active');
  }
});
