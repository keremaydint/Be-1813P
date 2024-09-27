/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = (knex) => {
  return knex.schema.createTable("products", (table) => {
    table.increments("id").primary();
    table
      .integer("category_id")
      .references("id")
      .inTable("categories")
      .onDelete("SET NULL");
    table.string("name").notNullable();
    table.text("description").notNullable();
    table.decimal("price", 10, 2).notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").nullable();
    table.timestamp("deleted_at").nullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = (knex) => {
  return knex.schema.dropTable("products");
};
