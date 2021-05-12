//articles are in an array
const reducer = (articles = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return articles
    case 'ADD':
      return articles
    default:
      return articles
  }
}
