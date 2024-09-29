import knex from "./knex.js";

export const ProductIngredient = {
  getAll: () => {
    return knex("product_ingredients");
  },
  getByProductId: (productId) => {
    return knex("product_ingredients").where({ product_id: productId });
  },
  getByIngredientId: (ingredientId) => {
    return knex("product_ingredients").where({ ingredient_id: ingredientId });
  },
  create: (productId, ingredientId) => {
    return knex("product_ingredients").insert({
      product_id: productId,
      ingredient_id: ingredientId,
    });
  },
  delete: (productId, ingredientId) => {
    return knex("product_ingredients")
      .where({ product_id: productId, ingredient_id: ingredientId })
      .del();
  },
};
