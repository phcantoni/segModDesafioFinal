import { Link } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";
import styled from "styled-components";
import logo from "./assets/logoDel.png";

const Nav = styled.nav `
    display: flex;
    justify-content: space-between;
    width: 100vw;
    height: 10vh;
    font-family: "Open Sans", sans-serif;
    background-color: gray;
    border: red solid;
`

const FigureLogo = styled.figure `
    display: flex;
    align-items: center;
    width: 33vw;
    height: 100%;
    padding-left: 1.2em;
    border: blue solid;

        img {
            width: 7vw;
            height: 6vh;
        }
`

const DivOne = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 33vw;
    height: 100%;
    border: green solid;
`

const DivTwo = styled.div `
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1.5em;
    width: 33vw;
    height: 100%;
    padding-right: 1.2em;
    border: green solid;
`

function Navbar() {
  return (
    <Nav id="Navbar">
        <FigureLogo>
            <img src={logo} alt=""></img>
        </FigureLogo>
        <DivOne>
            <button><Link to="/homeseries">Séries</Link></button>
            <button><Link to="/">Filmes</Link></button>
        </DivOne>
        <DivTwo>
            <div>
                <input type="text" placeholder="Buscar filme..."/>
                <button><BiSearchAlt2 /></button>
            </div>
            <p>Filtro</p>
            <p>Login</p>
        </DivTwo>
    </Nav>
  )
}

export default Navbar


//<Link to="/Movie/1">MOVIE</Link>
//<Link to="/SearchFilms">SEARCHFILMS</Link>