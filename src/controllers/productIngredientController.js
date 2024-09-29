import { ProductIngredient } from "../models/productIngredientModel.js";

export const getAllProductIngredients = async (req, res) => {
  try {
    const productIngredients = await ProductIngredient.getAll();
    res.status(200).json(productIngredients);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Failed to retrieve Product Ingredients." });
    // res.status(500).json({ message: 'An error occurred', error });
  }
};

export const getProductIngredientsByProductId = async (req, res) => {
  const { productId } = req.params;
  try {
    const ingredients = await ProductIngredient.getByProductId(productId);
    if (ingredients.length === 0) {
      return res
        .status(404)
        .json({ message: "No ingredients found for this product." });
    }
    res.status(200).json(ingredients);
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error });
  }
};

export const getProductIngredientsByIngredientId = async (req, res) => {
  const { ingredientId } = req.params; // ingredientId URL'den alınır
  try {
    const products = await ProductIngredient.getByIngredientId(ingredientId);
    if (products.length === 0) {
      return res
        .status(404)
        .json({ message: "No products found for this ingredient." });
    }
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error });
  }
};

export const createProductIngredient = async (req, res) => {
  const { product_id, ingredient_id } = req.body;
  try {
    await ProductIngredient.create(product_id, ingredient_id);
    res.status(201).json({
      message: "Product ingredient association created successfully.",
    });
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error });
  }
};

export const deleteProductIngredient = async (req, res) => {
  const { productId, ingredientId } = req.params;
  try {
    const deletedRows = await ProductIngredient.delete(productId, ingredientId);
    if (deletedRows === 0) {
      return res
        .status(404)
        .json({ message: "No association found to delete." });
    }
    res.status(200).json({
      message: "Product ingredient association deleted successfully.",
    });
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error });
  }
};
