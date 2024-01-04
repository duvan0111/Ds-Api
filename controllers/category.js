const Category = require('../models/Category')

exports.createCategory = (req, res, next) => {
    delete req.body._id
    const category = new Category({
        ...req.body
    })    
    category.save()
        .then(() => res.status(201).json(category))
        .catch(error => res.status(400).json({ error }))
}

exports.getAllCategory = (req, res, next) => {
    Category.find() 
        .then(Categorys => res.status(200).json(Categorys))
        .catch(error => res.status(400).json({ error }))
}

exports.getOneCategory = (req, res, next) => {
    Category.findOne({_id: req.params.id})
        .then(Category => res.status(200).json(Category))
        .catch(error => res.status(400).json({error}))
}

exports.updateCategory = (req, res, next) => {
    Category.updateOne({_id: req.params.id}, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ ...req.body, _id: req.params.id }))
        .catch(error => res.status(400).json({ error }))
}

exports.deleteCategory = (req, res, next) => {
    Category.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'suppression effectué'}))
        .catch(error => res.status(400).json({ error }))
}