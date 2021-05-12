import mongoose, { model } from 'mongoose'

// Schema
const { Schema } = mongoose

const ArticleSchema = new Schema({
    key: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        required: true,
      },
      AUTHOR: {
        type: String,
        required: true
      },
      TITLE: {
        type: String,
        required: true,
      },
}, { collection : 'seedscollection'})

// Model
const Article = model('Article', ArticleSchema)

export default Article
