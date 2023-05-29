import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavCateg = styled.nav`
    display: flex;
    justify-content: center;

        ul {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 83vw;
          height: 20vh;
          font-size: 16px;
        }

        li {
          list-style: none;

          :hover {
              cursor: pointer;
              transform: scale(1.1);
              color: #717171;
          }
        }

        button {
          background: transparent;
          border: none;

          :hover {
            cursor: pointer;
            transform: scale(1.1);
          }
        }
`

function Navbar() {
  return (
    <div>
        <NavCateg>
            <ul>
                <Link to="/popular" style={{textDecoration: "none", color: "white"}}><li>Popular</li></Link>
                <Link to="/drama" style={{textDecoration: "none", color: "white"}}><li>Drama</li></Link>
                <Link to="/action" style={{textDecoration: "none", color: "white"}}><li>Ação</li></Link>
                <Link to="/adventure" style={{textDecoration: "none", color: "white"}}><li>Aventura</li></Link>
                <Link to="/comedy" style={{textDecoration: "none", color: "white"}}><li>Comédia</li></Link>
                <Link to="/crime" style={{textDecoration: "none", color: "white"}}><li>Crime</li></Link>
                <Link to="/fantasy" style={{textDecoration: "none", color: "white"}}><li>Fantasia</li></Link>
                <Link to="/family" style={{textDecoration: "none", color: "white"}}><li>Família</li></Link>
                <button><BiSearchAlt2 style={{
                  width: "2.5vw",
                  height: "5vh",
                  color: "white",
                  }}/></button>
            </ul>
        </NavCateg>
    </div>
  )
}

export default Navbar