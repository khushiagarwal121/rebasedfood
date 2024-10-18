"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("user_roles", {
      uuid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      user_uuid: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "users", // The name of the users table
          key: "uuid", // The primary key in the users table
        },
        onDelete: "CASCADE",
      },
      role_uuid: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "roles", // The name of the roles table
          key: "uuid", // The primary key in the roles table
        },
        onDelete: "CASCADE",
      },
      created_by: {
        type: Sequelize.UUID,
        references: {
          model: "users", // The name of the users table
          key: "uuid", // The primary key in the users table
        },
      },
      updated_by: {
        type: Sequelize.UUID,
        references: {
          model: "users", // The name of the users table
          key: "uuid", // The primary key in the users table
        },
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("user_roles");
  },
};
