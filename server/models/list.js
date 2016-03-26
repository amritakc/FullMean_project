var mongoose = require('mongoose');

var ListSchema = new mongoose.Schema({
  name: String,
  title: String,
  description: String,
  created_at: {type: Date, default: new Date}
});

mongoose.model('List', ListSchema);