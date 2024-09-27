import knex from "./knex";

export const Product = {
  getAll: () => {
    return knex("products").whereNull("deleted_at");
  },
  getById: (id) => {
    return knex("products").whereNull("deleted_at").where({ id });
  },
  //create
};
