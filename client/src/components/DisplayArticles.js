import React, { useEffect, useState } from 'react'
import Article from './Article'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import { useSelector } from 'react-redux'


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

const DisplayArticles = () => {
  //get articles from the store
  const articles = useSelector((state) => state.articles)

  const headCells = [
    { id: 'index', numeric: true, label: 'Index' },
    { id: 'title', numeric: false, label: 'Title' },
    { id: 'author', numeric: false, label: 'Author' },
    { id: 'date', numeric: false, label: 'Date Published' }
  ]

  const useRowStyles = makeStyles({
    root: {
      '& > *': {
        borderBottom: 'unset',
      },
    },
  });

  const createData = (name, calories, fat, carbs, protein, price) => {
    return {
      name,
      calories,
      fat,
      carbs,
      protein,
      price,
      history: [
        { date: '2020-01-05', customerId: '11091700', amount: 3 },
        { date: '2020-01-02', customerId: 'Anonymous', amount: 1 },
      ],
    };
  }

  const Row = (props) => {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const classes = useRowStyles();
  }
  return (
    <>
      <Container fluid className="mt-5">

        {/* for every article, make a new row with the article id as the key, and make a new article component */}
        {articles.map((a) => (
          <Row key={a._id}>
            <Article article={a} setID={a._id} />
          </Row>
        ))}
      </Container>
    </>
  )
}

export default DisplayArticles
