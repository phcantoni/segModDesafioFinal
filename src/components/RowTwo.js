import React, { useState, useEffect } from "react";
import { getMovies } from "./Tmdb";
import styled from "styled-components";

const MainDiv = styled.div`

    width: 100%;
    height: 250vh;
    border: hotpink solid;

`
const DivCards = styled.div`
    
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    border: green solid;
    
        div {
            display: flex;
            flex-direction: column;
            justify-content: center; 
            align-items: center;
            width: 17vw;
            height: 70vh;
            border: yellow solid;
        }

        img {
            width: 15vw;
            height: 50vh;
        }
`
const CategTitle = styled.h2`
    display: flex;
    align-items: center;
    height: 20vh;
`


const baseUrlImage = "https://image.tmdb.org/t/p/original/";

function RowTwo({title, path}) {

    const [ movies, setMovies ] = useState ([]);

    const fetchMoviesTwo = async (_path) => {
        try {
            const data = await getMovies (_path);
            console.log("data");
            setMovies(data?.results);
        } catch (error) {
            console.log ("Erro fetchMoviesTwo: ", error);
        }
    }
    
    useEffect (() => {
        fetchMoviesTwo(path);
    }, [path])

  return (
    <div className="RowBox">
        <CategTitle className="rowTitle">{title}</CategTitle>
        <MainDiv className="rowCards">
            <DivCards>
                {movies.length === 0 && <p>Carregando...</p>}
                {movies?.map((movie) => {
                    return (
                        <div>
                            <img key={movie.id} src={`${baseUrlImage}${movie.poster_path}`} alt={movie.name}></img>
                            <h2>{movie.title || movie.name || movie.original_name}</h2>
                        </div>
                    );
                })}
            </DivCards>
        </MainDiv>
    </div>
  );
}

export default RowTwo