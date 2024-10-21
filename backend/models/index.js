import { Sequelize, DataTypes } from "sequelize";
<<<<<<< HEAD
import User from "./user.js";
import Role from "./role.js";
import UserRole from "./user_role.js";
import RefreshToken from "./refresh_token.js";
import Address from "./address.js";
import Restaurant from "./restaurant.js";
import RestaurantOperationalStatus from "./restaurant_operational_status.js";
import DeliveryPartnerDocument from "./delivery_partner_document.js";
import RestaurantDocument from "./restaurant_document.js";
import DeliveryPartner from "./delivery_partner.js";
=======

import RestaurantDocument from "./restaurant_document.js";
import DeliveryPartner from "./delivery_partner.js";
import DeliveryPartnerDocument from "./delivery_partner_document.js";
>>>>>>> 1d036a1 (feat: create models for restaurant documents, delivery partnerand delivery partner documents)

// connect to local database
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
    logging: false,
  }
);

const db = {
  Sequelize,
  sequelize,
};

db.User = User(sequelize, DataTypes);
db.Role = Role(sequelize, DataTypes);
db.UserRole = UserRole(sequelize, DataTypes);
db.RefreshToken = RefreshToken(sequelize, DataTypes);
db.Address = Address(sequelize, DataTypes);
db.Restaurant = Restaurant(sequelize, DataTypes);
db.RestaurantOperationalStatus = RestaurantOperationalStatus(
  sequelize,
  DataTypes
);
db.RestaurantDocument = RestaurantDocument(sequelize, DataTypes);
db.DeliveryPartnerDocument = DeliveryPartnerDocument(sequelize, DataTypes);
db.DeliveryPartner = DeliveryPartner(sequelize, DataTypes);

db.User.associate(db);
db.Role.associate(db);
db.Address.associate(db);
db.RefreshToken.associate(db);
db.RestaurantOperationalStatus.associate(db);
db.Restaurant.associate(db);
db.RestaurantDocument.associate(db);
db.DeliveryPartner.associate(db);
db.DeliveryPartnerDocument.associate(db);

// Relationship between user and address
// db.User.hasMany(models.Address, {
//   foreignKey: "user_uuid",
//   as: "addresses",
// });
// db.Address.belongsTo(models.User, {
//   foreignKey: "user_uuid",
//   as: "user",
// });
// db.Address.belongsTo(models.User, {
//   foreignKey: "created_by",
//   as: "creator",
// });
// db.Address.belongsTo(models.User, {
//   foreignKey: "updated_by",
//   as: "updater",
// });

// //relationship between user and role
// db.Role.belongsToMany(db.User, {
//   through: db.UserRole,
//   foreignKey: "role_uuid",
//   otherkey: "user_uuid",
// });
// db.User.belongsToMany(db.Role, {
//   through: db.UserRole,
//   foreignKey: "user_uuid",
//   otherkey: "role_uuid",
// });

// //relationship between refresh token and user
// db.RefreshToken.belongsTo(db.User, {
//   foreignKey: "user_uuid",
// });
// db.RefreshToken.belongsTo(db.User, {
//   foreignKey: "created_by",
//   as: "creator",
// });
// db.RefreshToken.belongsTo(db.User, {
//   foreignKey: "updated_by",
//   as: "updater",
// });

// // Relationship between restaurant and address
// db.Address.belongsTo(models.Restaurant, {
//   foreignKey: "restaurant_uuid",
//   as: "restaurant",
// });

// // Relationship between user and restaurant
// db.User.hasMany(models.Restaurant, {
//   foreignKey: "owner_uuid",
//   as: "restaurants",
// });
// db.Restaurant.belongsTo(models.User, {
//   foreignKey: "owner_uuid",
//   as: "owner",
// });
// db.Restaurant.belongsTo(models.User, {
//   foreignKey: "created_by",
//   as: "creator",
// });
// db.Restaurant.belongsTo(models.User, {
//   foreignKey: "updated_by",
//   as: "updater",
// });

// // Relationship between restaurant and restaurant operational status
// db.Restaurant.belongsTo(models.RestaurantOperationalStatus, {
//   foreignKey: "operational_status_uuid",
//   as: "operationalStatus",
// });

// // Relationship between restaurant and restaurant document
// db.Restaurant.belongsTo(models.RestaurantDocument, {
//   foreignKey: "restaurant_document_uuid",
//   as: "restaurantDocument",
// });

// // Relationship between user and restaurant operational status
// db.RestaurantOperationalStatus.belongsTo(models.User, {
//   foreignKey: "created_by",
//   as: "creator",
// });
// db.RestaurantOperationalStatus.belongsTo(models.User, {
//   foreignKey: "updated_by",
//   as: "updater",
// });
// List of models
const models = [RestaurantDocument, DeliveryPartner, DeliveryPartnerDocument];

// Dynamically add models to the db object
models.forEach((model) => {
  db[model.name] = model(sequelize, DataTypes);
});

// Define relationships here
// Assuming RestaurantDocument references Restaurant
db.RestaurantDocument.associate(db);
db.DeliveryPartner.associate(db); // Ensure you define this in your DeliveryPartner model
db.DeliveryPartnerDocument.associate(db); // Ensure you define this in your DeliveryPartnerDocument model

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export default { db, connectDB };
