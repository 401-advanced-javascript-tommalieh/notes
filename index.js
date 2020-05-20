'use strict';

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

let noteInput = new Input();
let createdNote = new Notes(noteInput);

if (noteInput.action === 'add') {
  createdNote.add(noteInput);
}

else if (noteInput.action === 'list') {
  createdNote.list(noteInput);
}

else if (noteInput.action === 'delete') {
  createdNote.delete(noteInput);
}

createdNote.execute(noteInput);