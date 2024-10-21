"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("restaurants", {
      uuid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      owner_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "users",
          key: "uuid",
        },
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      image: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: true,
      },
      is_pure_veg: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      avg_rating: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: true,
      },
      total_review: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      operating_hour: {
        type: Sequelize.JSONB,
        allowNull: true,
      },
      is_open: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      is_verified: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
      temporarily_closed: {
        type: Sequelize.JSONB,
        allowNull: true,
      },
      operational_status_uuid: {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: "restaurant_operational_statuses",
          key: "uuid",
        },
      },
      restaurant_document_uuid: {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: "restaurant_documents",
          key: "uuid",
        },
      },
      created_by: {
        type: Sequelize.UUID,
      },
      updated_by: {
        type: Sequelize.UUID,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("restaurants");
  },
};
