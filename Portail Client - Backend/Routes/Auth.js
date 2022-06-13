const router = require("express").Router();
const User = require("../Models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// routes

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      res.status(404).json("user not found");
    } else {
      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!validPassword) {
        res.status(400).json("wrong password");
      } else {
        const token = jwt.sign({ _id: user._id }, "secret123");
        //res.header("auth-token", token).send(token);
        console.log(req.body);
        res.json({ user: true, user_details: user, status: "ok", token });
      }
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// register :
router.post("/register", async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
      //type: req.body.type,
    });
    // save the user
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json("can't regiter try again :<( ");
  }
});

module.exports = router;
