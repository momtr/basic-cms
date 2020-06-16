
/**
 * @description sends back an error message to the client
 * @param {Object} res a reference to the reponse object 
 * @param {String} err the error message 
 * @param {Number} statusCode optional (int) the status code 
 */
function sendError(res, err, errorCode, statusCode) {
    res.status(statusCode || 500);
    res.json({
        status: 'error',
        message: `🔴 ${err || 'Internal Server Error'}`,
        errorCode: errorCode || false
    });
}

/**
 * @description sends back a success message to the client
 * @param {Object} res a reference to the reponse object 
 * @param {String} message the message
 * @param {Object} data (optional) some data 
 */
function sendSuccess(res, message, data) {
    res.status(200);
    res.json({
        status: 'success',
        message: `🟢 ${message || 'Success!'}`,
        data: data || false
    });
}

module.exports = { sendError, sendSuccess };