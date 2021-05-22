import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
// import Table from 'react-bootstrap/Card'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
//props
const Article = (props) => {
  const [open, setOpen] = useState(false);

  // const dispatch = useDispatch()
  //we will need the setID (which is the _id) for later
  //TODO: add publisher, type (if the article is an article or a book, etc etc)
  return (
    <>
      <TableRow>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>

        <TableCell>{props.article.TITLE}</TableCell>
        <TableCell>{props.article.AUTHOR ? props.article.AUTHOR : "Author Unknown"}</TableCell>
        <TableCell>{props.article.YEAR}</TableCell>
      </TableRow>

      <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
        <Collapse in={open} component="tr" style={{ display: "block" }} unmountOnExit>
          <TableRow>
            <TableBody>
              <Box margin={3} border={0}>
                <Typography variant="h6" gutterBottom component="div">
                  Other information
                </Typography>
                <TableRow>
                  <TableCell>{props.article.MONTH}</TableCell>
                  <TableCell>{props.article.PUBLISHER}</TableCell>
                  <TableCell>{props.article.Type}</TableCell>
                  <TableCell>{props.article.JOURNAL}</TableCell>
                </TableRow>
              </Box>
            </TableBody>
          </TableRow>
        </Collapse>
      </TableCell>

    </>
  )
}

export default Article
