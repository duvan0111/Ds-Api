const Post = require('../models/Post')

exports.createPost = (req, res, next) => {
    delete req.body._id
    const post = new Post({
        ...req.body
    })    
    post.save()
        .then(() => res.status(201).json({ message: 'enregistrement effectué' }))
        .catch(error => res.status(400).json({ error }))
}

exports.getAllPost = (req, res, next) => {
    Post.find() 
        .then(posts => res.status(200).json(posts))
        .catch(error => res.status(400).json({ error }))
}

exports.getOnePost = (req, res, next) => {
    Post.findOne({_id: req.params.id})
        .then(post => res.status(200).json(post))
        .catch(error => res.status(400).json({error}))
}

exports.updatePost = (req, res, next) => {
    Post.updateOne({_id: req.params.id}, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({message: 'modification effectué'}))
        .catch(error => res.status(400).json({ error }))
}

exports.deletePost = (req, res, next) => {
    Post.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'suppression effectué'}))
        .catch(error => res.status(400).json({ error }))
}