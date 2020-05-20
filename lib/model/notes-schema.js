'use-strict';

const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
  text: {type: 'string', required:true},
  category: {type: 'string', required:true},
});

module.exports = mongoose.model('noteSchema', NoteSchema);