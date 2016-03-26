var items = require('./../controllers/items.js')

module.exports = function(app){
	app.get('/items', function(req, res) {
      	items.show(req,res)
    });
	app.post('/createitem', function(req, res) {
      	items.create(req,res)
    });
};