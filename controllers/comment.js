const Comment = require('../models/Comment')

exports.createComment = (req, res, next) => {
    delete req.body._id
    const comment = new Comment({
        ...req.body,
        date: new Date()
    })    
    comment.save()
        .then(() => res.status(201).json(comment))
        .catch(error => res.status(400).json({ error }))
}

exports.getAllComment = (req, res, next) => {
    Comment.find({post: req.params.id})
        .then(comments => res.status(200).json(comments))
        .catch(error => res.status(400).json({error}))
}
