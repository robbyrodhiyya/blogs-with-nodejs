import express from "express"
import { deleteArticle, getArticleById, getArticles, saveArticle, updateArticle } from "../controllers/articleController.js"
import { deleteComment, getComment, saveComment, updateComment } from "../controllers/commentController.js"

const router = express.Router()

router.post("/", saveArticle)
router.get("/all", getArticles)
router.get("/:id", getArticleById)
router.put("/:id", updateArticle)
router.delete("/:id", deleteArticle)

router.post("/:id", saveComment)
router.get("/:id/:commentId", getComment)
router.put("/:id/:commentId", updateComment)
router.delete("/:id/:commentId", deleteComment)


export default router