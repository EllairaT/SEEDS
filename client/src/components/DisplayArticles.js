import React, { useEffect, useState } from 'react'
import DataGridTest from './DataGrid'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import { useSelector } from 'react-redux'

import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import Article from './Article'

const DisplayArticles = () => {
  //get articles from the store
  const articles = useSelector((state) => state.articles)
  const [open, setOpen] = React.useState(false)

  const headers = ['Title', 'Author', 'Year', 'Article', 'Journal']

  return (
    <>
      <Container fluid className="mt-5">
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell align="center">{/* Empty Cell */}Index</TableCell>
                {headers.map((h) => (
                  <TableCell>{h}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {articles.map((a) => (
                <Article article={a} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  )
}

export default DisplayArticles
