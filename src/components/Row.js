import React, { useState, useEffect } from "react";
import { getMovies } from "./Tmdb";
import styled from "styled-components";

const DivCards = styled.div`
    display: flex;


    img {
        width: 15vw;
    }
`
const CategTitle = styled.h2`
    display: flex;
    align-items: center;
    height: 20vh;
`


const baseUrlImage = "https://image.tmdb.org/t/p/original/";

function Row({title, path}) {

    const [ movies, setMovies ] = useState ([]);

    const fetchMovies = async (_path) => {
        try {
            const data = await getMovies (_path);
            console.log("data");
            setMovies(data?.results);
        } catch (error) {
            console.log ("Erro fetchMovies: ", error);
        }
    }
    
    useEffect (() => {
        fetchMovies(path);
    }, [path])


  return (
    <div className="RowBox">
        <CategTitle className="rowTitle">{title}</CategTitle>
        <DivCards className="rowCards">
            {movies.length === 0 && <p>Carregando...</p>}
            {movies?.map((movie) => {
                return (
                    <img key={movie.id} src={`${baseUrlImage}${movie.poster_path}`} alt={movie.name}></img>
                );
            })}
        </DivCards>
    </div>
  )
}

export default Row