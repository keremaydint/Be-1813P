import { Ingredient } from "../models/ingredientModel.js";

export const getAllIngredients = async (req, res) => {
  try {
    const ingredients = await Ingredient.getAll();
    res.json(ingredients);
  } catch (error) {
    res.status(400).json({ message: "Failed to retrieve ingredients." });
  }
};

export const getIngredientById = async (req, res) => {
  try {
    const ingredient = await Ingredient.getById(req.params.id);
    if (!ingredient) {
      return res.status(404).json({ message: "Ingredient not found!" });
    }
    res.json(ingredient);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to retrieve ingredient: " + error.message });
  }
};

export const createIngredient = async (req, res) => {
  try {
    const newIngredient = await Ingredient.create(req.body);
    res.status(201).json(newIngredient);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Failed to create ingredient: " + error.message });
  }
};

export const updateIngredient = async (req, res) => {
  try {
    const { name, is_allergen } = req.body;
    const updatedIngredient = await Ingredient.update(req.params.id, {
      name,
      is_allergen,
    });
    res.status(200).json(updatedIngredient);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Failed to update ingredient: " + error.message });
  }
};

export const deleteIngredient = async (req, res) => {
  try {
    await Ingredient.delete(req.params.id);
    res.status(202).json();
  } catch (error) {
    res
      .status(400)
      .json({ message: "Failed to delete ingredient " + error.message });
  }
};
