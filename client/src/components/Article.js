import React, {useState} from 'react'
import Card from 'react-bootstrap/Card'
// import Table from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { useDispatch } from 'react-redux'
import Collapse from 'react-bootstrap/Collapse'
import Button from 'react-bootstrap/Button'

//props
const Article = ({ article, setID }) => {
  const [open, setOpen] = useState(false);
  // const dispatch = useDispatch()
  //we will need the setID (which is the _id) for later
  //TODO: add publisher, type (if the article is an article or a book, etc etc)

  return (
    <>
      <Card border="light" bg="light" className="m-4">
        {/* <Card.Header style={{ background: 0 }}>
          <div className="float-start"> {article.AUTHOR ? article.AUTHOR : 'Author unknown'}</div>
          <div className="float-end"> {article.YEAR ? article.YEAR : 'Year unknown'}</div>
        </Card.Header> */}
        <Card.Body>
          <Col>
          <div className="float-start"> {article.AUTHOR ? article.AUTHOR : 'Author unknown'}</div>
          </Col>
          <Col>
          <div className="float-end"> {article.YEAR ? article.YEAR : 'Year unknown'}</div>
          </Col>
          <Col>
          <div className=""> {article.TITLE ? article.TITLE : 'Year unknown'}</div>
          </Col>
        
        
        </Card.Body>
        <Button class="btn btn-primary btn-sm"
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        button
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          <Card.Body>
            <Col classname="h6">{article.TITLE}</Col>
          </Card.Body>
        </div>
      </Collapse>
        <Card.Footer style={{ background: 0, border: 0 }}>
          <small className="text-muted float-left">Added 3 days ago</small>
        </Card.Footer>
      </Card>
    </>
  )
}

export default Article
