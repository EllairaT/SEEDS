import mongoose, { model } from 'mongoose'

// Schema
const { Schema } = mongoose

// for security reasons, passwords will not be stored. Instead, the hash and salt will be stored.
const ArticleSchema = new Schema({
  author: {},
  title: {},
  journal: {},
  year: {},
  month: {},
  publisher: {},
  volume: {},
  number: {},
  pages: {},
  annote: {},
  eprint: {},
  eprinttype: {},
  eprintclass: {}
})

// Model
const Article = model('Article', ArticleSchema)

export default Article
