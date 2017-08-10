const util = require('../util/util.js');
const shop = require("../models/model.js").shop;

function Shop() {
	this.exec = function(params, req, res) {
		switch(params[1]) {
			case 'findAll':
			    findAll(req, res);
			    break;
			case 'find': 
				findOne(params[2], req, res);
				break;
			default: 
//				util.noFunction(req, res);
				findAll(req, res);
				break;
		}
	}
	
	var findAll = function(req, res) {
		shop.findAll()
	        .then(function(result){
       	    res.send({isSuccess:true,result:result});
        });
	}
	
	var findOne = function(id, req, res) {
		shop.findAll({
             where:{
             id:id
             }
            })
	        .then(function(result){
       	    res.send({isSuccess:true,result:result});
        });
	}
}

module.exports = new Shop();