import express from "express";
import {
  getAllProductIngredients,
  getProductIngredientsByProductId,
  getProductIngredientsByIngredientId,
  createProductIngredient,
  deleteProductIngredient,
} from "../controllers/productIngredientController.js";

const router = express.Router();

router.get("/", getAllProductIngredients);
router.get("/product/:productId", getProductIngredientsByProductId);
router.get("/ingredient/:ingredientId", getProductIngredientsByIngredientId);
router.post("/", createProductIngredient);
router.delete(
  "/product/:productId/ingredient/:ingredientId",
  deleteProductIngredient
);

export default router;
