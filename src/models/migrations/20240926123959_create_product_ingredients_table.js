/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = (knex) => {
  return knex.schema.createTable("product_ingredients", (table) => {
    table
      .integer("product_id")
      .references("id")
      .inTable("products")
      .onDelete("CASCADE")
      .notNullable();
    table
      .integer("ingredient_id")
      .references("id")
      .inTable("ingredients")
      .onDelete("CASCADE")
      .notNullable();
    table.primary(["product_id", "ingredient_id"]);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = (knex) => {
  return knex.schema.dropTable("product_ingredients");
};
