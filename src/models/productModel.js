import knex from "./knex.js";
import { SHOW_DELETED } from "../constants.js";

export const Product = {
  getAll: (query_string) => {
    const { showDeleted, category } = query_string;
    const query = knex("products");

    if (showDeleted === SHOW_DELETED.FALSE) {
      query.whereNull("deleted_at");
    } else if (showDeleted === SHOW_DELETED.ONLY_DELETED) {
      query.whereNotNull("deleted_at");
    } else if (showDeleted !== SHOW_DELETED.TRUE) {
      query.whereNull("deleted_at");
    }

    if (category) {
      query.where({ category_id: category });
    }
    return query;
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
