var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var cariSchema = new Schema({
  title: String,
  message: [
    {
    type: String,
    date: {
      type: Date,
      default: Date.now,
    }
    }
  ],
  date: 
  {
    type: Date,
    default: Date.now
  },
  createdAt: String,
});

var Cari = mongoose.model('caris',cariSchema);

module.exports = Cari;