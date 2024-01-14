// Simple chat bot script
function sendMessage() {
    var userInput = document.getElementById('user-input').value;
    var chatMessages = document.getElementById('chat-messages');

    // Display user message
    appendMessage('user', userInput, true);

        // Simulate bot response with a delay for animation effect
        setTimeout(function () {
            var botResponse = "Welcome to Kasma Consutancy, for furtner mail or call us , thanks for visting our site!!";
            appendMessage('bot', botResponse, true);
        }, 500);


    // Clear user input
    document.getElementById('user-input').value = '';
}

// Function to append messages with animation
function appendMessage(sender, message, animate) {
    var chatMessages = document.getElementById('chat-messages');

    var messageElement = document.createElement('div');
    messageElement.classList.add(sender + '-message');
    messageElement.textContent = sender.charAt(0).toUpperCase() + sender.slice(1) + ': ' + message;

    if (animate) {
        messageElement.style.opacity = 0;
        chatMessages.appendChild(messageElement);

        setTimeout(function () {
            messageElement.style.opacity = 1;
        }, 100);
    } else {
        chatMessages.appendChild(messageElement);
    }

    // Scroll to the bottom of the chat container
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

