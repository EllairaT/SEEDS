import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
// import Table from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { useDispatch } from 'react-redux'
import Collapse from 'react-bootstrap/Collapse'
import Button from 'react-bootstrap/Button'
import { TableCell } from '@material-ui/core'

//props
const Article = (props) => {
  const [open, setOpen] = useState(false);

  // const dispatch = useDispatch()
  //we will need the setID (which is the _id) for later
  //TODO: add publisher, type (if the article is an article or a book, etc etc)
  return (
    <>
      <TableCell>{props.article.AUTHOR ? props.article.AUTHOR : "Author Unknown"}</TableCell>
      <TableCell>{props.article.TITLE}</TableCell>
      <TableCell>{props.article.YEAR}</TableCell>
    </>
  )
}

export default Article
