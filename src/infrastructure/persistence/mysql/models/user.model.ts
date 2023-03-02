import { MysqlDatabase } from "../mysql.database";
import { DataTypes } from "sequelize";

export default MysqlDatabase.getInstance().createModel('user', {
    userid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'userid'
    },
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    createdAt: {
        type: DataTypes.DATE,
        field: 'created_at'
    },
    updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at'
    }
     
})