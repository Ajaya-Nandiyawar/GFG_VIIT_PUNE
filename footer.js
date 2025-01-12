// Get the form element
const form = document.querySelector('form');

// Add submit event listener to the form
form.addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();
    
    // Get the email input value
    const emailInput = document.getElementById('email');
    const email = emailInput.value.trim();
    
    // Basic email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!email) {
        showMessage('Please enter an email address', 'error');
        return;
    }
    
    if (!emailRegex.test(email)) {
        showMessage('Please enter a valid email address', 'error');
        return;
    }
    
    // Simulate API call for newsletter subscription
    // In a real application, you would make an actual API request here
    simulateSubscription(email);
});

function simulateSubscription(email) {
    // Create a loading message
    showMessage('Subscribing...', 'loading');
    
    // Simulate network delay
    setTimeout(() => {
        // Clear the form
        document.getElementById('email').value = '';
        
        // Show success message
        showMessage('Successfully subscribed to our newsletter!', 'success');
    }, 1000);
}

function showMessage(message, type) {
    // Remove any existing message
    const existingMessage = document.querySelector('.message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create message element
    const messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    messageDiv.className = `message message-${type}`;
    
    // Add appropriate styling based on message type
    switch(type) {
        case 'error':
            messageDiv.style.color = '#dc3545';
            break;
        case 'success':
            messageDiv.style.color = '#28a745';
            break;
        case 'loading':
            messageDiv.style.color = '#007bff';
            break;
    }
    
    // Insert message after the form
    form.insertAdjacentElement('afterend', messageDiv);
    
    // Remove success/error messages after 3 seconds
    if (type !== 'loading') {
        setTimeout(() => {
            messageDiv.remove();
        }, 3000);
    }
}

