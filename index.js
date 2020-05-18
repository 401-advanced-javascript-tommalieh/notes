'use strict'

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

let noteInput = new Input();
let createdNote = new Notes(noteInput);

createdNote.execute(noteInput);
createdNote.add(noteInput);