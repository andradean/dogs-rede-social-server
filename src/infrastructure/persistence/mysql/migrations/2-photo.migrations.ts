import * as Sequelize from 'sequelize';

export default {
    up: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.createTable('photo', {
            photoid:  {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            userid:  {
                type: Sequelize.DataTypes.INTEGER,
            },
            img: Sequelize.DataTypes.STRING,
            name: Sequelize.DataTypes.STRING,
            age: Sequelize.DataTypes.INTEGER,
            weight: Sequelize.DataTypes.INTEGER,
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