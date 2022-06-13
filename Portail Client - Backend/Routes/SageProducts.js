const router = require("express").Router();
//const ProductModel = require("../Models/ProductModel");
const Product = require("../Models/ProductModel");

// create product ...
router.post("/products", async (req, res) => {
  try {
    const newProduct = await Product.create({
      product_name: req.body.product_name,
      num_serie: req.body.num_serie,
      product_version: req.body.product_version,
      description: req.body.description,
    });
    newProduct.save();
    res.status(200).send(newProduct);
  } catch (error) {}
});

// get all products ...
router.get("/products", async (req, res) => {
  console.log("get products triggered!");
  try {
    //console.log(req.user);
    const products = await Product.find();

    res.status(200).json(products);
  } catch (error) {}
});

// get req ...
router.get("/question", async (req, res) => {
  console.log("get questions triggered!");
});

module.exports = router;
