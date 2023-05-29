import React, { useState } from "react";
import styled from "styled-components";
import { FaPlay, FaFilm, FaStar } from "react-icons/fa";
import Imdb from "./assets/Imdb.png";
import ReactPlayer from "react-player";
import movieTrailer from "movie-trailer";


    
const MainSection = styled.section`
    width: 100%;
    height: 100vh;
`

const MainDiv = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: inherit;
    height: inherit;

        section {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: center;
            width: inherit;
            height: inherit;
            background: linear-gradient(to top, #000000 , transparent);
        }
        section h1 {
            width: 80vw;
            font-size: 27px;
        }

        section div {
            display: flex;
            align-items: center;
            width: 80vw;

                :last-of-type {
                    height: 14vh;
                }
        }

        section h3 {
            margin: 0 3px;
            font-size: 13px;
            font-weight: 100;
        }

        .starIcon {
            width: 2vw;
            height: 4vh;
            color: #f3cd32;
        }

        section h4 {
            display: flex;
            justify-content: center;
            align-items: flex-end;
            width: 6vw;
            font-size: 18px;
            font-weight: 400;
        }

        section span {
            font-size: 10px;
            padding-bottom: 1.5px;
        }

        section p {
            width: 80vw;
            padding-right: 40%;
        }

        section button {
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

        .loading {
            position: fixed;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            z-index: 99;
            background-color: #000;
            display: flex;
            justify-content: center;
            align-items: center;
        }
`

export default ({item}) => {
    console.log(item);

    let firstDate = new Date(item.first_air_date);
    let firstDateTwo = new Date(item.release_date);

    let genres = [];
    for(let i in item.genres) {
        genres.push(item.genres[i].name);
    }

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

    let description = item.overview;
    if (description.length > 200) {
        description = description.substring(0, 500)+"..."
    }

    return (
        <MainSection style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${item.backdrop_path || item.poster_path})`
        }}>
            <MainDiv>
                <section>
                    <h1>{item.original_name || item.title || item.name}</h1>
                    <div>
                        <h3>{item.runtime} Minutos</h3> | 
                        <h3>{genres.join(", ")}</h3> | 
                        <h3>{firstDate.getFullYear() || firstDateTwo.getFullYear()}</h3>
                    </div>
                    <div>
                        <FaStar className="starIcon"/> <h4>{item.vote_average}<span>/10</span></h4> <img src={Imdb} alt="Logo Imdb"/>
                    </div>
                    <p>{description}</p>
                    {trailerUrl && <ReactPlayer url={trailerUrl} playing={true}/>}
                    <div>
                        <button> <FaPlay /> Assistir Agora </button>
                        <button onClick={() => handleOnClick(item)}> <FaFilm className="trailerIcon"/> Trailer </button>
                    </div>
                </section>
                {item.length <= 0 &&
                <div className="loading">
                    <img src="https://media.wired.com/photos/592744d3f3e2356fd800bf00/master/w_2560%2Cc_limit/Netflix_LoadTime.gif" />
                </div>
                }
            </MainDiv>
        </MainSection>
    );
}