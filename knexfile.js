// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

import dotenv from "dotenv";
dotenv.config();

const knexfile = {
  development: {
    client: "pg",
    connection: {
      database: process.env.DB_NAME,
      password: process.env.DB_PASS,
      user: process.env.DB_USER,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
    },
    migrations: {
      directory: "./src/models/migrations",
    },
  },
};

export default knexfile;
