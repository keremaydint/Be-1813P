import { Category } from "../models/categoryModel.js";

export const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.getAll(req.query);
    res.json(categories);
  } catch (error) {
    res.status(400).json({ message: "Failed to retrieve categories." });
  }
};

export const getCategoryById = async (req, res) => {
  try {
    const category = await Category.getById(req.params.id);
    if (!category) {
      return res.status(404).json({ message: "Category not found!" });
    }
    res.json(category);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to retrieve category: " + error.message });
  }
};

export const createCategory = async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(201).json(newCategory);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Failed to create category: " + error.message });
    // res.status(400).json({ message: "createCategory kısmında hata!" });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const { name, description } = req.body;
    const updatedCategory = await Category.update(req.params.id, {
      name,
      description,
    });
    res.status(200).json(updatedCategory);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Failed to update category: " + error.message });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    await Category.delete(req.params.id);
    res.status(202).json();
  } catch (error) {
    res
      .status(400)
      .json({ message: "Failed to delete category: " + error.message });
  }
};
