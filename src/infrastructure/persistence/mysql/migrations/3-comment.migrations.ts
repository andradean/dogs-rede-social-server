import * as Sequelize from 'sequelize';

export default {
    up: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.createTable('comments', {
            commentid:  {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            author: Sequelize.DataTypes.STRING,
            content: Sequelize.DataTypes.STRING,
            postid: Sequelize.DataTypes.INTEGER,
            userid: Sequelize.DataTypes.INTEGER,
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
        return queryInterface.dropTable('comments');
    }
};