import React from 'react'
import { Table } from 'react-bootstrap'
import Article from './Article'

function DisplayTable(headers, props) {
  // props = {thing: 'thing'}

  const header = {
    index: '#',
    title: 'Title'
  }
  const arr = []

  const arrays = [
    {
      title: '1',
      author: 'a'
    },
    {
      title: '2',
      author: 'b'
    }
  ]

  for (let index = 1; index <= 10; index++) {
    arr.push(<Article index={index} title={'idiot'} />)
  }

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>{header.title}</th>
          <th>{header.index}</th>
        </tr>
      </thead>
      <tbody>{arr}</tbody>
    </Table>
  )
}

export default DisplayTable
