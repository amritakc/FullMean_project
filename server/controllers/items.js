var mongoose = require('mongoose');
var Item = mongoose.model('Item');

module.exports = (function() {
	 return {
	 	show: function(req, res) {
		     Item.find({}, function(err, results) {
		       if(err) {
		         console.log(err);
		       } else {
		         res.json(results);
		       }
		   	})
	 	},
	   create: function(req, res){
	   		// console.log("in create" + req.body.name)
		  	var item = new Item({title:req.body.name, description: req.body.description, user_name:req.body.user_name, friend_name: req.body.friend_name})
		  	item.save(function(err,results){
		  		if(err){
		  			// results = {message: "Name already exists"}
		  			// console.log(err)
		  			// console.log("something went wrong" + results.message)
		  			// res.json(results)
		  			// res(new Error("username must be unique"));
		  		}
		  		else{
		  			console.log("successfully add an item!", item)
		  			res.json(results)
		  		}
		  	 })
	  	  },	 	

 }
})();