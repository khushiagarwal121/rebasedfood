"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Create the restaurant_documents table
    await queryInterface.createTable("restaurant_documents", {
      uuid: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4, // Automatically generate a UUID
      },
      fssai_number: {
        type: Sequelize.STRING, // FSSAI number has 14 digits
        allowNull: false,
      },
      fssai_valid_from: {
        type: Sequelize.DATEONLY, // Only date required
        allowNull: false,
      },
      fssai_valid_to: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      fssai_certificate: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      gst_number: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      gst_certificate: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      pan_number: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false,
      },
      created_by: {
        type: Sequelize.UUID,
        allowNull: true,
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false,
      },
      updated_by: {
        type: Sequelize.UUID,
        allowNull: true,
      },
      is_deleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    // Drop the restaurant_documents table
    await queryInterface.dropTable("restaurant_documents");
  },
};
