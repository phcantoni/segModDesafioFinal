import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
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
                <li>Popular</li>
                <li>Drama</li>
                <li>Ação</li>
                <li>Aventura</li>
                <li>Comédia</li>
                <li>Crime</li>
                <li>Fantasia</li>
                <li>Família</li>
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