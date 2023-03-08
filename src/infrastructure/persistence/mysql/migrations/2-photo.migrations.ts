import * as Sequelize from 'sequelize';

export default {
    up: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.createTable('photo', {
            id:  {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            userid:  {
                type: Sequelize.DataTypes.INTEGER,
            },
            src: Sequelize.DataTypes.STRING,
            title: Sequelize.DataTypes.STRING,
            idade: Sequelize.DataTypes.INTEGER,
            peso: Sequelize.DataTypes.INTEGER,
            createdAt: {
                type: Sequelize.DataTypes.DATE,
                field: 'created_at'
            },
            updatedAt: {
                type: Sequelize.DataTypes.DATE,
                field: 'updated_at'
            }
        })
    },
    down: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.dropTable('photo');
    }
};