import React from 'react'
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
        <DisplayTable />
      </Container>
    </div>
  )
}
export default Home
