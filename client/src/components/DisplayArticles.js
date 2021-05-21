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

  const headCells = [
    { id: 'index', numeric: true, label: 'Index'},
    { id: 'title', numeric: false, label: 'Title'},
    { id: 'author', numeric: false, label: 'Author'},
    { id: 'date', numeric: false, label: 'Date Published'}
  ]
  return (
    <>
      <Container fluid className="mt-5">
        {/* Headers */}
        {/* <Row>
          <Col xl={6} className="h2">
            {headCells[0].label}
          </Col>
          <Col xl={6} className="h2">
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
