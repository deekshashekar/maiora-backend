// const { User } = require('../models/User')

// const authenticateUser = function(req, res, next){
//     const token = req.header('x-auth')
//     User.findByToken(token)
//         .then(function (user) {
//             if(user) {
//                 req.user = user
//                 req.token = token
//                 next()
//             } else {
//                 res.status('401').send({ errors: 'token not available'})
//             }
//         })
//         .catch(function (err) {
//             res.status('401').send(err)
//         })
// }

// module.exports = {
//     authenticateUser
// }
