import { MysqlDatabase } from "../mysql.database";
import { DataTypes } from "sequelize";

export default MysqlDatabase.getInstance().createModel('photo', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'id'
    },
    userid: {
        type: DataTypes.INTEGER,
        
    },
    author: {
        type: DataTypes.STRING,

    },
    src: { 
      type: DataTypes.STRING,
      field: 'src'
    },
    title: { 
      type: DataTypes.STRING,
      field: 'title'
    },
    idade: {
      type: DataTypes.NUMBER,
      field:'idade'
    },
    peso:{ 
        type: DataTypes.NUMBER,
        field: 'peso'
    },
    createdAt: {
        type: DataTypes.DATE,
        field: 'created_at'
    },
    updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at'
    }
     
})