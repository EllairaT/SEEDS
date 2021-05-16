// handlers for routes
import Article from '../models/articles.js'

const getArticle = async (req, res) => {
  try {
    const getArticles = await Article.find({})
    res.status(200).json(getArticles)
  } catch (err) {
    console.log(err.message)
  }
}

export default getArticle
