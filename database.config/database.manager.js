//IMPORT SEQUELIZE
const Sequelize = require("sequelize");
//IMPORT SEQUELIZE CONNECTION
const sequelizeConnection = require('../database.config/db.connection.js');

//IMPORT MODELS
const UserModel = require("../model/user.model");
const PostModel = require("../model/post.model");

//INITIALIZE MODELS
const User = UserModel (sequelizeConnection, Sequelize);
const Post = PostModel (sequelizeConnection, Sequelize);

//CREATE RELATIONS BETWEEN MODELS
User.hasMany(Post, { as: 'posts', foreignKey: 'idUser' });
Post.belongsTo( User, { as : 'user', foreignKey: 'idUser' });

//GROUP MODELS
const models = {
  User: User,
  Post: Post,
};


/**
 * Create object to manage the models and database
 */
const db = {
    ...models,
    sequelizeConnection
};
  
// EXPORT CONSTANT DB
module.exports = db;
