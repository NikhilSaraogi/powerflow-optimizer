// Sample data - Replace with your API calls
let dashboardData = {
  topBarData: {
    ecoInletTemp: { value: 220.5, unit: "°C", status: "healthy" },
    load: { value: 660, unit: "MW", status: "healthy" },
    hdrPressure: { value: 170.2, unit: "bar", status: "healthy" },
    feedWaterFlow: { value: 1890, unit: "t/h", status: "healthy" }
  },
  heaterData: [
    {
      id: 1,
      name: "HP Heater 1",
      heatLoad: { value: 52.4, unit: "MW", status: "healthy", change: 1.2 },
      flow: { value: 630, unit: "t/h", status: "healthy", change: 0.5 },
      ttd: { value: 2.8, unit: "°C", status: "healthy", change: -0.2 },
      dca: { value: 4.5, unit: "°C", status: "healthy", change: 0.1 },
      tr: { value: 0.92, unit: "", status: "healthy", change: 0.0 },
      heaterLevel: { value: 52, unit: "%", status: "healthy" },
      predictedEcoInlet: { value: 223.1, unit: "°C", status: "healthy" }
    },
    {
      id: 2,
      name: "HP Heater 2",
      heatLoad: { value: 48.7, unit: "MW", status: "warning", change: -2.3 },
      flow: { value: 625, unit: "t/h", status: "healthy", change: 0.2 },
      ttd: { value: 3.6, unit: "°C", status: "warning", change: 1.3 },
      dca: { value: 5.2, unit: "°C", status: "warning", change: 0.8 },
      tr: { value: 0.89, unit: "", status: "warning", change: -0.02 },
      heaterLevel: { value: 65, unit: "%", status: "warning" },
      predictedEcoInlet: { value: 219.8, unit: "°C", status: "warning" }
    },
    {
      id: 3,
      name: "HP Heater 3",
      heatLoad: { value: 45.1, unit: "MW", status: "critical", change: -4.8 },
      flow: { value: 612, unit: "t/h", status: "warning", change: -1.5 },
      ttd: { value: 4.2, unit: "°C", status: "critical", change: 2.1 },
      dca: { value: 6.8, unit: "°C", status: "critical", change: 2.2 },
      tr: { value: 0.83, unit: "", status: "critical", change: -0.05 },
      heaterLevel: { value: 78, unit: "%", status: "critical" },
      predictedEcoInlet: { value: 215.3, unit: "°C", status: "critical" }
    }
  ],
  notificationData: [
    {
      id: "n1",
      type: "recommendation",
      title: "Optimize HP Heater 1 Level",
      message: "Maintain heater level at 52% to achieve eco inlet temperature of 223.1°C for optimal performance.",
      timestamp: "10:32 AM",
      priority: "medium",
      status: null,
      comment: null
    },
    {
      id: "n2",
      type: "recommendation",
      title: "Adjust HP Heater 2 Level",
      message: "Reduce heater level to 55% to improve heat transfer efficiency and increase eco inlet temperature to 219.8°C.",
      timestamp: "10:15 AM",
      priority: "high",
      status: null,
      comment: null
    },
    {
      id: "n3",
      type: "recommendation",
      title: "HP Heater 3 Level Correction",
      message: "Urgent: Decrease heater level from 78% to 60% to recover performance and achieve predicted eco inlet of 215.3°C.",
      timestamp: "09:45 AM",
      priority: "high",
      status: null,
      comment: null
    },
    {
      id: "n4",
      type: "rca",
      title: "HP Heater 3 Performance Degradation",
      message: "Root cause analysis indicates possible tube fouling. Schedule inspection during next outage.",
      timestamp: "10:05 AM",
      priority: "medium",
      status: null,
      comment: null
    },
    {
      id: "n5",
      type: "alert",
      title: "HP Heater 3 High Level",
      message: "Heater level exceeding optimal range. Check drain valve operation and control system.",
      timestamp: "10:22 AM",
      priority: "high",
      status: null,
      comment: null
    }
  ]
};

// Sample voice message data
const voiceAlertSamples = [
  {
    id: "v1",
    title: "Critical Alert: HP Heater 3",
    message: "Critical alert for HP Heater 3. Heater level has reached 78%. Please reduce to 60% immediately to prevent damage.",
    priority: "high",
    voiceMessage: "Critical alert for HP Heater 3. Heater level has reached 78 percent. Please reduce to 60 percent immediately to prevent damage.",
    timestamp: new Date()
  },
  {
    id: "v2",
    title: "Warning: HP Heater 2",
    message: "Warning for HP Heater 2. Heat transfer efficiency decreasing. Adjust level to 55% for optimal performance.",
    priority: "medium",
    voiceMessage: "Warning for HP Heater 2. Heat transfer efficiency decreasing. Adjust level to 55 percent for optimal performance.",
    timestamp: new Date()
  },
  {
    id: "v3",
    title: "Recommendation: Eco Inlet Temperature",
    message: "Recommendation: Adjust HP Heater 1 level to 52% to increase eco inlet temperature to 223.1°C for improved efficiency.",
    priority: "low",
    voiceMessage: "Recommendation: Adjust HP Heater 1 level to 52 percent to increase eco inlet temperature to 223.1 degrees for improved efficiency.",
    timestamp: new Date()
  }
];

// Initialize sidebar state and handle toggle
let sidebarCollapsed = false;
const sidebar = document.getElementById('sidebar');
const mainContent = document.getElementById('main-content');
const sidebarToggle = document.getElementById('sidebar-toggle');

// Comment modal elements
let commentModal;
let closeCommentModal;
let commentText;
let saveCommentBtn;
let currentNotificationId = null;

// Audio alert elements
let audioAlertEnabled = true;
let audioAlertToggle;
let audioAlertIcon;
let audioAlertBadge;
let notificationSound;
let voiceMessage;
let audioNotification;
let audioNotificationTitle;
let audioNotificationMessage;
let pendingAudioAlerts = [];
let isPlayingAudio = false;
let lastAlertTime = 0;
const alertCooldown = 10000; // 10 seconds between alerts
const testMode = true; // Set to true to test with sample data, false for API mode

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

// Helper functions
function getStatusColorClass(status) {
  return status === 'critical' ? 'status-critical' : 
         status === 'warning' ? 'status-warning' : 
         'status-healthy';
}

function getChangeIcon(change) {
  if (change > 0) return '<span class="text-adani-green">▲ ' + change.toFixed(1) + '</span>';
  if (change < 0) return '<span class="text-adani-red">▼ ' + Math.abs(change).toFixed(1) + '</span>';
  return '<span class="text-gray-500">◆ ' + change.toFixed(1) + '</span>';
}

function updateTime() {
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
  
  const currentTimeElement = document.getElementById('current-time');
  if (currentTimeElement) {
    currentTimeElement.innerText = `${dateString} ${timeString}`;
  }
  
  const recommendationsTimeElement = document.getElementById('recommendations-time');
  if (recommendationsTimeElement) {
    recommendationsTimeElement.textContent = dateString + ' ' + timeString;
  }
  
  const alertsTimeElement = document.getElementById('alerts-time');
  if (alertsTimeElement) {
    alertsTimeElement.textContent = dateString + ' ' + timeString;
  }
}

// Highlight predicted values in message
function highlightMessage(message) {
  // Look for patterns like "eco inlet temperature of 223.1°C" or "heater level at 52%"
  const levelPattern = /(\d+\.?\d*)%/g;
  const tempPattern = /(\d+\.?\d*)°C/g;
  
  return message
    .replace(levelPattern, '<span class="font-semibold text-adani-blue">$&</span>')
    .replace(tempPattern, '<span class="font-semibold text-adani-green">$&</span>');
}

// Initialize UI
function initDashboard() {
  updateTime();
  setInterval(updateTime, 1000);
  renderTopBar();
  renderHeaterCards();
  renderNotifications();
  initNotificationActions();
  initAudioAlerts();
  
  // Set up sidebar toggle
  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', toggleSidebar);
  }

  // Set default sidebar state
  if (sidebar && mainContent) {
    sidebar.classList.add('w-64', 'sidebar-expanded');
    mainContent.classList.add('ml-64');
  }
}

// Initialize notification action handlers
function initNotificationActions() {
  // Get modal elements
  commentModal = document.getElementById('comment-modal');
  closeCommentModal = document.getElementById('close-comment-modal');
  commentText = document.getElementById('comment-text');
  saveCommentBtn = document.getElementById('save-comment');
  
  // Set up modal close event
  closeCommentModal.addEventListener('click', function() {
    commentModal.style.display = 'none';
    currentNotificationId = null;
  });
  
  // Close modal when clicking outside
  window.addEventListener('click', function(event) {
    if (event.target === commentModal) {
      commentModal.style.display = 'none';
      currentNotificationId = null;
    }
  });
  
  // Set up save comment button
  saveCommentBtn.addEventListener('click', function() {
    if (currentNotificationId && commentText.value.trim() !== '') {
      updateNotificationComment(currentNotificationId, commentText.value.trim());
      commentModal.style.display = 'none';
    }
  });
}

// Initialize Audio Alert functionality
function initAudioAlerts() {
  audioAlertToggle = document.getElementById('audio-alert-toggle');
  audioAlertIcon = document.getElementById('audio-alert-icon');
  audioAlertBadge = document.getElementById('audio-alert-badge');
  notificationSound = document.getElementById('notification-sound');
  voiceMessage = document.getElementById('voice-message');
  audioNotification = document.getElementById('audio-notification');
  audioNotificationTitle = document.getElementById('audio-notification-title');
  audioNotificationMessage = document.getElementById('audio-notification-message');

  // Set up audio alert toggle
  if (audioAlertToggle) {
    audioAlertToggle.addEventListener('click', toggleAudioAlerts);
  }

  // Set up voice message audio ended event
  if (voiceMessage) {
    voiceMessage.addEventListener('ended', onVoiceMessageEnded);
  }

  // Start test audio alert if in test mode
  if (testMode) {
    // Start first test alert after 5 seconds
    setTimeout(() => {
      fetchAudioAlerts();
    }, 5000);

    // Set up interval for periodic alerts (every 30 seconds)
    setInterval(() => {
      fetchAudioAlerts();
    }, 30000);
  }
}

// Toggle audio alerts on/off
function toggleAudioAlerts() {
  audioAlertEnabled = !audioAlertEnabled;
  
  // Update icon state
  if (audioAlertIcon) {
    if (audioAlertEnabled) {
      audioAlertIcon.innerHTML = `
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
      `;
    } else {
      // X mark on the speaker icon to indicate it's off
      audioAlertIcon.innerHTML = `
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
      `;
    }
  }
  
  // Add visual indication that audio is disabled
  if (audioAlertEnabled) {
    audioAlertToggle.classList.remove('opacity-50');
  } else {
    audioAlertToggle.classList.add('opacity-50');
    hideAudioNotification(); // Hide any active notification
  }
  
  console.log(`Audio alerts ${audioAlertEnabled ? 'enabled' : 'disabled'}`);
}

// Fetch audio alerts from API
function fetchAudioAlerts() {
  // Check if we should ignore this alert (cooldown period)
  const now = Date.now();
  if (now - lastAlertTime < alertCooldown) {
    console.log('Alert cooldown in effect, skipping this alert check');
    return;
  }
  
  if (testMode) {
    // In test mode, simulate an API response with sample data
    const randomSample = voiceAlertSamples[Math.floor(Math.random() * voiceAlertSamples.length)];
    processAudioAlert(randomSample);
  } else {
    // In normal mode, make an actual API call
    fetch('https://api.example.com/audio-alerts', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_API_KEY'
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('API request failed');
      }
      return response.json();
    })
    .then(data => {
      // Process the audio alert
      if (data && data.alerts && data.alerts.length > 0) {
        processAudioAlert(data.alerts[0]);
      }
    })
    .catch(error => {
      console.error('Error fetching audio alerts:', error);
    });
  }
}

// Process an incoming audio alert
function processAudioAlert(alertData) {
  console.log('Processing audio alert:', alertData);
  
  // Update last alert time
  lastAlertTime = Date.now();
  
  // If audio is disabled, just update the badge
  if (!audioAlertEnabled) {
    updateAudioAlertBadge(true);
    return;
  }
  
  // Add to pending alerts queue
  pendingAudioAlerts.push(alertData);
  
  // Update badge
  updateAudioAlertBadge(true);
  
  // If not currently playing audio, play the alert
  if (!isPlayingAudio) {
    playNextAudioAlert();
  }
}

// Play the next audio alert in the queue
function playNextAudioAlert() {
  if (pendingAudioAlerts.length === 0 || !audioAlertEnabled) {
    isPlayingAudio = false;
    updateAudioAlertBadge(pendingAudioAlerts.length > 0);
    return;
  }
  
  isPlayingAudio = true;
  const alertData = pendingAudioAlerts.shift();
  
  // Show visual notification
  showAudioNotification(alertData);
  
  // Play notification sound first
  notificationSound.play();
  
  // When notification sound ends, play voice message
  notificationSound.onended = function() {
    // In a real implementation, you would get text-to-speech audio from an API
    // For demo purposes, we're simulating this with the Web Speech API
    if ('speechSynthesis' in window) {
      const speech = new SpeechSynthesisUtterance(alertData.voiceMessage);
      speech.rate = 1;
      speech.pitch = 1;
      speech.volume = 1;
      speech.onend = onVoiceMessageEnded;
      window.speechSynthesis.speak(speech);
    } else {
      // Fallback if speech synthesis is not available
      console.log('Speech synthesis not available in this browser');
      setTimeout(onVoiceMessageEnded, 2000); // Simulate voice message duration
    }
  };
}

// Handle voice message ended event
function onVoiceMessageEnded() {
  console.log('Voice message playback completed');
  
  // Hide the notification after a short delay
  setTimeout(() => {
    hideAudioNotification();
    
    // Play next alert if any
    setTimeout(() => {
      playNextAudioAlert();
    }, 1000);
  }, 1000);
}

// Show audio notification
function showAudioNotification(alertData) {
  if (!audioNotification) return;
  
  // Set notification content
  audioNotificationTitle.textContent = alertData.title;
  audioNotificationMessage.textContent = alertData.message;
  
  // Apply priority styling
  audioNotification.className = 'audio-notification show';
  if (alertData.priority === 'high') {
    audioNotification.style.borderLeftColor = '#FF3A3A';
  } else if (alertData.priority === 'medium') {
    audioNotification.style.borderLeftColor = '#FFC107';
  } else {
    audioNotification.style.borderLeftColor = '#0046AD';
  }
  
  // Show the notification
  audioNotification.classList.add('show');
}

// Hide audio notification
function hideAudioNotification() {
  if (!audioNotification) return;
  audioNotification.classList.remove('show');
}

// Update the audio alert badge
function updateAudioAlertBadge(show) {
  if (!audioAlertBadge) return;
  
  if (show && pendingAudioAlerts.length > 0) {
    audioAlertBadge.textContent = pendingAudioAlerts.length;
    audioAlertBadge.classList.add('active');
  } else {
    audioAlertBadge.classList.remove('active');
  }
}

// Render Top Bar
function renderTopBar() {
  const container = document.getElementById('top-bar-container');
  if (!container) return;
  
  const { ecoInletTemp, load, hdrPressure, feedWaterFlow } = dashboardData.topBarData;
  
  container.innerHTML = `
    <div class="bg-white rounded-lg shadow-md p-4 border border-gray-100 flex items-center animate-fade-in">
      <div class="p-2 bg-blue-100 rounded-lg mr-3">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-adani-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      </div>
      <div class="flex-1">
        <h3 class="text-sm font-medium text-gray-500">Eco Inlet Temperature</h3>
        <p class="text-xl font-semibold ${getStatusColorClass(ecoInletTemp.status)}">${ecoInletTemp.value} ${ecoInletTemp.unit}</p>
      </div>
    </div>
    
    <div class="bg-white rounded-lg shadow-md p-4 border border-gray-100 flex items-center animate-fade-in">
      <div class="p-2 bg-blue-100 rounded-lg mr-3">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-adani-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
      <div class="flex-1">
        <h3 class="text-sm font-medium text-gray-500">Load</h3>
        <p class="text-xl font-semibold ${getStatusColorClass(load.status)}">${load.value} ${load.unit}</p>
      </div>
    </div>
    
    <div class="bg-white rounded-lg shadow-md p-4 border border-gray-100 flex items-center animate-fade-in">
      <div class="p-2 bg-blue-100 rounded-lg mr-3">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-adani-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      </div>
      <div class="flex-1">
        <h3 class="text-sm font-medium text-gray-500">HDR Pressure</h3>
        <p class="text-xl font-semibold ${getStatusColorClass(hdrPressure.status)}">${hdrPressure.value} ${hdrPressure.unit}</p>
      </div>
    </div>
    
    <div class="bg-white rounded-lg shadow-md p-4 border border-gray-100 flex items-center animate-fade-in">
      <div class="p-2 bg-blue-100 rounded-lg mr-3">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-adani-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      </div>
      <div class="flex-1">
        <h3 class="text-sm font-medium text-gray-500">Feed Water Flow</h3>
        <p class="text-xl font-semibold ${getStatusColorClass(feedWaterFlow.status)}">${feedWaterFlow.value} ${feedWaterFlow.unit}</p>
      </div>
    </div>
  `;
}

// Render Heater Cards
function renderHeaterCards() {
  const container = document.getElementById('heater-cards-container');
  if (!container) return;
  
  container.innerHTML = '';
  
  dashboardData.heaterData.forEach(heater => {
    const card = document.createElement('div');
    card.className = 'bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden animate-fade-in';
    
    const headerClass = heater.heatLoad.status === 'critical' ? 'bg-red-500' : 
                       heater.heatLoad.status === 'warning' ? 'bg-yellow-500' : 
                       'bg-adani-blue';
    
    card.innerHTML = `
      <div class="px-4 py-3 ${headerClass} text-white font-medium">
        ${heater.name}
        <span class="float-right">${heater.predictedEcoInlet.value}${heater.predictedEcoInlet.unit}</span>
      </div>
      <div class="p-4">
        <div class="grid grid-cols-2 gap-4 mb-4">
          <div>
            <h4 class="text-xs font-medium text-gray-500">Heat Load</h4>
            <p class="text-lg font-semibold ${getStatusColorClass(heater.heatLoad.status)}">
              ${heater.heatLoad.value} ${heater.heatLoad.unit} 
              ${getChangeIcon(heater.heatLoad.change)}
            </p>
          </div>
          <div>
            <h4 class="text-xs font-medium text-gray-500">Flow</h4>
            <p class="text-lg font-semibold ${getStatusColorClass(heater.flow.status)}">
              ${heater.flow.value} ${heater.flow.unit}
              ${getChangeIcon(heater.flow.change)}
            </p>
          </div>
          <div>
            <h4 class="text-xs font-medium text-gray-500">TTD</h4>
            <p class="text-lg font-semibold ${getStatusColorClass(heater.ttd.status)}">
              ${heater.ttd.value} ${heater.ttd.unit}
              ${getChangeIcon(heater.ttd.change)}
            </p>
          </div>
          <div>
            <h4 class="text-xs font-medium text-gray-500">DCA</h4>
            <p class="text-lg font-semibold ${getStatusColorClass(heater.dca.status)}">
              ${heater.dca.value} ${heater.dca.unit}
              ${getChangeIcon(heater.dca.change)}
            </p>
          </div>
        </div>
        
        <div class="grid grid-cols-2 gap-4">
          <div>
            <h4 class="text-xs font-medium text-gray-500">TR</h4>
            <p class="text-lg font-semibold ${getStatusColorClass(heater.tr.status)}">
              ${heater.tr.value} 
              ${getChangeIcon(heater.tr.change)}
            </p>
          </div>
          <div>
            <h4 class="text-xs font-medium text-gray-500">Heater Level</h4>
            <p class="text-lg font-semibold ${getStatusColorClass(heater.heaterLevel.status)}">
              ${heater.heaterLevel.value} ${heater.heaterLevel.unit}
            </p>
          </div>
        </div>
      </div>
    `;
    
    container.appendChild(card);
  });
}

// Render Notifications
function renderNotifications() {
  const recommendationsContainer = document.getElementById('recommendations-container');
  const alertsContainer = document.getElementById('alerts-container');
  
  if (!recommendationsContainer || !alertsContainer) return;
  
  const recommendations = dashboardData.notificationData.filter(n => n.type === 'recommendation');
  const alerts = dashboardData.notificationData.filter(n => n.type === 'rca' || n.type === 'alert');
  
  // Render recommendations
  if (recommendations.length > 0) {
    let recommendationsHTML = '<ul class="space-y-4 p-4">';
    recommendations.forEach(notification => {
      const iconHTML = notification.type === 'recommendation' 
        ? '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-adani-green" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>'
        : '';
      
      // Add status badge if available
      const statusBadge = notification.status 
        ? `<span class="status-badge status-${notification.status}">${notification.status}</span>` 
        : '';
      
      // Add comment indicator if available
      const commentIndicator = notification.comment 
        ? `<span class="comment-indicator" title="${notification.comment}" onclick="showCommentTooltip(event, '${notification.id}')">💬</span>` 
        : '';
      
      recommendationsHTML += `
        <li class="notification-item flex gap-3 pb-3 border-b border-gray-100 last:border-0 last:pb-0" data-id="${notification.id}">
          ${iconHTML}
          <div class="flex-1">
            <div class="flex justify-between items-start mb-1">
              <h4 class="font-medium text-adani-navy">${notification.title} ${commentIndicator}</h4>
              <span class="text-xs text-gray-500">${notification.timestamp}</span>
            </div>
            <p class="text-sm text-gray-600" 
               dangerouslySetInnerHTML={{ __html: highlightMessage(notification.message) }}></p>
            <div class="notification-actions">
              <button class="btn-action btn-accept" onclick="updateNotificationStatus('${notification.id}', 'accepted')">Accept</button>
              <button class="btn-action btn-reject" onclick="updateNotificationStatus('${notification.id}', 'rejected')">Reject</button>
              <button class="btn-action btn-comment" onclick="openCommentModal('${notification.id}')">Comment</button>
            </div>
            ${statusBadge}
          </div>
        </li>
      `;
    });
    recommendationsHTML += '</ul>';
    recommendationsContainer.innerHTML = recommendationsHTML;
  } else {
    recommendationsContainer.innerHTML = '<p class="text-center text-gray-500 py-4">No recommendations at this time</p>';
  }
  
  // Render alerts
  if (alerts.length > 0) {
    let alertsHTML = '<ul class="space-y-4 p-4">';
    alerts.forEach(notification => {
      let iconHTML = '';
      if (notification.type === 'rca') {
        iconHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-adani-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>';
      } else {
        const alertColor = notification.priority === 'high' ? 'text-adani-red' : notification.priority === 'medium' ? 'text-adani-yellow' : 'text-adani-blue';
        iconHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ${alertColor}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>`;
      }
      
      // Add status badge if available
      const statusBadge = notification.status 
        ? `<span class="status-badge status-${notification.status}">${notification.status}</span>` 
        : '';
      
      // Add comment indicator if available
      const commentIndicator = notification.comment 
        ? `<span class="comment-indicator" title="${notification.comment}" onclick="showCommentTooltip(event, '${notification.id}')">💬</span>` 
        : '';
      
      alertsHTML += `
        <li class="notification-item flex gap-3 pb-3 border-b border-gray-100 last:border-0 last:pb-0" data-id="${notification.id}">
          ${iconHTML}
          <div class="flex-1">
            <div class="flex justify-between items-start mb-1">
              <h4 class="font-medium text-adani-navy flex items-center">
                ${notification.title} ${commentIndicator}
                ${notification.priority === 'high' ? '<span class="ml-2 px-2 py-0.5 bg-red-100 text-red-800 rounded-full text-xs">Critical</span>' : ''}
              </h4>
              <span class="text-xs text-gray-500">${notification.timestamp}</span>
            </div>
            <p class="text-sm text-gray-600">${notification.message}</p>
            <div class="notification-actions">
              <button class="btn-action btn-accept" onclick="updateNotificationStatus('${notification.id}', 'accepted')">Accept</button>
              <button class="btn-action btn-reject" onclick="updateNotificationStatus('${notification.id}', 'rejected')">Reject</button>
              <button class="btn-action btn-comment" onclick="openCommentModal('${notification.id}')">Comment</button>
            </div>
            ${statusBadge}
          </div>
        </li>
      `;
    });
    alertsHTML += '</ul>';
    alertsContainer.innerHTML = alertsHTML;
  } else {
    alertsContainer.innerHTML = '<p class="text-center text-gray-500 py-4">No alerts at this time</p>';
  }
}

// Update notification status (accept/reject)
function updateNotificationStatus(notificationId, status) {
  // Find the notification in our data
  const notification = dashboardData.notificationData.find(n => n.id === notificationId);
  
  if (notification) {
    notification.status = status;
    
    // Re-render notifications to show the updated status
    renderNotifications();
    
    // This function would send the updated status to the backend
    saveNotificationStatus(notificationId, status);
  }
}

// Open comment modal
function openCommentModal(notificationId) {
  // Find the notification in our data
  const notification = dashboardData.notificationData.find(n => n.id === notificationId);
  
  if (notification) {
    // Set current notification id
    currentNotificationId = notificationId;
    
    // Set modal content
    document.getElementById('modal-notification-title').textContent = notification.title;
    document.getElementById('modal-notification-message').textContent = notification.message;
    
    // Set existing comment if any
    commentText.value = notification.comment || '';
    
    // Show modal
    commentModal.style.display = 'block';
  }
}

// Update notification comment
function updateNotificationComment(notificationId, comment) {
  // Find the notification in our data
  const notification = dashboardData.notificationData.find(n => n.id === notificationId);
  
  if (notification) {
    notification.comment = comment;
    
    // Re-render notifications to show the comment indicator
    renderNotifications();
    
    // This function would send the updated comment to the backend
    saveNotificationComment(notificationId, comment);
  }
}

// Save notification status to backend (placeholder function)
function saveNotificationStatus(notificationId, status) {
  console.log(`Saving notification ${notificationId} with status: ${status}`);
  
  // Here you would make an AJAX request to your backend
  // Example:
  /*
  fetch('/api/notifications/status', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: notificationId,
      status: status
    })
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
  */
  
  // Expose this function globally so it can be accessed from server-side code
  window.updateNotificationStatus = updateNotificationStatus;
}

// Save notification comment to backend (placeholder function)
function saveNotificationComment(notificationId, comment) {
  console.log(`Saving comment for notification ${notificationId}: ${comment}`);
  
  // Here you would make an AJAX request to your backend
  // Example:
  /*
  fetch('/api/notifications/comment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: notificationId,
      comment: comment
    })
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
  */
  
  // Expose this function globally so it can be accessed from server-side code
  window.saveNotificationComment = saveNotificationComment;
}

// Show comment tooltip
function showCommentTooltip(event, notificationId) {
  const notification = dashboardData.notificationData.find(n => n.id === notificationId);
  
  if (notification && notification.comment) {
    alert(`Comment: ${notification.comment}`);
  }
}

// Function to fetch data from API
async function fetchDataFromAPI() {
  try {
    // Replace with your actual API call
    // const response = await fetch('https://your-api-endpoint.com/dashboard-data');
    // const data = await response.json();
    // updateDashboard(data);
    
    // For demo, we'll use the dummy data
    updateDashboard(dashboardData);
  } catch (error) {
    console.error('Error fetching data from API:', error);
  }
}

// Update dashboard with new data - fixed to avoid Assignment to constant variable error
function updateDashboard(data) {
  // Update each section of dashboardData instead of reassigning the whole object
  dashboardData.topBarData = data.topBarData;
  dashboardData.heaterData = data.heaterData;
  dashboardData.notificationData = data.notificationData;
  
  renderTopBar();
  renderHeaterCards();
  renderNotifications();
}

// API endpoint for voice alerts (mock implementation)
// In a real application, this would be an actual API endpoint
// For demo purposes, we're simulating this with a local function
async function fetchVoiceAlert() {
  // Simulate API request delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Return a random sample voice alert
  return {
    success: true,
    alert: voiceAlertSamples[Math.floor(Math.random() * voiceAlertSamples.length)]
  };
}

// Initialize the dashboard when the page loads
document.addEventListener('DOMContentLoaded', function() {
  initDashboard();
  
  // Set up refresh interval - adjust as needed
  setInterval(fetchDataFromAPI, 60000); // Refresh every minute
});

// Expose necessary functions to window object for global access
window.updateNotificationStatus = updateNotificationStatus;
window.openCommentModal = openCommentModal;
window.saveNotificationComment = saveNotificationComment;
window.showCommentTooltip = showCommentTooltip;
