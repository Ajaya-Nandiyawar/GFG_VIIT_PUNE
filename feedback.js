document.getElementById('feedbackForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const statusMessage = document.getElementById('statusMessage');
    
    if (name && email) {
        // Show success message
        statusMessage.textContent = "Thank you for your feedback!";
        statusMessage.style.color = "green";
        statusMessage.style.marginTop = "10px";
        
        // Clear form
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    }
});