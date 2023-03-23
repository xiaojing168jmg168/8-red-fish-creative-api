import express from 'express';
import Product from '../models/productModel.js';

const productRouter = express.Router();

productRouter.get('/', async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

productRouter.get('/slug/:slug', async (req, res) => {
    try {
  const product = await Product.findOne({ slug: { $eq: req.params.slug } });
  if (product) {
    res.send(product);
  }} catch (error) {
    res.status(404).send({ message: 'Product Not Found' });
  }
});
productRouter.get('/:id', async (req, res) => {
    try{
  const product = await Product.findById(req.params.id);
  if (product) {
    res.send(product);
  }} catch(error) {
    res.status(404).send({ message: 'Product Not Found' });
  }
});

export default productRouter;