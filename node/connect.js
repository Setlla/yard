const Sequelize=require("sequelize");

var sequelize = new Sequelize('yard', 'root', '292211', {
	host: 'localhost',
	dialect: 'mysql',
	pool: {
        max: 5,
        min: 0,
        idle: 30000
    }
});

module.exports=sequelize;