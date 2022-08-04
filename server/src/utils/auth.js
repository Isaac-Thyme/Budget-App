const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;
const expiration = '2h';

module.exports = {
    signToken: function ({ username, _id }) {
        const payload = { username, _id }

        let token = jwt.sign({ data: payload }, SECRET, { expiresIn: expiration });
        return token;
    }
}