import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import DisplayArticles from '../components/DisplayArticles'
import { getArticles } from '../actions/articles.js'
import { ArticleInput, DateInput, SEPInput } from '../components/InputForms'
import DataGridTest from '../components/DataGrid'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Home() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getArticles())
  }, [dispatch])

  return (
    <div className="Home">
      <Container>
        <Row>
          <Col>
            <ArticleInput />
          </Col>
          <Col>
            <SEPInput />
          </Col>
          <Col>
            <DateInput />
          </Col>
        </Row>
        {/* <DisplayArticles /> */}
        <br />
        <DataGridTest />
      </Container>
    </div>
  )
}
export default Home
