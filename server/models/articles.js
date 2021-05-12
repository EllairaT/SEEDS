import mongoose, { model } from 'mongoose'

// Schema
const { Schema } = mongoose

const ArticleSchema = new Schema({
  key: String,
  title: String,
  AUTHOR: String
})

// Model
const Article = model('Article', ArticleSchema)

export default Article
