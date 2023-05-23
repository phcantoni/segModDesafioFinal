import React, { useState, useEffect } from "react";
import { getMovies } from "./Tmdb";
import styled from "styled-components";


const ConteinerRow = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    // border: aqua solid;
`

const MainDiv = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 160vh;
    // border: hotpink solid;
    
`

const CategTitle = styled.h2`
    display: flex;
    align-items: flex-end;
    width: 83vw;
    height: 10vh;
    // border: red solid;
`

const DivCards = styled.div`
    
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: 141vh;
    overflow: hidden;
    // border: green solid;
    
        section {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 17vw;
            height: 70vh;
            padding-top: 1em;
            // border: yellow solid;
        }

        img {
            max-width: 100%;
            width: 15vw;
            height: 50vh;
        }

        h2 {
            width: 15vw;
            font-size: 12px;
            paddin-top: 1em;
            // border: tomato solid;
        }
`

const DateFilm = styled.h3`
    width: 2.3em;
    font-size: 12px;
    font-weight: 100;
    white-space: nowrap;
    overflow: hidden;
    // border: green solid;
`

const DivPages = styled.div`

        ul {
            display: flex;
            justify-content: space-between;
            width: 28vw;
            // border: blue solid;
        }

        li {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 3em;
            height: 3em;
            list-style: none;
            border-radius: 50%;
            border: white solid 1px;

            :last-of-type {
                width: 6vw;
                border-radius: 5px;
            }

            :nth-of-type(5) {
                display: flex;
                align-items: flex-end;
                width: 1.2em;
                border-radius: 0px;
                border: none;
            }

    }
`


const baseUrlImage = "https://image.tmdb.org/t/p/original/";

function RowTwo({title, path}) {

    const [ movies, setMovies ] = useState ([]);

    const fetchMoviesTwo = async (_path) => {
        try {
            const data = await getMovies (_path);
            console.log(data);
            setMovies(data?.results);
        } catch (error) {
            console.log ("Erro fetchMoviesTwo: ", error);
        }
    }
    
    useEffect (() => {
        fetchMoviesTwo(path);
    }, [path])

  return (
    <ConteinerRow className="RowBox">
        <CategTitle className="rowTitle">{title}</CategTitle>
        <MainDiv className="rowCards">
            <DivCards>
                {movies.length === 0 && <p>Carregando...</p>}
                {movies?.map((movie) => {
                    return (
                        <section>
                            <img key={movie.id} src={`${baseUrlImage}${movie.poster_path}`} alt={movie.name}></img>
                            <div>
                                <h2>{movie.title || movie.name || movie.original_name}</h2>
                                <DateFilm>{movie.first_air_date || movie.release_date}</DateFilm>
                            </div>
                        </section>
                    );
                })}
            </DivCards>
            <DivPages>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>...</li>
                    <li>322</li>
                    <li>Último</li>
                </ul>
            </DivPages>
        </MainDiv>
    </ConteinerRow>
  );
}

export default RowTwo