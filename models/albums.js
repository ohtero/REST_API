const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const albumSchema = new Schema ({
  artist: {
    type: String,
    required: true
  },
  albumName: {
    type: String,
    required: true
  },
  releaseYear: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Album', albumSchema);