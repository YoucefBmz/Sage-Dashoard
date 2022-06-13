const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

// DB connection
const db = require("./connexion");

app.use(express.json());

const AuthRoute = require("./Routes/Auth");
const PostsRoutes = require("./Routes/SageProducts");
const AuthorizedUser = require("./middlewares/VerifyToken");

// use midlewares
app.use("/api/user", AuthRoute);
app.use("/dashboard", PostsRoutes);
//app.use("/dashboard", AuthorizedUser, PostsRoutes);

app.listen(8000, () => {
  console.log("the server is up and running!!");
});
