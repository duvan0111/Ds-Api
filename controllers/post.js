const Post = require('../models/Post')
const PostUser = require('../models/PostUser')
// const User = require('../models/User')

exports.createPost = (req, res, next) => {
    // const usersId = req.body.users
    delete req.body._id
    // delete req.body.users

    const post = new Post({
        ...req.body,
        date: new Date()
    })
    post.save()
        .then(() =>{
            // usersId.map((item) => {
            //     PostUser.create({ post : post._id, user: item, date: new Date() })
            // })
            res.status(201).json(post)
        })
        .catch(error => res.status(400).json({ error }))
}

exports.getAllPost = (req, res, next) => {
    Post.find().populate(['category','users'])
        .then(data => {
            res.status(200).json(data)
        })
        .catch(error => res.status(400).json({ error }))
}
exports.getAllPostUser = (req, res, next) => {
    let a = 0
    PostUser.find({post : req.params.id}).populate('user')
        .then(users =>{
            a=1
            console.log(a);
            res.status(200).json(users)
        } )
        .catch(error => res.status(400).json({error}))
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