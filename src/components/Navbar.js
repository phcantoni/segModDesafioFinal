import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import styled from "styled-components";

const NavCateg = styled.nav`
    display: flex;
    justify-content: center;
    // border: blue solid;

        ul {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 83vw;
          height: 15vh;
          font-size: 16px;
          // border: aqua solid;
        }

        li {
          list-style: none;
        }

        button {
          background: transparent;
          border: none;
        }
`

function Navbar() {
  return (
    <div>
        <NavCateg>
            <ul>
                <li>Popular</li>
                <li>Drama</li>
                <li>Ação</li>
                <li>Aventura</li>
                <li>Comédia</li>
                <li>Crime</li>
                <li>Fantasia</li>
                <li>Família</li>
                <button><BiSearchAlt2 style={{
                  width: "3.2vw",
                  height: "6.4vh",
                  color: "white",
                  // border: "yellow solid"
                  }}/></button>
            </ul>
        </NavCateg>
    </div>
  )
}

export default Navbar