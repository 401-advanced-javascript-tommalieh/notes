'use strict'

class Notes {
    constructor() {

    }

    execute(note) {
        if (note) {
            if (note.payload !== true && note.payload !== undefined) {
                console.log(note);
            }
        }
    }

    add(note) {
        if (note){
        if (note.payload !== true && note.payload !== undefined) {
            let outMessage = {
                id: Math.ceil(Math.random() * 10),
                note: note.payload
            }
            console.log('Message:', outMessage)
        }
    }
    }
}

module.exports = Notes;