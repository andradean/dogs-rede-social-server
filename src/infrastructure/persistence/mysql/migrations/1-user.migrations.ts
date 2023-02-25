import * as Sequelize from 'sequelize';

export default {
    up: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.createTable('user', {
            userid:  {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                field: 'userid'
            },
            username: Sequelize.DataTypes.STRING,
            email: Sequelize.DataTypes.STRING,
            password: Sequelize.DataTypes.STRING,
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
        return queryInterface.dropTable('user');
    }
};