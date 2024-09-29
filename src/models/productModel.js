import knex from "./knex.js";

export const Product = {
  getAll: () => {
    return knex("products").whereNull("deleted_at");
  },

  getById: (id) => {
    return knex("products").whereNull("deleted_at").where({ id }).first();
  },

  create: (product) => {
    return knex("products").insert(product).returning("*");
  },

  update: (id, product) => {
    const existingProduct = knex("products")
      .where({ id })
      .whereNull("deleted_at")
      .first();
    if (!existingProduct) {
      throw new Error("Product not found or is deleted");
    }
    product.updated_at = new Date();
    return knex("products").where({ id }).update(product).returning("*");
  },

  delete: (id) => {
    return knex("products")
      .where({ id })
      .update({ deleted_at: knex.fn.now() })
      .returning("*");
  },
};
