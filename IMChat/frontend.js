// This file handles the frontend chat logic for the website
// It sends user messages to the backend and displays responses

document.addEventListener('DOMContentLoaded', () => {
  const messagesDiv = document.getElementById('messages');
  const input = document.getElementById('message-input');
  const sendBtn = document.getElementById('send-button');
  const clearBtn = document.getElementById('clear-button');
  const statusDiv = document.getElementById('status');

  function appendMessage(sender, text) {
    const msg = document.createElement('div');
    msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
    messagesDiv.appendChild(msg);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
  }

  async function sendMessage() {
    const userText = input.value.trim();
    if (!userText) return;
    appendMessage('You', userText);
    input.value = '';
    statusDiv.textContent = 'Thinking...';
    try {
      // Send message to backend (to be implemented)
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userText })
      });
      const data = await response.json();
      appendMessage('Gemini', data.reply);
      statusDiv.textContent = '';
    } catch (err) {
      appendMessage('Error', 'Failed to get response.');
      statusDiv.textContent = '';
    }
  }

  sendBtn.addEventListener('click', sendMessage);
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') sendMessage();
  });
  clearBtn.addEventListener('click', () => {
    messagesDiv.innerHTML = '';
  });
});
