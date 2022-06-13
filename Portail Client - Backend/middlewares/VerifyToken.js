const User = require("../Models/UserModel");
const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(500).send("not autherized!!! no token ...");
  } else {
    try {
      const token = authHeader.split(" ")[1];

      // bearer jvfjingjvnfjkovwsdf
      const payload = jwt.verify(token, "secret123");

      // attach the user to the job routes
      console.log(payload);
      req.user = await User.findById(payload._id).select("-password");

      //req.user = { userId: payload.userId, username: payload.username };
      next();
    } catch (err) {
      console.log(err);
      res.send(err);
      throw new Error("not authorized");
    }
  }
};

module.exports = auth;
