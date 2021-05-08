const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
  const tkn = req.header('auth-token')
  if (!tkn) {
    return res.status(401).send('Access Denied')
  }

  try {
    const verify = jwt.verify(tkn, process.env.TOKEN_SECRET)
    req.user = verify
    next()
    return true
  } catch (error) {
    req.status(400).send('Invalid Token')
    return false
  }
}
