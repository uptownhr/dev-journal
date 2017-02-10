const mongoose = require("mongoose"),
  Schema = mongoose.Schema

const postSchema = Schema({
  title: {type: String, trim: true, default: ""},
  body: {type: String, trim: true, default: ''},
  children: [{type: Schema.Types.ObjectId, ref: 'Post'}],
  parent_id: {type: Schema.Types.ObjectId, ref: 'Post'}
})

module.exports = mongoose.model('Post', postSchema)