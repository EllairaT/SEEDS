import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import DisplayArticles from '../components/DisplayArticles'
import { getArticles } from '../actions/articles.js'

function Home() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getArticles())
  }, [dispatch])

  return (
    <div className="Home">
      <Container>
        <DisplayArticles />
      </Container>
    </div>
  )
}
export default Home
