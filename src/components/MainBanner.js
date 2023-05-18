import React, { useEffect, useState } from "react";
import { getMovies, categoriesTwo } from "./Tmdb";
import styled from "styled-components";
// import { API_KEY } from "./Tmdb"


const MainDivBanner = styled.div`
    width: 100vw;
    height: 90vh;
    border: blue solid;

`

function MainBanner() {

    const [movie, setMovie] = useState ({});

    const fetchRandomMovie = async () => {
        try {
            const trendingCategory = categoriesTwo.find (
                (category) => category.name === "trending"
            );

            const data = await getMovies(trendingCategory.path);
            const movies = data?.results;
            const randomIndex = Math.floor(Math.randon() * movies.length);
            setMovie (movies[randomIndex]);            
        } catch (error) {
            console.log ("MainBanner fecthRandomMovies error: ", error);
        }
    };

    useEffect (() => {
        fetchRandomMovie();
    }, []);

  return (
    <MainDivBanner className="MainBannerBox" style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.poster_path}")`,
        roundPosition: "center-center",
    }}>
        MainBanner
    </MainDivBanner>
  )
}

export default MainBanner