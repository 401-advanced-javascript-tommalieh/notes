'use strict';

const Notes = require('../lib/notes.js');

jest.spyOn(global.console, 'log');

describe('Notes Module', () => {
  it('Does nothing when execute is invoked with invalid note', () => {
    const createdNote = new Notes();
    createdNote.execute();
    expect(console.log).not.toHaveBeenCalled();
  });

  it('Does nothing when add is invoked with invalid note', () => {
    const createdNote = new Notes();
    createdNote.add();
    expect(console.log).not.toHaveBeenCalled();
  });

  it('Logs note when execute is invoked with valide note', () => {
    const createdNote = new Notes();
    createdNote.execute({payload: 'Hello'});
    expect(console.log).toHaveBeenCalled();
  });

  it('logs the output message when add is invoked with a valid note', () => {
    const createdNote = new Notes();
    createdNote.add({payload: 'Hello'});
    expect(console.log).toHaveBeenCalled();
  });

});



