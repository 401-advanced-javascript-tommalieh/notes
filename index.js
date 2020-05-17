'use strict'

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

let noteInput = new Input();

Notes.execute(noteInput);
Notes.add(noteInput);