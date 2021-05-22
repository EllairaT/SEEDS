import React from 'react'
import Card from 'react-bootstrap/Card'
// import Table from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useDispatch } from 'react-redux'

//props
const Article = ({ article, setID }) => {
  // const dispatch = useDispatch()
  //we will need the setID (which is the _id) for later
  //TODO: add publisher, type (if the article is an article or a book, etc etc)

  return (
    <>
      <Card border="light" bg="light" className="m-4">
        <Card.Header style={{ background: 0 }}>
          <div className="float-start"> {article.AUTHOR ? article.AUTHOR : 'Author unknown'}</div>
          <div className="float-end"> {article.YEAR ? article.YEAR : 'Year unknown'}</div>
        </Card.Header>
        <Card.Body>
          <Col className="h6">{article.TITLE}</Col>

          <span className="text-info">{article.ANNOTE ? article.ANNOTE : ''}</span>
        </Card.Body>
        <Card.Footer style={{ background: 0, border: 0 }}>
          <small className="text-muted float-left">Added 3 days ago</small>
        </Card.Footer>
      </Card>
    </>
  )
}

export default Article
