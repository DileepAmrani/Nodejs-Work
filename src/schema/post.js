const mongoose = require('mongoose');

// mongoose schema
const postSchema = mongoose.Schema({
    title: String,
    description: String,
    auther: String,
    status: { type: String, required: true }
});
// mongoose model
const post = mongoose.model('posts', postSchema);
module.exports = post;