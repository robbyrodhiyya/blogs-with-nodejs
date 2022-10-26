import { query } from "express"
import Article from "../models/Article.js"

export const saveArticle = async (req, res) => {
    const article = new Article(req.body)
    try {
        const savedArticle = await article.save()
        res.status(201).json(savedArticle)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const getArticleById = async (req, res) => {
    const checkId = await Article.findById(req.params.id)
    if (!checkId) return res.status(404).json({ message: "Data not found" })
    try {
        const article = await Article.findById(req.params.id)
        res.json(article)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const updateArticle = async (req, res) => {
    const checkId = await Article.findById(req.params.id)
    if (!checkId) return res.status(404).json({ message: "Data not found" })
    try {
        const updatedArticle = await Article.updateOne({ _id: req.params.id }, { $set: req.body })
        res.status(200).json(updatedArticle)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const deleteArticle = async (req, res) => {
    const checkId = await Article.findById(req.params.id)
    if (!checkId) return res.status(404).json({ message: "Data not found" })
    try {
        const deteledArticle = await Article.deleteOne({ _id: req.params.id })
        res.status(200).json(deteledArticle)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const getArticles = async (req, res) => {
    const title = req.query.title ? req.query.title : ""
    const author = req.query.author ? req.query.author : ""
    const page = req.query.page ? req.query.page : 0
    const size = req.query.size ? req.query.size : 10
    const sort = req.query.sort ? req.query.sort : "_id"
    const dir = (req.query.dir != 1) ? -1 : 1
    const sorting = { "_id": dir }

    const pipeline = [{
        $match: {
            "title": { $regex: title, $options: 'i' },
            "author": { $regex: author, $options: 'i' },
        }
    }, {
        "$sort": sorting
    }
    ]

    const skip = (page * size != 0) ? pipeline.push({ $skip: Number(page) }) : pipeline.push({ $match: {} })
    pipeline.push({ $limit: Number(size) })

    console.log(pipeline)

    try {
        const articles = await Article.aggregate(pipeline)
        res.json(articles)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}