// handlers for routes
import Article from '../models/articles.js'

// rename later to getAll
const getArticle = async (req, res) => {
  try {
    const getArticles = await Article.find({})
    res.status(200).json(getArticles)
  } catch (err) {
    console.log(err.message)
  }
}

// const findArticle
export default getArticle
