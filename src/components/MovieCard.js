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
    
    div {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 22vw;
          height: 90vh;
          padding-top: 0.7em;
          background-color: #111;
          border-radius: 3px;
        }

        img {
          width: 18vw;
          height: 60vh;
          border-radius: 3px;
        }

        section {
          width: 18vw;
          height: 25vh;
          display: flex;
          flex-direction: column;
          justify-content: space-between;

              div {
                width: 18vw;
                height: 10vh;
              }
        }

        h2 {
          width: 18vw;
          font-size: 15px;
        }

        p {
          width: 18vw;
          margin-bottom: 0.5em;
        }

        .genres {
          width: 18vw;
          font-size: 13px;
        }

        span {
          font-size: 10px;
          padding-left: 3px;
          padding-bottom: 1.5px;
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

  
    // let firstDate = new Date(item.first_air_date);
    // let firstDateTwo = new Date(item.release_date);

    let genres = [];
    for(let i in movie.genres) {
        genres.push(movie.genres[i].name);
    }

  return (
    <MainDiv>
      <div>
        <img src={baseUrlImage + movie.poster_path} alt="Poster Filme"/>
        <section>
          <div>
            <h2>{movie.title}</h2>
            <p>
              <FaStar className="starIcon"/> {movie.vote_average}<span>/10</span>
            </p>
            <p className="genres">{genres.join(", ")}</p>
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