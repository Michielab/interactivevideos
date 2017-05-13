const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const mediaSchema = new Schema({
questions: [{time: Number, questionId: { type: Schema.Types.ObjectId, ref: 'Question' }}]
});

const Media = mongoose.model("Media", mediaSchema);

module.exports = Media;
