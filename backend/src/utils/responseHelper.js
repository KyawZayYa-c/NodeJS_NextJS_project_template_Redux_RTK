const Msg = (res, msg = '', result = {}, statusCode = 200) => {
    res.status(statusCode).json({
        success: true,
        message: msg,
        data: result,
    });
};

const MsgError = (res, msg = '', statusCode = 400) => {
    res.status(statusCode).json({
        success: false,
        message: msg,
    });
};

module.exports = { Msg, MsgError };