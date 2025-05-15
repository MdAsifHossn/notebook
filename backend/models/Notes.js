const mongoose = require("mongoose");

const notesSchema = new Schema({
  title: {
    type: string,
    required: true,
  },
  description: {
    type: string,
    required: true,
  },
  tag: {
    type: string,
  },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("notes", notesSchema);
