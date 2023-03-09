import { MysqlDatabase } from "../mysql.database";
import { DataTypes } from "sequelize";

export default MysqlDatabase.getInstance().createModel('comments', {
    commentid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    author: {
        type: DataTypes.STRING,

    },
    content: { 
      type: DataTypes.STRING,
    },
    postid: { 
      type: DataTypes.INTEGER,
    },
    userid: {
      type: DataTypes.INTEGER,
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