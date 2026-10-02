const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const { protect } = require('./utils/middleware/authMiddleware');
const { login, logout, getMe } = require('./controllers/authController');

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:3000', // Next.js Frontend URL
    credentials: true
}));

app.get('/', (req, res) => {
    res.send('API is running...');
});

// Auth Routes
app.post('/api/auth/login', login);
app.post('/api/auth/logout', protect, logout);
app.get('/api/auth/me', protect, getMe);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));