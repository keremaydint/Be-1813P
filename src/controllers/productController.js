import { Product } from "../models/productModel";

export const getProducts = async (req, res) => {
  const products = await Product.getAll();
  res.json(products);
};

export const getProductById = async (req, res) => {
  const product = await Product.getById(req.params.id);
  if (!product) {
    res
      .status(404)
      .json({ detail: "hataa, tüm hataları aynı biçimde gönder!" });
  }
  res.json(product);
};
