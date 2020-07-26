const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    const token = req.headers.authorization
    const secret = process.env.JWT_SECRET || 'this is a secret'

    if (token) {
        jwt.verify(token, secret, (err, decodedToken) => {
            if(err) {
                res.status(401).json({you: 'cant touch this'})
            } else {
                req.jwt = decodedToken
                next()
            }
        })
        
    } else {
        res.status(401).json({you: 'you shall not pass'})
    }
}