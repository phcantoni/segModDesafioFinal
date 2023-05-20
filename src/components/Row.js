import React, { useState, useEffect } from "react";
import { getMovies } from "./Tmdb";
import styled from "styled-components";
import Carousel, { consts } from "react-elastic-carousel";

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
            
            <Carousel
                itemsToScroll={3}
                itemsToShow={5}
                // enableAutoPlay autoPlaySpeed={2000}
                itemPadding={[30, 30]}
                // itemPosition={consts.END} 
                >
            {movies?.map((movie) => {
                return (
                    <div>
                        <img key={movie.id} src={`${baseUrlImage}${movie.poster_path}`} alt={movie.name}></img>
                        <h2>{movie.title || movie.name || movie.original_name}</h2>
                    </div>
                );
            })}
            </Carousel>    
        </DivCards>
    </div>
  )
}

export default Row