const util = require('../util/util.js');
const project = require("../models/model.js").project;

function Project() {
	this.exec = function(params, req, res) {
		switch(params[1]) {
           case 'findAll':
             findAll(req, res);
             break;
           default: 
//           util.noFunction(req, res);
	         findAll(req, res);
             break;
      }
	}
	
	var findAll = function(req, res) { 
		project.findAll()
	           .then(function(result){
       	       res.send({isSuccess:true,result:result});
        });
	}
		
}

module.exports = new Project();