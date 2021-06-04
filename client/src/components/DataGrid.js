import React, { useState, useRef } from 'react'
import { useSelector } from 'react-redux'
import ReactDataGrid from '@inovua/reactdatagrid-community'
import '@inovua/reactdatagrid-community/index.css'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'


const shouldComponentUpdate = () => true


const DataGridTest = (props) => {
  //get all articles from the store 
  const articles = useSelector((state) => state.articles)

  //hooks for filtering
  //filter by author
  //filter by date
  //filter by software engineering method
  //get rows from store and put them in array
  const articleRows = []
  //set initial states 
  const [gridRef, setGridRef] = useState(null);
  const [searchText, setSearchText] = useState('')
  const [dataSource, setDataSource] = useState([]);

  //making an object that holds the current search text as its current property
  const searchRef = useRef(searchText)
  searchRef.current = searchText

  const search = ({ value }) => {
    //get the current text in the search bar and make it lowercase
    const lowerText = searchRef.current.toLowerCase()
    //if the text is already in lowercase, then return the value and keep going
    if (!lowerText) {
      return value
    }
    const string = value + ""
    const val = string.toLowerCase()
    const i = val.indexOf(lowerText)

    if (i === -1) {
      return value
    }

    //highlight text
    return [
      <span key="before">{string.slice(0, i)}</span>,
      <span key="match" style={{ background: 'yellow', fontWeight: 'bold' }}>
        {string.slice(i, i + lowerText.length)}
      </span>,
      <span key="after">{string.slice(i + lowerText.length)}</span>,
    ]
  }

  //style for the grid and rows
  const gridStyle = { minHeight: 550 }
  const rowStyle = ({ data }) => {
    const colorMap = {
      none: '#b5b5b5'
    }
    return {
      color: colorMap[data.author]
    }
  }

  //set the columns
  const columns = [
    { name: 'author', header: 'Authors', defaultFlex: 2 },
    { name: 'title', header: 'Title', defaultFlex: 2 },
    { name: 'yr', header: 'Year', defaultFlex: 1 },
    { name: 'journal', header: 'Journal', defaultFlex: 1 }
  ]

  articles.forEach((a) => {
    var authorCol = a.AUTHOR ? a.AUTHOR : 'none'
    var year = a.YEAR ? a.YEAR : 'unknown'
    var jrnl = a.JOURNAL ? a.JOURNAL : 'none'
    articleRows.push({ id: a._id, author: authorCol, title: a.TITLE, yr: year, journal: jrnl })
  })

  // const handleChange = (e) => {
  //   setSearchText({ : e.target.value })
  // }

  return (
    <>

      <Form.Control
        type="text"
        style={{ padding: 5 }}
        value={searchText}

        className="mt-3 mb-3"
      />{ }

      <div style={{ width: '100%' }}>
        <ReactDataGrid
          idProperty="id"
          handle={gridRef}
          columns={columns}
          dataSource={articleRows}
          style={gridStyle}
          rowStyle={rowStyle}
          showCellBorders={false}
          pagination={true}
          rowHeight={60}
        />
      </div>
    </>
  )
}

export default DataGridTest
