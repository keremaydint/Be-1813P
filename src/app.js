import express from "express";
import dotenv from "dotenv";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/categories", categoryRoutes);
app.use("/products", productRoutes);

app.listen(port, () => {
  console.log("Sunucu Ayakta");
});
