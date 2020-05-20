'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
const NoteSchema = require('../lib/model/notes-schema');
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

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
    if (note) {
      if (note.payload !== true && note.payload !== undefined) {
        let outMessage = {
          // id: Math.ceil(Math.random() * 10),
          text: note.payload,
          category: note.categoryValue,
        };
        console.log('Message:', outMessage);

        const mongo = async (newNote) => {

          const savedNote = new NoteSchema(newNote);
          await savedNote.save();
          console.log('savedNote', savedNote);
          const allNotes = await NoteSchema.find({});
          console.log('allNotes', allNotes);
          // const oneNote = await NoteSchema.findById(savedNote.id);
          // console.log('oneNote', oneNote);
          // console.log('oneNoteId', oneNote._id);
          mongoose.disconnect();

        };
        mongo(outMessage);

      }
    }
  }

  list(note) {
    if (note) {
      if (note.category) {
        const mongo = async (newNote) => {
          const noteByCategory = await NoteSchema.find({ category: newNote.categoryValue });
          console.log(`Your ${newNote.categoryValue} category notes`, noteByCategory);
          mongoose.disconnect();

        };
        mongo(note);

      }
      else {
        const mongo = async (newNote) => {
          const allNotes = await NoteSchema.find({});
          console.log('All your notes', allNotes);
          mongoose.disconnect();
        };
        mongo(note);

      }
    }
  }

  delete(note){

    if(note){
      if (note.deleteID){
        const mongo = async (newNote) => {
          console.log(`Deleted Note`, newNote.deleteID);
          await NoteSchema.deleteOne({ _id: newNote.deleteID });
          mongoose.disconnect();

        };
        mongo(note);
      }
    }

  }
}

module.exports = Notes;
