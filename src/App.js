// import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { createGlobalStyle } from "styled-components";
// import List from "./components/Lists";
import styled from "styled-components";
// import MainBanner from "./components/MainBanner";
// import HomeFilms from "./pages/HomeFilms";
import { Outlet } from "react-router-dom";


const GlobalStyle = createGlobalStyle`
  * {
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
`
const Div = styled.div`
  color: white;
  background-color: #000000;
`

function App () {
  return (
    <Div className="App">
      {/* <Navbar /> */}
      {/* <MainBanner /> */}
      {/* <List /> */}
      {/* <Outlet /> */}
      <Navbar />
      {/* <HomeFilms /> */}
      <Outlet />
      <GlobalStyle />
    </Div>
  );
}

export default App;

      // <nav>
      //   <h1>
      //     <Link to="films">Filmes</Link>
      //   </h1>
      //   <Link to="movie/1">Movie</Link>
      //   <Link to="searchfilms">SearchFilms</Link>
      // </nav>
      // <p>Olá</p>