const mongoose = require("mongoose"),
  Schema = mongoose.Schema

const postSchema = Schema({
  title: {type: String, trim: true},
  body: {type: String, trim: true},
  children: [{type: Schema.Types.ObjectId, ref: 'Post'}]
})

module.exports = mongoose.model('Post', postSchema)