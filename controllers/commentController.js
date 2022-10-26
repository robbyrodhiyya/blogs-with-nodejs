import Article from "../models/Article.js"

export const saveComment = async (req, res) => {
    const checkId = await Article.findById(req.params.id)
    if (!checkId) return res.status(404).json({ message: "Data not found" })

    const comment = req.body

    try {
        const updatedArticle = await Article.updateOne({ "_id": req.params.id }, { $push: { "comments": comment } })
        res.status(200).json(updatedArticle)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const getComment = async (req, res) => {
    const checkId = await Article.findById(req.params.id)
    if (!checkId) return res.status(404).json({ message: "Data not found" })

    const checkCommentId = await Article.findOne({ "comments._id": req.params.commentId })
    if (!checkCommentId) return res.status(404).json({ message: "Data not found" })

    try {
        const comment = await Article.findOne({ "comments._id": req.params.commentId }, { "comments": { $elemMatch: { "_id": req.params.commentId } } })
        res.status(200).json(comment["comments"][0])
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const updateComment = async (req, res) => {
    const checkId = await Article.findById(req.params.id)
    if (!checkId) return res.status(404).json({ message: "Data not found" })

    const checkCommentId = await Article.findOne({ "comments._id": req.params.commentId })
    if (!checkCommentId) return res.status(404).json({ message: "Data not found" })

    const comment = req.body

    try {
        const updatedComment = await Article.updateOne({ "_id": req.params.id, "comments": { $elemMatch: { "_id": req.params.commentId } } }, {
            $set: { "comments.$.name": comment.name, "comments.$.comment": comment.comment }
        })
        res.status(200).json(updatedComment)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const deleteComment = async (req, res) => {
    const checkId = await Article.findById(req.params.id)
    if (!checkId) return res.status(404).json({ message: "Data not found" })

    const checkCommentId = await Article.findOne({ "comments._id": req.params.commentId })
    if (!checkCommentId) return res.status(404).json({ message: "Data not found" })

    try {
        const deletedComment = await Article.updateOne(
            { "_id": req.params.id, "comments": { $elemMatch: { "_id": req.params.commentId } } }, { $pull: { "comments": { "_id": req.params.commentId } } })
        res.status(200).json(deletedComment)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}