const { Sequelize, Op } = require("sequelize");

var postgres = {
    options : {
        host: "blogdb",
        port: 5432,
        username: "admin",
        password: "root",
        database: "blog",
        dialect: "postgres",
    },
}

const sequelize = new Sequelize(postgres.options);

sequelize.authenticate()
.then(() => {
    console.log('Connection has been established successfully');
})
.catch(err => {
    console.error("unable to connect to the database:", err);
});

const Post = require("./model/Post")(sequelize);
Post.sync();

module.exports = {
    sequelize : sequelize,
    op: Op,
    post: Post
}