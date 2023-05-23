// import {useState, useEffect} from "react"
// import axios from 'axios'
// import styled from "styled-components"

// export const MainStyle = styled.main`
//     background-image: url(${props => props.back});
//     background-repeat:no-repeat;
//     background-size:100% 100%;
//     height: 100vh;
//     color:white;
// `
// export const H2 = styled.h2`
//     font-size: 3rem;
// `

// export default function Main (){
//     const [filmes, setFilmes] = useState([])
//     const [fundo, setFundo] = useState([])
    
//     const getFilmes = async () => {
//         await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=34635a3c54d72514d08fd6979b14e222&language=pt-Br&page=1').then(resposta => {
//             const allApi = resposta.data.results.map((item) => {
//                 return {
//                     ...item,
//                     poster: `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`
//                 }
//             })
//             setFilmes(allApi)
//             setFundo(arrayAntiga => arrayAntiga = filmes.slice(0,1))
//             console.log(fundo)
            
            
//         }).catch(error => alert(`desculpe, você teve um erro de requisição ${error}`))
//     }
    
    
//         useEffect(() => {
//             getFilmes()
//         })


//     return(
//         <>
//             <MainStyle back={fundo.map(item => item.poster)} id="main">
//                 <H2>Componente de Main</H2>
//                 {fundo.map(item => (
//                     <div>
//                         <h1>{item.title}</h1>
//                         <h3>IMDB{item.vote_average}</h3>
//                         <h3>Lançamento: {item.release_date}</h3>
//                         <h3>Sinopse{item.overview}</h3>
//                     </div>
//                 ))}
//             </MainStyle>
//         </>
//     )
// }






// ---------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------






import React, { useEffect, useState } from "react";
import { getMovies, categoriesTwo } from "./Tmdb";
import styled from "styled-components";
import { FaPlay, FaFilm, FaImdb, FaStar } from "react-icons/fa";


const MainDivBanner = styled.div`
    width: 100%;
    height: 90vh;
    border: blue solid;
`

const BackBlack = styled.section`
    width: inherit;
    height: inherit;
    background: linear-gradient(to top, #000000 , transparent);
`



function MainBanner() {

    const [movie, setMovie] = useState ({});

    const fetchRandomMovie = async () => {
        try {
            const trendingCategory = categoriesTwo.find (
                (categoryTwo) => categoryTwo.slug === "trending"
            );

            const data = await getMovies(trendingCategory.path); 
            const movies = data?.results;
            const randomIndex = Math.floor(Math.random() * movies?.length);
            setMovie (movies[randomIndex]);
            console.log(movies)
        } catch (error) {
            console.log ("MainBanner fecthRandomMovies error: ", error);
            alert(`desculpe, você teve um erro de requisição ${error}`);
        }
    };

    useEffect (() => {
        fetchRandomMovie();
    }, []);

    let firstDate = new Date(movie.first_air_date);
    let firstDateTwo = new Date(movie.release_date);
    
    let genres = [];
    for(let i in movie.genres) {
        genres.push( movie.genres[i].name );
    }
    let genresId = [];
    for(let i in movie.genres) {
        genres.push( movie.genre_ids[i].name );
    }



  return (
    <MainDivBanner className="MainBannerBox" style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        backgroundPosition: "center",
    }}>
        <BackBlack>
            <h1>{ movie?.title || movie?.name || movie?.original_name }</h1>
            <div>
                <h3>{ movie?.runtime }</h3> | <h3>{ genres.join(", ") || genresId.join(", ") }</h3> | <h3>{ firstDate.getFullYear() || firstDateTwo.getFullYear() }</h3>
            </div>
            <div>
                <FaStar /> { movie?.vote_average }<span>/10</span> <FaImdb />
            </div>
            <p>{ movie?.overview }</p>
            <div>
                <button> <FaPlay /> | Assistir Agora </button>
                <button> <FaFilm /> | Trailer </button>
            </div>
        </BackBlack>
    </MainDivBanner>
  )
}

export default MainBanner






// -------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------
