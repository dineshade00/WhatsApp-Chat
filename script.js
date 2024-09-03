// Open Profile Modal
function openProfileModal() {
    alert('Profile modal opened.');
}

// Start New Chat
function startNewChat() {
    alert('Starting new chat.');
}

// Open Menu
function openMenu() {
    alert('Menu opened.');
}

// Toggle Search Bar
function toggleSearchBar() {
    alert('Search bar toggled.');
}

// Open Chat
function openChat(friendName) {
    const chatHeader = document.querySelector('.chat-header img');
    const userName = document.querySelector('.chat-header .user-name');
    const chatMessages = document.querySelector('.chat-messages');
    
    chatHeader.src = friendName.toLowerCase().replace(/ /g, '') + '.jpg';
    userName.textContent = friendName;
    chatMessages.innerHTML = ''; // Clear existing messages
    
    // Load new chat messages (example)
    chatMessages.innerHTML += `
        <div class="message received">
            <div class="content">
                Hi! This is ${friendName}.
            </div>
            <div class="timestamp">Now</div>
        </div>`;
}

// Send Message
function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const chatMessages = document.querySelector('.chat-messages');
    
    if (messageInput.value.trim()) {
        chatMessages.innerHTML += `
            <div class="message sent">
                <div class="content">
                    ${messageInput.value}
                </div>
                <div class="timestamp">Now</div>
            </div>`;
        messageInput.value = ''; // Clear the input field
        
        // Scroll to the bottom of the chat
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}

// Open Attachment Options
function openAttachmentOptions() {
    document.getElementById('file-input').click();
}

// Handle File Upload
function handleFileUpload() {
    alert('File uploaded.');
}

// Toggle Emoji Picker
function toggleEmojiPicker() {
    const emojiPicker = document.getElementById('emoji-picker');
    emojiPicker.style.display = emojiPicker.style.display === 'block' ? 'none' : 'block';
}

// Insert emoji into the chat input
document.querySelectorAll('#emoji-picker div').forEach(emoji => {
    emoji.addEventListener('click', (e) => {
        const input = document.getElementById('message-input');
        input.value += e.target.textContent; // Append emoji to input
        document.getElementById('emoji-picker').style.display = 'none'; // Hide emoji picker
    });
});



// Open Camera
function openCamera() {
    const overlay = document.getElementById('camera-overlay');
    const video = document.getElementById('camera-feed');

    overlay.style.display = 'flex';

    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
        })
        .catch(error => {
            alert('Could not access camera: ' + error);
        });
}

// Capture Photo
document.getElementById('capture-button').addEventListener('click', () => {
    const video = document.getElementById('camera-feed');
    const overlay = document.getElementById('camera-overlay');
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    const dataUrl = canvas.toDataURL('image/png');

    // Close the camera overlay
    overlay.style.display = 'none';

    // Optionally, do something with the captured image
    alert('Photo captured! Data URL: ' + dataUrl);
});
