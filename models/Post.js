const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    title: { type: String, required: true},
    content: { type: String, required: true},
    resume: { type: String, required: true},
    published : {type: Boolean}
})

module.exports = mongoose.model('Post', postSchema)