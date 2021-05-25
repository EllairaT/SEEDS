import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ReactDataGrid from '@inovua/reactdatagrid-community'
import '@inovua/reactdatagrid-community/index.css'

const DataGridTest = (props) => {
  const articles = useSelector((state) => state.articles)
  const gridStyle = { minHeight: 550 }
  const rowStyle = ({ data }) => {
    const colorMap = {
      none: '#b5b5b5'
    }
    return {
      color: colorMap[data.author]
    }
  }

  //AUTHOR, TITLE, MONTH, YEAR...
  const columns = [
    { name: 'author', header: 'Authors', defaultFlex: 2 },
    { name: 'title', header: 'Title', defaultFlex: 2 },
    { name: 'yr', header: 'Year', defaultFlex: 1 },
    { name: 'journal', header: 'Journal', defaultFlex: 1 }
  ]

  //get rows from store and put them in array
  const articleRows = []

  articles.forEach((a) => {
    var authorCol = a.AUTHOR ? a.AUTHOR : 'none'
    var year = a.YEAR ? a.YEAR : 'unknown'
    var jrnl = a.JOURNAL ? a.JOURNAL : 'none'
    articleRows.push({ id: a._id, author: authorCol, title: a.TITLE, yr: year, journal: jrnl })
  })

  return (
    <>
      <div style={{ width: '100%' }}>
        <ReactDataGrid
          idProperty="id"
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
