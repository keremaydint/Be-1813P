import knex from "./knex.js";
import { SHOW_DELETED } from "../constants.js";

export const Category = {
  getAll: (query) => {
    const { showDeleted } = query;
    if (showDeleted === SHOW_DELETED.TRUE) {
      return knex("categories");
    } else if (showDeleted === SHOW_DELETED.ONLY_DELETED) {
      return knex("categories").whereNotNull("deleted_at");
    } else {
      return knex("categories").whereNull("deleted_at");
    }
  },

  getById: (id) => {
    return knex("categories").whereNull("deleted_at").where({ id }).first();
  },

  create: (category) => {
    return knex("categories").insert(category).returning("*");
  },

  update: (id, category) => {
    const existingCategory = knex("categories")
      .where({ id })
      .whereNull("deleted_at")
      .first();
    if (!existingCategory) {
      throw new Error("Category not found or is deleted");
    }
    category.updated_at = new Date();
    return knex("categories").where({ id }).update(category).returning("*");
  },

  delete: (id) => {
    return knex("categories")
      .where({ id })
      .update({ deleted_at: knex.fn.now() })
      .returning("*");
  },
};
