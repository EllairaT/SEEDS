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

  // const arrays = [
  //   {
  //     title: '1',
  //     author: 'a'
  //   },
  //   {
  //     title: '2',
  //     author: 'b'
  //   }
  // ]

  for (let index = 1; index <= 10; index++) {
    var title = 'article: '.concat(index)
    arr.push(<Article index={index} title={title} />)
  }

  return (
    <Table striped hover variant="primary" className="mt-5">
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
