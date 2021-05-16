import React from 'react'
import Card from 'react-bootstrap/Card'
// import Table from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useDispatch } from 'react-redux'

const Article = ({ article, setID }) => {
  const dispatch = useDispatch()

  return (
    <>
      <Card border="light" className="m-2">
        <Card.Body>
          <Row>
            <Col xl={6} className="h3">
              {article._id}
            </Col>
            <Col xl={6} className="h3">
              {/* {article.title} */}
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer>
          <span className="text-muted float-left">
            <small>Added 3 days ago</small>
          </span>
        </Card.Footer>
      </Card>
    </>
  )
}

export default Article
