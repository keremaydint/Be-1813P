import { Category } from "../models/categoryModel.js";

export const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.getAll();
    res.json(categories);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Tüm hata mesajlarını aynı formatta yap!!!" });
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
    res.status(400).json({ message: "Status 400 , getCategoryById kısmında" });
  }
};

export const createCategory = async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(400).json({ message: "createCategory kısmında hata!" });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const { name, description } = req.body;
    await Category.update(req.params.id, { name, description });
    res.status(200).json(updateCategory);
  } catch (error) {
    res.status(400).json({ message: "updateCategory kısmında hata!" });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    await Category.delete(req.params.id);
    res.status(202).json();
  } catch (error) {
    res.status(400).json({ message: "deleteCategory kısmında hata!" });
  }
};
