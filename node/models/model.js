const Sequelize=require("sequelize");
const sequelize=require("../connect.js");

var menu = sequelize.define('menu', {
	id: {type: Sequelize.UUIDV4, primaryKey: true, defaultValue: Sequelize.UUIDV4},
	menuName: Sequelize.STRING
},{
	timestamps: false,
});

var shop = sequelize.define('shop', {
	id: {type: Sequelize.UUIDV4, primaryKey: true, defaultValue: Sequelize.UUIDV4},
	name: Sequelize.STRING,
	describe: Sequelize.STRING,
	img: Sequelize.STRING,
	video: Sequelize.STRING,
	projectsTitle: Sequelize.STRING,
	projectsDescribe: Sequelize.STRING
},{
	timestamps: false,
})

var project = sequelize.define('project', {
	id: {type: Sequelize.UUIDV4, primaryKey: true, defaultValue: Sequelize.UUIDV4},
	title: Sequelize.STRING,
	subtitle: Sequelize.STRING,
	bgimg: Sequelize.STRING
},{
	timestamps: false,
})

var people = sequelize.define('people', {
	id: {type: Sequelize.UUIDV4, primaryKey: true, defaultValue: Sequelize.UUIDV4},
	title: Sequelize.STRING,
	name: Sequelize.STRING,
	describe: Sequelize.STRING,
	header: Sequelize.STRING,
	bgimg: Sequelize.STRING
},{
	timestamps: false,
})

module.exports = {
	menu: menu,
	shop: shop,
	project: project,
	people: people
};