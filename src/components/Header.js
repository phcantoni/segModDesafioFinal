import { Link, useNavigate } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";
import styled from "styled-components";
import logo from "./assets/logoDel.png";
import { useState } from "react";

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
`

const FigureLogo = styled.figure `
    display: flex;
    align-items: center;
    width: 33vw;
    height: 100%;
    padding-left: 1.2em;

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

        .btnSeries {
            width: 8vw;
            height: 6vh;
            font-size: 15px;
            color: #F6F6F6;
            background: transparent;
            border-radius: 30px;
            border: none;

                :hover {
                    cursor: pointer;
                    box-shadow: dimgrey 1.5px 1.5px;
                }
        }

        .btnFilms {
            width: 8vw;
            height: 6vh;
            font-size: 15px;
            color: #F6F6F6;
            background: transparent;
            border-radius: 30px;
            border: none;
            
            :hover {
                cursor: pointer;
                box-shadow: dimgrey 1.5px 1.5px;
            }
        }

        .LinkTagBtn {
            text-decoration: none;
            border-radius: 30px;
            // border: white solid 1px;

            :hover {
                cursor: pointer;
                background-color: dimgray;
                transition: 0.4s;
                border: none;
            }
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

        form {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            width: 16vw;
            height: 100%;
            gap: 0.5em;
        }

        input {
            width: 1px;
            height: 4vh;
            color: white;
            opacity: 0.01;
            background: transparent;
            padding-left: 0.5em;
            border: white solid 1px;
            border-radius: 30px;
            
        }
        
        form:hover input {
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

                :hover {
                    cursor: pointer;
                    transform: scale(1.1);
                    color: darkgrey;
                }
        }

        .LinkTagP {
            color: white;
            text-decoration: none;

                :hover {
                    cursor: pointer;
                    transform: scale(1.1);
                    color: darkgrey;
        }
`

function Navbar() {

    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(!search) return

        navigate(`/searchfilms?q=${search}`);
        setSearch("");
    }

  return (
    <Nav id="Navbar">
        <FigureLogo>
            <img src={logo} alt=""></img>
        </FigureLogo>
        <DivOne>
            <Link className="LinkTagBtn" to="/homeseries"><button className="btnSeries">Séries</button></Link>
            <Link className="LinkTagBtn" to="/"><button className="btnFilms">Filmes</button></Link>
        </DivOne>
        <DivTwo>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Buscar filme..." onChange={(e) => setSearch(e.target.value)} value={search}/>
                <button><BiSearchAlt2 className="searchIcon" style={{
                  width: "2vw",
                  height: "4vh",
                  color: "white",
                  }}/></button>
            </form>
            <p>Filtro</p>
            <Link className="LinkTagP" to="/login"><p>Login</p></Link>
        </DivTwo>
    </Nav>
  )
}

export default Navbar


