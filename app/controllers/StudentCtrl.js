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
