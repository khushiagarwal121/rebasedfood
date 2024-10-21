const { DataTypes } = require("sequelize");
const sequelize = require("../config/config.cjs");

const DeliveryPartnerDocument = sequelize.define(
  "DeliveryPartnerDocument",
  {
    uuid: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    delivery_partner_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "delivery_partners", // Foreign key reference
        key: "uuid",
      },
    },
    license_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    license_image: {
      type: DataTypes.UUID,
      allowNull: image,
    },
    // license_expiry_date could be added
    vehicle_number: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    vehicle_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    document_type: {
      type: DataTypes.STRING, // Using string for flexibility
      allowNull: false,
      validate: {
        isIn: [["PAN Number", "Aadhar Card"]], // Enum-like validation
      },
    },
    document_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    document_image: {
      type: DataTypes.UUID,
      allowNull: false, // Store file paths or URLs to the document
    },

    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn("CURRENT_TIMESTAMP"), // Automatically set on record creation
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "delivery_partners",
        key: "uuid",
      },
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn("CURRENT_TIMESTAMP"), // Automatically set on record update
      onUpdate: sequelize.fn("CURRENT_TIMESTAMP"),
    },
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "delivery_partners",
        key: "uuid",
      },
    },
    // removing deleted at could be handled through is deleted and updated at
    // deleted_at: {
    //   type: DataTypes.DATE,
    //   allowNull: true, // Soft deletion, only filled when the record is deleted
    // },
    is_deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
  },
  {
    tableName: "delivery_partner_documents", // Name of the table in the database
  }
);

module.exports = DeliveryPartnerDocument;
