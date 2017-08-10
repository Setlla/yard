const util = require('../util/util.js');
const people = require("../models/model.js").people;

function People(){
  this.exec = function(params, req, res){
	switch(params[1]) {
      case 'findAll':
        findAll(req, res);
        break;
      default: 
//      util.noFunction(req, res);
        findAll(req, res);
        break;
      }
  }
  
  var findAll = function(req, res) {
  	people.findAll()
	    .then(function(result){
       	  res.send({isSuccess:true,result:result});
    });
  }
}

module.exports = new People();