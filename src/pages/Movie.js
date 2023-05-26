import Header from "../components/Header";
import styled from "styled-components";

const MainDiv = styled.div`
    width: 100vw;
    height: 100vh;
`

function Movie() {
  return (
    <MainDiv>
      <Header />
      Movie
    </MainDiv>
  )
}

export default Movie