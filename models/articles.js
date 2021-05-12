import mongoose, { model } from 'mongoose'

// Schema
const { Schema } = mongoose

const ArticleSchema = new Schema({})

// Model
const Article = model('Article', ArticleSchema)

export default Article
