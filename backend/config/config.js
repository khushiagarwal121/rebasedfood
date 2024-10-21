export default {
  "development": {
    "username": process.env.DB_USER || "postgres",
    "password": process.env.DB_PASSWORD || "root",
    "database": process.env.DB_NAME || "foodDelivery",
    "host": process.env.DB_HOST || "localhost",
    "dialect": "postgres"
  },
  "test": {
    "username": process.env.DB_USERNAME || "postgres",
    "password": process.env.DB_PASSWORD || "root",
    "database": process.env.DB_NAME || "foodDelivery",
    "host": process.env.DB_HOST || "localhost",
    "dialect": "postgres"
  },
  "production": {
    "username": process.env.DB_USERNAME || "postgres",
    "password": process.env.DB_PASSWORD || "root",
    "database": process.env.DB_NAME || "foodDelivery",
    "host": process.env.DB_HOST || "localhost",
    "dialect": "postgres"
  }
};
