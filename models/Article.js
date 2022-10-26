import mongoose from "mongoose"

const Article = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    subTitle: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    article: {
        type: String,
        required: true
    },
    comments: [{
        name: String,
        comment: String
    }]
})

export default mongoose.model('article', Article)