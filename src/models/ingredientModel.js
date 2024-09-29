import knex from "./knex.js";

export const Ingredient = {
  getAll: () => {
    return knex("ingredients").whereNull("deleted_at");
  },

  getById: (id) => {
    return knex("ingredients").whereNull("deleted_at").where({ id }).first();
  },

  create: (ingredient) => {
    return knex("ingredients").insert(ingredient).returning("*");
  },

  update: (id, ingredient) => {
    const existingIngredient = knex("ingredients")
      .where({ id })
      .whereNull("deleted_at")
      .first();
    if (!existingIngredient) {
      throw new Error("Ingredient not found or is deleted");
    }
    ingredient.updated_at = new Date();
    return knex("ingredients").where({ id }).update(ingredient).returning("*");
  },

  delete: (id) => {
    return knex("ingredients")
      .where({ id })
      .update({ deleted_at: knex.fn.now() })
      .returning("*");
  },
};
