var noFunction = function(req, res) {
	res.send({isSuccess:false,result:null});
}

module.exports = {
	noFunction: noFunction,
};