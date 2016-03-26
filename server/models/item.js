var mongoose = require('mongoose');

var ItemSchema = new mongoose.Schema({
  title: String,
  description: String,
  user_name: String,
  friend_name: String,
  created_at: {type: Date, default: new Date}
});

mongoose.model('Item', ItemSchema);