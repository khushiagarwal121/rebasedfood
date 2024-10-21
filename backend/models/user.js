import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.belongsToMany(models.Role, {
        through: models.UserRole,
        foreignKey: "user_uuid", // Foreign key in UserRole
        otherKey: "role_uuid", // Other key in UserRole
      });
      User.hasMany(models.Address, {
        foreignKey: "user_uuid", // Foreign key in Address table
        as: "addresses", // Alias for the relationship
      });
      User.hasMany(models.Restaurant, {
        foreignKey: "owner_uuid", // Foreign key in Restaurant table
        as: "restaurants", // Alias for the relationship
      });
    }
  }
  User.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      country_code: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          is: /^\+\d{1,4}$/, // Validates that country code starts with + and has 1-4 digits
        },
      },
      phone_number: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: true,
        validate: {
          is: /^[0-9]{7,15}$/, // Only numbers, 7 to 15 digits for the local part
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      date_of_birth: {
        type: DataTypes.DATEONLY,
      },
      password_reset_token: {
        type: DataTypes.STRING,
        allowNull: true, // Allow null for users without a reset token
      },
      password_reset_token_expiry: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      password_updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "User",
      tableName: "users",
      timestamps: true, // Automatically adds createdAt and updatedAt
      createdAt: "created_at", // Custom name for createdAt
      updatedAt: "updated_at", // Custom name for updatedAt
      paranoid: true, // enables soft deletion with deletedAt
      deletedAt: "deleted_at", // custom name for deletedAt
    }
  );
  return User;
};
