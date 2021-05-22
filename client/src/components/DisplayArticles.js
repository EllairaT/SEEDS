import React, { useEffect, useState } from 'react'
import Article from './Article'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import { useSelector } from 'react-redux'

const DisplayArticles = () => {
  //get articles from the store
  const articles = useSelector((state) => state.articles)

  return (
    <>
      <Container fluid className="mt-5">
        {/* Headers */}
        {/* <Row>
          <Col xl={6} className="h3">
            Index
          </Col>

          <Col xl={6} className="h3">
            Title
          </Col>
        </Row> */}

        {/* for every article, make a new row with the article id as the key, and make a new article component */}
        {articles.map((a) => (
          <Row key={a._id}>
            <Article article={a} setID={a._id} />
          </Row>
        ))}
      </Container>
    </>
  )
}

export default DisplayArticles
