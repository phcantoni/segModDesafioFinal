import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";

const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 28vw;
    height: 90vh;
    margin-bottom: 1em;
    // border: yellow solid;
    
    div {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 22vw;
          height: 90vh;
          padding-top: 0.7em;
          background-color: #111;
          border-radius: 3px;
          // border: hotpink solid;
        }

        img {
          width: 18vw;
          height: 60vh;
          border-radius: 3px;
          // margin-bottom: 0.5em;
          // border: blue solid;
        }

        section {
          width: 18vw;
          height: 25vh;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          // border: white solid;

              div {
                width: 18vw;
                height: 10vh;
                // border: green solid;
              }
        }

        h2 {
          width: 18vw;
          font-size: 15px;
          // border: red solid;
        }

        p {
          width: 18vw;
          margin-bottom: 0.5em;
          // border: aqua solid;
        }

        .starIcon {
          color: yellow;
        }

        button {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 18vw;
          height: 8vh;
          font-size: 15px;
          font-weight: 400;
          color: #111;
          border: white solid;
          border-radius: 3px;

              :hover {
                cursor: pointer;
                color: white;
                background-color: #111;
                transition: 0.4s;
              }
        }
`

const baseUrlImage = "https://image.tmdb.org/t/p/w500/";

const MovieCard = ({movie, showLink = true}) => {
  return (
    <MainDiv>
      <div>
        <img src={baseUrlImage + movie.poster_path} alt="Poster Filme"/>
        <section>
          <div>
            <h2>{movie.title}</h2>
            <p>
              <FaStar className="starIcon"/> {movie.vote_average}
            </p>
          </div>
          
            {showLink && <Link to={`/movie/${movie.id}`} style={{
              textDecoration: "none"
            }}><button>Detalhes</button></Link>}
          
        </section>
      </div>
    </MainDiv>
  );
};

export default MovieCard