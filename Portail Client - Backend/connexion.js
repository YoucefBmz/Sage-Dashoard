const mongoose = require("mongoose");
require("dotenv").config();

const uri =
  "mongodb+srv://YoucefBmz:youcefbmz123@sageportal.hjkoq.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("connected to DB !!!");
  })
  .catch((err) => {
    console.log("there is an error in DB : ...", err);
  });
