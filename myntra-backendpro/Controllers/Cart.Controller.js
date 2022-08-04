const express = require("express");
const router = express.Router();
const Product = require("../models/Cart.model");

router.post("/", async (req, res) => {
  try {
    const Products = await Product.create(req.body);
    return res.status(200).send(Products);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const Products = await Product.find().lean().exec();
    return res.status(200).send(Products);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});
router.delete("/:id/", async(req, res) => {
    try{
        const Cart = await Product.findByIdAndDelete(req.params.id);
        return res.status(200).send(Users);
    }catch(err){
        return res.status(500).send(err.message);
    }
});

module.exports = router;
