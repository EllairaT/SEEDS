import React from 'react'
import Card from 'react-bootstrap/Card'
// import Table from 'react-bootstrap/Card'
// import Row from 'react-bootstrap/Row'

function ArticleObj(props) {
  return (
    <>
       {/* <Card className="card text-white bg-primary m-3">
        <Card.Header>{props.title}</Card.Header>
        <Card.Body>Author: {props.author}</Card.Body>
      </Card>  */}

      <tr>
        <td>{props.index}</td>
        <td>{props.title}</td>
    </tr>
    </>
  )
}

export default ArticleObj
