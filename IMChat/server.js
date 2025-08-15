// Express backend for Gemini AI chatbot website
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname)); // Serve static files (frontend)

const API_KEY = process.env.GEMINI_API_KEY || 'api';
const genAI = new GoogleGenerativeAI(API_KEY);

app.post('/api/chat', async (req, res) => {
  const userMessage = req.body.message;
  if (!userMessage) {
    return res.status(400).json({ reply: 'No message provided.' });
  }
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
    const chat = await model.startChat();
    const result = await chat.sendMessage(userMessage);
    res.json({ reply: result.response.text() });
  } catch (err) {
    res.status(500).json({ reply: 'Error: ' + err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

