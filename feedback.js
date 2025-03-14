
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
  } else {
    sidebar.classList.remove('w-16');
    sidebar.classList.add('w-64');
    mainContent.classList.remove('ml-16');
    mainContent.classList.add('ml-64');
  }
}

sidebarToggle.addEventListener('click', toggleSidebar);

// Set default sidebar state
sidebar.classList.add('w-64');
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

// Form handling
const feedbackForm = document.getElementById('feedback-form');
const resetButton = document.getElementById('reset-button');
const submitText = document.getElementById('submit-text');
const loadingSpinner = document.getElementById('loading-spinner');
const notification = document.getElementById('notification');

// Reset form
function resetForm() {
  feedbackForm.reset();
  document.getElementById('suggestion').checked = true;
}

resetButton.addEventListener('click', resetForm);

// Handle form submission
feedbackForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Get form data
  const formData = {
    name: document.getElementById('name').value.trim(),
    email: document.getElementById('email').value.trim(),
    feedbackType: document.querySelector('input[name="feedbackType"]:checked').value,
    message: document.getElementById('message').value.trim()
  };
  
  // Validate form
  if (!formData.name || !formData.email || !formData.message) {
    showNotification('Please fill in all required fields.', 'error');
    return;
  }
  
  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    showNotification('Please enter a valid email address.', 'error');
    return;
  }
  
  // Show loading state
  submitText.textContent = 'Submitting...';
  loadingSpinner.classList.remove('hidden');
  
  // Simulate API call
  setTimeout(function() {
    // In a real implementation, you would send data to an API
    console.log('Form data:', formData);
    
    // Reset form and show success message
    resetForm();
    submitText.textContent = 'Submit Feedback';
    loadingSpinner.classList.add('hidden');
    showNotification('Thank you for your feedback. We will review it shortly.', 'success');
  }, 1500);
});

// Show notification
function showNotification(message, type) {
  notification.innerHTML = message;
  notification.classList.remove('hidden', 'bg-green-100', 'text-green-800', 'bg-red-100', 'text-red-800');
  
  if (type === 'success') {
    notification.classList.add('bg-green-100', 'text-green-800');
  } else {
    notification.classList.add('bg-red-100', 'text-red-800');
  }
  
  // Auto-hide after 5 seconds
  setTimeout(function() {
    notification.classList.add('hidden');
  }, 5000);
}
