import React, { useEffect, useState } from 'react'
import Article from './Article'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { getArticles } from '../actions/articles.js'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

const DisplayArticles = () => {
  //initial state
  const articles = useSelector((state) => state.articles)
  const dispatch = useDispatch()
  

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
