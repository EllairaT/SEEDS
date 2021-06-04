import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import DisplayArticles from '../components/DisplayArticles'
import { getArticles } from '../actions/articles.js'
import { Input } from '../components/InputForms'
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
            <Input type="text" placeholder="Article title" />
          </Col>
          <Col>
            <Input type="select" />

          </Col>
          <Col>
            <Input type="date" />
          </Col>
          <Col>
            <Input type="date" />
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
