const menu = require("../models/model.js").menu;

function Menu(){
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
  	menu.findAll()
	    .then(function(result){
       	  res.send({isSuccess:true,result:result});
    });
  }
  
}
module.exports = new Menu();