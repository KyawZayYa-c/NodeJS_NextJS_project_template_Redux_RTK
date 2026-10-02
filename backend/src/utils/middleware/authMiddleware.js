const { verifyToken } = require('../jwtToken');

const protect = async (req, res, next) => {
    let token = req.cookies?.token || req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ success: false, message: 'Not authorized, no token' });
    }

    try {
        const decoded = verifyToken(token);
        // Default User အချက်အလက်ကို ပြန်ထည့်ပေးခြင်း
        req.user = {
            id: decoded.id,
            name: 'Admin User',
            email: decoded.email,
            role: decoded.role,
            createdAt: new Date().toISOString()
        };
        next();
    } catch (error) {
        res.status(401).json({ success: false, message: 'Not authorized, token failed' });
    }
};

module.exports = { protect };