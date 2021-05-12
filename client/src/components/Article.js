import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'

function ArticleObj(props) {
  return (
    <>
      <Card className="card text-white bg-primary m-3">
        <Card.Header>{props.title}</Card.Header>
        <Card.Body>Author: {props.author}</Card.Body>
      </Card>
    </>
  )
}

export default ArticleObj
