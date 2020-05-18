'use strict';
const minimist = require('minimist');
const Input = require('../lib/input.js');
jest.mock('minimist');
minimist.mockImplementation(() => {
  return {
    add: 'Hello there ',
  };
});

describe('valid()', () => {
  it('respects a proper object', () => {
    const noteInput = new Input();
    console.log(noteInput);
    expect(noteInput.valid(noteInput.argvProp)).toBeTruthy();
  });

  it('reject invalid object', () => {
    const noteInput = new Input();
    //   console.log(noteInput);

    //   console.log(noteInput.argvProp);
    noteInput.argvProp = undefined;
    //   console.log(noteInput.argvProp);
    //   console.log(noteInput);

    expect(noteInput.valid(undefined)).toBeFalsy();
  });
});
