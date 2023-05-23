import React, { useState, useEffect } from "react";
import { getMovies } from "./Tmdb";
import styled from "styled-components";
import Carousel, { consts } from "react-elastic-carousel";

const ConteinerRow = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    // border: aqua solid;
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
    justify-content: center;
    align-items: center;
    height: 80vh;
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

const DateFilm =styled.h3`
    width: 2.3em;
    font-size: 12px;
    font-weight: 100;
    white-space: nowrap;
    overflow: hidden;
    // border: green solid;
`


const baseUrlImage = "https://image.tmdb.org/t/p/original/";

function Row({title, path}) {

    const [ movies, setMovies ] = useState ([]);

    const fetchMovies = async (_path) => {
        try {
            const data = await getMovies (_path);
            console.log(data);
            setMovies(data?.results);
        } catch (error) {
            console.log ("Erro fetchMovies: ", error);
        }
    }
    
    useEffect (() => {
        fetchMovies(path);
    }, [path])


        // let firstDate = new Date(movies.first_air_date);
        // let firstDateTwo = new Date(movies.release_date);


  return (
    <ConteinerRow className="RowBox">
        <CategTitle className="rowTitle">{title}</CategTitle>
        <DivCards className="rowCards">
            {movies.length === 0 && <p>Carregando...</p>}
            
            <Carousel
                itemsToScroll={3}
                itemsToShow={5}
                // enableAutoPlay autoPlaySpeed={2000}
                itemPadding={[30, 30]}
                // itemPosition={consts.END} 
                style={{
                    // border: "red solid",
                    width: "95vw",
            }}
                >
            {movies?.map((movie) => {
                return (
                    <div>
                        <img key={movie.id} src={`${baseUrlImage}${movie.poster_path}`} alt={movie.name}></img>
                        <h2>{movie.title || movie.name || movie.original_name}</h2>
                        <DateFilm>{movie.first_air_date || movie.release_date}</DateFilm>
                        {/* <h3>{ firstDate.getFullYear() || firstDateTwo.getFullYear() }</h3> */}
                    </div>
                );
            })}
            </Carousel>    
        </DivCards>
    </ConteinerRow>
  )
}

export default Row