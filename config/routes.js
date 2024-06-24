const express = require("express");
const router = express.Router();
const UsersCtrl = require("../app/controllers/UsersCtrl");
const studentCtrl = require("../app/controllers/StudentCtrl");

const {
  registerUser,
  authUser,
  allUsers,
} = require("../app/controllers/UsersCtrl");
const { protect } = require("../app/middlewares/authMiddleware");

router.route("/register").post(registerUser).get(protect, allUsers);
router.post("/login", authUser);

router.post("/user", protect, studentCtrl.create);
router.get("/user", protect, studentCtrl.list);

module.exports = router;
