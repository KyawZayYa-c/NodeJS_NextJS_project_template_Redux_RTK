const { generateToken } = require('../utils/jwtToken');
const { Msg, MsgError } = require('../utils/responseHelper');

const USERS = [
    { id: '1', name: 'Regular User', email: 'user@gmail.com', password: '123', role: 'user' },
    { id: '2', name: 'Admin User', email: 'admin@gmail.com', password: '123', role: 'admin' },
    { id: '3', name: 'Owner User', email: 'owner@gmail.com', password: '123', role: 'owner' }
];

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const foundUser = USERS.find(u => u.email === email && u.password === password);

        if (!foundUser) {
            return MsgError(res, 'Invalid email or password (Try: user@gmail.com, admin@gmail.com, owner@gmail.com / pass: 123)', 401);
        }

        const token = generateToken(foundUser);

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        Msg(res, 'Login successful', {
            user: {
                id: foundUser.id,
                name: foundUser.name,
                email: foundUser.email,
                role: foundUser.role,
            },
            token,
        }, 200);
    } catch (error) {
        MsgError(res, error.message, 500);
    }
};

const logout = async (req, res) => {
    res.cookie('token', '', {
        httpOnly: true,
        expires: new Date(0),
    });
    Msg(res, 'Logged out successfully', {}, 200);
};

const getMe = async (req, res) => {
    try {
        Msg(res, 'User profile retrieved', { user: req.user }, 200);
    } catch (error) {
        MsgError(res, error.message, 500);
    }
};

module.exports = { login, logout, getMe };