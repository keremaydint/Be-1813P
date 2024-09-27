import knex from "./knex.js";

export const Category = {
  getAll: () => {
    return knex("categories").whereNull("deleted_at");
  },

  getById: (id) => {
    return knex("categories").whereNull("deleted_at").where({ id }).first();
  },

  create: (category) => {
    return knex("categories").insert(category).returning("*");
  },

  // update ederken silinmiş mi diye kontrol et!!!
  update: (id, category) => {
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
