import { Product } from "../models/productModel.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.getAll();
    res.json(products);
  } catch (error) {
    res.status(400).json({ message: "Failed to retrieve products." });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.getById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found!" });
    }
    res.json(product);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to retrieve product: " + error.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Failed to create product: " + error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { category_id, name, description, price } = req.body;
    const updatedProduct = await Product.update(req.params.id, {
      category_id,
      name,
      description,
      price,
    });
    res.status(200).json(updatedProduct);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Failed to update product: " + error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    await Product.delete(req.params.id);
    res.status(202).json();
  } catch (error) {
    res
      .status(400)
      .json({ message: "Failed to delete product " + error.message });
  }
};
