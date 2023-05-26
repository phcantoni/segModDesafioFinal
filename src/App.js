import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
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
      <Outlet />
      <GlobalStyle />
    </Div>
  );
}

export default App;