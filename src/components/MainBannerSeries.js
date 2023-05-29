import React, { useState } from "react";
import styled from "styled-components";
import { FaPlay, FaFilm, FaStar } from "react-icons/fa";
import ReactPlayer from "react-player";
import movieTrailer from "movie-trailer";

const MainSection = styled.section`
    width: 100%;
    height: 100vh;
    // border: red solid;
`

const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: inherit;
    height: inherit;
    background: linear-gradient(to top, #000000, transparent);
    // border: blue solid;

        h1 {
            width: 80vw;
            font-size: 27px;
            // border: yellow solid;
        }

        div {
            display: flex;
            align-items: center;
            width: 80vw;
            height: 7vh;
            // border: green solid;

                :last-of-type {
                    height: 14vh;
                }
        }

        .starIcon {
            width: 1.5vw;
            height: 3vh;
            color: #f3cd32;
        }

        h3 {
            margin: 0 3px;
            font-size: 13px;
            font-weight: 100;
            // border: aqua solid;
        }

        span {
            font-size: 10px;
            padding-bottom: 1.5px;
        }

        p {
            width: 80vw;
            padding-right: 40%;
            // border: hotpink solid;
        }

        button {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 14vw;
            height: 7.5vh;
            font-family: "Open Sans", sans-serif;
            font-size: 14px;
            font-weight: 400;
            color: #FFFFFF;
            background-color: #D53A00;
            gap: 0.5em;
            margin-right: 1em;
            border-radius: 30px;
            border: none;

                :hover {
                    cursor: pointer;
                    background-color: #aa3500;
                    transition: 0.6s;
                }

                :last-of-type {
                width: 13vw;
                background-color: #717171;

                :hover {
                    cursor: pointer;
                    background-color: #4F4F4F;
                    transition: 0.6s;
                }
            }
        }

        .trailerIcon {
            width: 1.5vw;
            height: 3vh;
        }

        h4 {
            width: 80vw;
            height: 6vh;
            font-size: 15px;
            font-weight: 400;
        }
`

export default ({item}) => {
    console.log(item);

    const [trailerUrl, setTrailerUrl] = useState("");

    const handleOnClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl("")
        } else {
            movieTrailer(movie.title || movie.name || movie.original_name || "")
            .then((url) => {
                setTrailerUrl(url)
            })
            .catch((error) => {
                console.log("Error fetching movie trailer: ", error);
            })
        }
    }

    let firstDate = new Date(item.first_air_date);
    let firstDateTwo = new Date(item.release_date);
    let genres = [];
    for(let i in item.genres) {
        genres.push(item.genres[i].name);
    }

    let description = item.overview;
    if (description.length > 200) {
        description = description.substring(0, 500)+"..."
    }

    return (
        <MainSection style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${item.backdrop_path})`
        }}>
            <MainDiv>
                <h1>{item.original_name || item.title || item.name}</h1>
                <div>
                    <FaStar className="starIcon"/> <h3>{item.vote_average}<span>/10</span></h3>
                    <h3>{firstDate.getFullYear() || firstDateTwo.getFullYear()}</h3>
                    <h3>{item.number_of_seasons} Temporada{item.number_of_seasons !== 1 ? "s" : ""}</h3>
                </div>
                <p>{description}</p>
                {trailerUrl && <ReactPlayer url={trailerUrl} playing={true}/>}
                <div>
                    <button><FaPlay />Assistir Agora</button>
                    <button onClick={() => handleOnClick(item)}><FaFilm className="trailerIcon"/>Trailer</button>
                </div>
                <h4><strong>Gênero: </strong>{genres.join(", ")} </h4>
            </MainDiv>
        </MainSection>
    );
}