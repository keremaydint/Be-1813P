import express from "express";
import dotenv from "dotenv";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import ingredientRoutes from "./routes/ingredientRoutes.js";
import productIngredientRoutes from "./routes/productIngredientRoutes.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/categories", categoryRoutes);
app.use("/products", productRoutes);
app.use("/ingredients", ingredientRoutes);
app.use("/productIngredients", productIngredientRoutes);

app.listen(port, () => {
  console.log("Sunucu Ayakta");
});
