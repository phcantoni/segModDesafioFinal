// import { Outlet } from "react-router-dom";
import "./App.css";
// import Header from "./components/Header";
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
  font-family: "Open Sans", sans-serif;
  color: #f6f6f6;
  background-color: #000000;
`

function App () {
  return (
    <Div className="App">
      {/* <Navbar /> */}
      {/* <MainBanner /> */}
      {/* <List /> */}
      {/* <Outlet /> */}
      {/* <Header /> */}
      {/* <HomeFilms /> */}
      <Outlet />
      <GlobalStyle />
    </Div>
  );
}

export default App;