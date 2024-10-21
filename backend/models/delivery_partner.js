import { Model } from "sequelize";

export default (sequelize) => {
  class DeliveryPartner extends Model {
    static associate(models) {
      DeliveryPartner.belongsTo(models.User, {
        foreignKey: "user_uuid",
        as: "user",
      });
    }
  }

  // Initialize the model
  DeliveryPartner.init(
    {
      uuid: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      user_uuid: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "users",
          key: "uuid",
        },
      },
      average_rating: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
      },
      profile_image: {
        type: DataTypes.UUID,
        allowNull: true,
      },
      status: {
        type: DataTypes.ENUM("on_delivery", "off_duty", "available"),
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      is_approved: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      approval_time: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      created_by: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "delivery_partners",
          key: "uuid",
        },
      },
      updated_by: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
          model: "delivery_partners",
          key: "uuid",
        },
      },
    },
    {
      sequelize, // Pass the Sequelize instance
      modelName: "DeliveryPartner",
      tableName: "delivery_partners", // Name of the table in the database
      timestamps: true, // Automatically handle created_at and updated_at
      paranoid: true, // Enable soft deletes
      createdAt: "created_at", // Set custom column names if needed
      updatedAt: "updated_at", // Set custom column names if needed
      deletedAt: "deleted_at", // Custom name for deletedAt
    }
  );

  return DeliveryPartner;
};
