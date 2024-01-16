
const { v4: uuidv4 } = require('uuid');
const withRequestID = (req) => {
    req.http.headers.set('x-request-id', uuidv4());
}

module.exports = {
    withRequestID
}