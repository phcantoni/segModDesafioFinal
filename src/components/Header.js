import { Link } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";
import styled from "styled-components";
import logo from "./assets/logoDel.png";

const Nav = styled.nav `
    display: flex;
    justify-content: space-between;
    position: fixed;
    width: 100%;
    height: 14vh;
    font-family: "Open Sans", sans-serif;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    -moz-backdrop-filter: blur(10px);
    z-index: 999;
    // border: red solid;
`

const FigureLogo = styled.figure `
    display: flex;
    align-items: center;
    width: 33vw;
    height: 100%;
    padding-left: 1.2em;
    // border: blue solid;

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
    // border: green solid;

        button {
            width: 8vw;
            height: 6vh;
            font-size: 14px;
            background: transparent;
            border: none;
        }

        button:last-of-type {
            width: 8vw;
            height: 6vh;
            background-color: grey;
            border-radius: 30px;
            border: none;
            box-shadow: dimgrey 1.5px 1.5px;
        }

        .LinkTag {
            color: #F6F6F6;
            text-decoration: none;
        }
`

const DivTwo = styled.div `
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1.5em;
    width: 33vw;
    height: 100%;
    padding-right: 1.2em;
    // border: green solid;

        div {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            width: 16vw;
            height: 100%;
            gap: 0.5em;
            // border: green solid;
        }

        input {
            width: 1px;
            height: 4vh;
            opacity: 0.01;
            background: transparent;
            padding-left: 0.5em;
            border: #717171 solid 1px;
            border-radius: 30px;
        }

        div:hover input {
            width: 13vw;
            opacity: 1;
            transition: 1s;
        }

        button {
            display: flex;
            align-items: center;
            background: transparent;
            border: none;
        }

        p {
            font-size: 14px;
            // border: blue solid;

                :hover {
                    cursor: pointer;
                    transform: scale(1.1);
                    color: darkgrey;
                }
        }
`

function Navbar() {
  return (
    <Nav id="Navbar">
        <FigureLogo>
            <img src={logo} alt=""></img>
        </FigureLogo>
        <DivOne>
            <button><Link className="LinkTag" to="/homeseries">Séries</Link></button>
            <button><Link className="LinkTag" to="/">Filmes</Link></button>
        </DivOne>
        <DivTwo>
            <div>
                <input type="text" placeholder="Buscar filme..."/>
                <button><BiSearchAlt2 className="searchIcon" style={{
                  width: "2vw",
                  height: "4vh",
                  color: "white",
                  // border: "yellow solid"
                  }}/></button>
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