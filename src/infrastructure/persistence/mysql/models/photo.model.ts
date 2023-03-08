import { MysqlDatabase } from "../mysql.database";
import { DataTypes } from "sequelize";

export default MysqlDatabase.getInstance().createModel('photo', {
    photoid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'photoid'
    },
    userid: {
        type: DataTypes.INTEGER,
        
    },
    img: DataTypes.STRING,
    name: DataTypes.STRING,
    age: DataTypes.NUMBER,
    weight: DataTypes.NUMBER,
    createdAt: {
        type: DataTypes.DATE,
        field: 'created_at'
    },
    updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at'
    }
     
})