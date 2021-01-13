// importing model framework
const { Schema, model } = require('mongoose');

//importing date util
const dateFormat = require('../utils/dateFormat');

//creating comment schema
const CommentSchema = new Schema({
    writtenBy: {
      type: String
    },
    commentBody: {
      type: String
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  });
  
  const Comment = model('Comment', CommentSchema);
  
  module.exports = Comment;