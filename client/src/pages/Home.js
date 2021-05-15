import React from 'react'
import Article from '../components/Article'
import Container from 'react-bootstrap/Container'
// import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
// import { loginUser } from '../actions/users'
import DisplayTable from '../components/DisplayTable'

function Home() {
  const articles = useSelector((state) => state.articles)

  console.log(articles)
  //call useeffect, then make a callback function
  // useEffect(() => {
  //   dispatch(loginUser())
  // }, [dispatch])

  return (
    <div className="Home">
      <Container>
        <Article title="Sample" author="Ellai" />
        <Article title="Sample1" author="Ellai1" />
        <Article title="Sample2" author="Ellai2" />

        <DisplayTable />
      </Container>
    </div>
  )
}
export default Home
