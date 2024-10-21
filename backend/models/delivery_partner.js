const { DataTypes } = require("sequelize");
const sequelize = require("../config/config.cjs");

const DeliveryPartner = sequelize.define(
  "DeliveryPartner",
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
      // removing cascade as we are soft deleting records so no need
      // onUpdate: "CASCADE",
      // onDelete: "CASCADE",
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
    // removing as could be fetched in real time
    // total_deliveries: {
    //   type: DataTypes.INTEGER,
    //   allowNull: true,
    //   defaultValue: 0,
    // },

    // removing joining date could be fetched from created at
    // joining_date: {
    //   type: DataTypes.DATE,
    //   allowNull: false,
    //   defaultValue: sequelize.fn("CURRENT_TIMESTAMP"), // Automatically set on record creation
    // },
    is_approved: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    approval_time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn("CURRENT_TIMESTAMP"), // Automatically set on record creation
    },
    created_by: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "delivery_partners",
        key: "uuid",
      },
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn("CURRENT_TIMESTAMP"), // Automatically set on record update
      onUpdate: sequelize.fn("CURRENT_TIMESTAMP"), // Update this field when the record is updated
    },
    updated_by: {
      type: DataTypes.UUID,
      references: {
        model: "delivery_partners",
        key: "uuid",
      },
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true, // Initially null, only filled when the record is soft-deleted
    },
    is_deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
  },
  {
    tableName: "delivery_partners", // Name of the table in the database
  }
);

module.exports = DeliveryPartner;
