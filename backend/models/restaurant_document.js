import { Model } from "sequelize"; // Import Model and DataTypes from sequelize

export default (sequelize) => {
  class RestaurantDocument extends Model {
    static associate(models) {
      // Define associations
      // Adding associations for created_by and updated_by
      RestaurantDocument.belongsTo(models.User, {
        foreignKey: "created_by", // Foreign key for the creator
        as: "creator", // Alias for the creator
      });

      RestaurantDocument.belongsTo(models.User, {
        foreignKey: "updated_by", // Foreign key for the updater
        as: "updater", // Alias for the updater
      });
    }
  }

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
      created_by: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
          model: "users",
          key: "uuid", // Primary key in the restaurant table
        },
      },
      updated_by: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
          model: "users",
          key: "uuid", // Primary key in the restaurant table
        },
      },
    },
    {
      sequelize, // Pass the Sequelize instance
      modelName: "RestaurantDocument",
      tableName: "restaurant_documents",
      paranoid: true, // Enable soft deletes
      createdAt: "created_at", // Set custom column names if needed
      updatedAt: "updated_at", // Set custom column names if needed
      deletedAt: "deleted_at", // Custom name for deletedAt
    }
  );

  return RestaurantDocument;
};
