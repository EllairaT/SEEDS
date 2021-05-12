import React, {useState} from 'react'
import ArticleObj from './Article'
import axios from 'axios'
import Table from 'react-bootstrap'

function Table(props) {
    // props = {ArticleObj : 'thing'}
    const [articles, setArticles] = useState('')
    const [sorted, setSorted] = useState('')

    axios.get('/api/')
    .then((response) => {
      const data = response.data;
      this.setState({ posts: data });
      console.log('Data has been received!!');
    })
    .catch(() => {
      alert('Error retrieving data!!!');
    });

    return (

        <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
    )
}

export default Table
