'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('satellites', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      serial_number: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      planetId: {
        type: Sequelize.INTEGER,
        references: { model: 'planets', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('satellites');
  }
};
