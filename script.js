document.getElementById('sendButton').addEventListener('click', function() {
    let userInput = document.getElementById('userInput').value;
    if (userInput.trim() !== "") {
        displayMessage(userInput, 'user');
        document.getElementById('userInput').value = ''; // clear input field
        getBotResponse(userInput);
    }
});

// Display message with typing effect
function displayMessage(message, sender) {
    let messageContainer = document.createElement('div');
    messageContainer.classList.add('mb-2');
    
    if (sender === 'user') {
        messageContainer.classList.add('text-end', 'bg-light', 'p-2', 'rounded');
    } else {
        messageContainer.classList.add('text-start', 'bg-primary', 'text-white', 'p-2', 'rounded');
    }
    
    messageContainer.innerText = message;
    document.getElementById('messages').appendChild(messageContainer);
    scrollToBottom();
}

// Simulate the bot's response with a typing effect
function getBotResponse(userInput) {
    displayMessage("Bot is typing...", 'bot');
    
    setTimeout(function() {
        let botResponse = getDynamicResponse(userInput);
        let botMessage = document.querySelector('.bg-primary');
        botMessage.innerText = botResponse; // Replace typing with the actual bot response
        scrollToBottom();
    }, 1500); // Simulate typing delay
}

// Scroll to the bottom of the chat
function scrollToBottom() {
    const chatContainer = document.getElementById('chatbox-container');
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Define dynamic bot responses based on input
function getDynamicResponse(userInput) {
    const lowerCaseInput = userInput.toLowerCase();
    const responses = [
        {
            trigger: ["hello", "hi", "hey"],
            response: ["Hi there!", "Hello! How can I assist you?", "Hey, how can I help?"]
        },
        {
            trigger: ["how are you", "how are you doing"],
            response: ["I'm doing great, thanks for asking!", "I'm a bot, so I don't feel emotions, but I'm here to help!"]
        },
        {
            trigger: ["bye", "goodbye", "see you later"],
            response: ["Goodbye! Have a great day!", "See you soon! Take care!"]
        },
        {
            trigger: ["what is your name", "who are you"],
            response: ["I am your friendly chatbot!", "I am your assistant bot."]
        },
        {
            trigger: ["help", "assist", "support"],
            response: ["How can I assist you today?", "What do you need help with?"]
        },
        {
            trigger: ["thank you", "thanks"],
            response: ["You're welcome!", "Happy to help!"]
        },
    ];

    // Look for matching triggers and return a random response
    for (let item of responses) {
        for (let trigger of item.trigger) {
            if (lowerCaseInput.includes(trigger)) {
                return item.response[Math.floor(Math.random() * item.response.length)];
            }
        }
    }

    return "I'm not sure how to respond to that. Can you ask something else?";
}
