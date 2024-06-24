const Student = require("../models/Student");

const studentCtrl = {};

studentCtrl.list = (req, res) => {
  Student.find({ user: req.user._id })
    .then((customers) => res.json(customers))
    .catch((err) => res.json(err));
};

studentCtrl.create = (req, res) => {
  const body = req.body;
  const customer = new Student(body);
  customer.user = req.user._id;
  customer
    .save()
    .then((customer) => res.json(customer))
    .catch((err) => res.json(err));
};

// studentCtrl.show = (req, res) => {
//   const id = req.params.id;
//   Student.findOne({
//     user: req.user._id,
//     _id: id,
//   })
//     .then((customer) => {
//       if (!customer) {
//         res.json({});
//       }
//       res.json(customer);
//     })
//     .catch((err) => res.json(err));
// };

// studentCtrl.update = (req, res) => {
//   const id = req.params.id;
//   const body = req.body;
//   Student.findOneAndUpdate(
//     { user: req.user._id, id: id },
//     { $set: body },
//     { new: true, runValidators: true }
//   ).then((customer) => {
//     if (!customer) {
//       res.json({});
//     }
//     res.json(customer);
//   });
//   // .catch(err => res.json(err))
// };

// studentCtrl.destroy = (req, res) => {
//   const id = req.params.id;
//   Student.findOneAndDelete({ user: req.user._id, id: id }).then((customer) => {
//     if (!customer) {
//       res.json({});
//     }
//     res.json(customer);
//   });
//   // .catch(err => res.json(err))
// };

module.exports = studentCtrl;

// const express = require('express')
// const moment = require('moment')
// const router = express.Router()
// const _ = require('lodash')
// const { User } = require('../models/User')
// const { authenticateUser } = require('../middlewares/authentication')

// // localhost:3000/users/register
// router.post('/register', function(req, res){
//     const body = req.body
//     const user = new User(body)
//     user.save()
//         .then(function(user){
//             // res.send(user)
//             // res.send({ _id: user._id, username: user.username, email: user.email })
//             // user.createdAt = moment(user.createdAt, "YYYYMMDD").subtract(60, 'days')
//             res.send(_.pick(user, ['_id', 'username', 'email','createdAt']))
//         })
//         .catch(function(err){
//             res.send(err)
//         })
// })

// // localhost:3000/users/login
// router.post('/login', function(req, res){
//     const body = req.body
//     User.findByCredentials(body.email, body.password)
//         .then(function(user){
//            return user.generateToken()
//         })
//         .then(function(token){
//             // res.setHeader('x-auth', token).send({})
//             res.send({ token })
//         })
//         .catch(function(err){
//             res.send(err)
//         })

// })

// // localhost:3000/users/account
// router.get('/account',  authenticateUser, function(req, res){
//     const { user } = req

//     // user.createdAt = moment(user.createdAt, "YYYYMMDD").subtract(60, 'days')

//     res.send(_.pick(user, ['_id', 'username', 'email', 'createdAt']))
// })

// // localhost:3000/users/logout
// router.delete('/logout', authenticateUser, function(req, res){
//     const { user, token } = req
//     User.findByIdAndUpdate(user._id, { $pull: { tokens: { token: token }}})
//         .then(function(){
//             res.send({notice: 'successfully logged out'})
//         })
//         .catch(function(err){
//             res.send(err)
//         })
// })

// module.exports = {
//     usersRouter: router
// }
