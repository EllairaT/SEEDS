import React, { useEffect, useState } from 'react'
import Article from './Article'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import { useSelector } from 'react-redux'

const DisplayArticles = ({ setCurrentId }) => {
  const articles = useSelector((state) => state.articles)

  console.log(articles)

  // articles.forEach((a) => {
  //   arr.push(arr)
  // })

  return (
    <>
      <Container fluid className="mt-5">
        {/* Headers */}
        <Row>
          <Col xl={6} className="h3">
            Index
          </Col>

          <Col xl={6} className="h3">
            Title
          </Col>
        </Row>

        {/* Show rows of articles */}
        <Article />
      </Container>
    </>
  )
}

export default DisplayArticles
