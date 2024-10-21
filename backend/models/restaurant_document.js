// models/RestaurantDocuments.js
import { Model, DataTypes, fn } from "sequelize"; // Import Model and DataTypes from sequelize
import sequelize from "../config/config.cjs"; // If you are using a separate config.js for Sequelize, use it here

class RestaurantDocument extends Model {}

// Initialize the model
RestaurantDocument.init(
  {
    uuid: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4, // Automatically generate a UUID
    },
    fssai_number: {
      type: DataTypes.STRING(14), // FSSAI number has 14 digits
      allowNull: false,
    },
    fssai_valid_from: {
      type: DataTypes.DATEONLY, // Only date required
      allowNull: false,
    },
    fssai_valid_to: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    fssai_certificate: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    gst_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gst_certificate: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    pan_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.TIMESTAMP,
      defaultValue: fn("CURRENT_TIMESTAMP"),
      allowNull: false,
    },
    created_by: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: "restaurants",
        key: "uuid", // Primary key in the restaurant table
      },
    },
    updated_at: {
      type: DataTypes.TIMESTAMP,
      defaultValue: fn("CURRENT_TIMESTAMP"),
      allowNull: false,
    },
    updated_by: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: "restaurants",
        key: "uuid", // Primary key in the restaurant table
      },
    },
    deleted_at: {
      type: DataTypes.TIMESTAMP,
      defaultValue: fn("CURRENT_TIMESTAMP"),
      allowNull: true,
    },
    // only keeping deleted_at for ease
    // is_deleted: {
    //   type: DataTypes.BOOLEAN,
    //   defaultValue: false,
    // },
  },
  {
    sequelize, // Pass the Sequelize instance
    modelName: "RestaurantDocument",
    tableName: "restaurant_documents",
    paranoid: true, // Enable soft deletes
  }
);

// Define associations
RestaurantDocument.associate = (models) => {
  RestaurantDocument.belongsTo(models.Restaurant, {
    foreignKey: "uuid",
    as: "restaurant",
  });
};

// Export the model
export default RestaurantDocument;
