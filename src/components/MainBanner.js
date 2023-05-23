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
import { FaPlay, FaFilm, FaStar } from "react-icons/fa";
import Imdb from "./assets/Imdb.png";
import Header from "./Header";


const MainDivBanner = styled.div`
    width: 100%;
    height: 100vh;
    // border: blue solid;
`

const BackBlack = styled.section`

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
            // border: red solid;   
        }
        section h1 {
            width: 80vw;
            font-size: 27px;
            // border: yellow solid;
        }

        section div {
            display: flex;
            align-items: center;
            width: 80vw;
            // border: green solid;

                :last-of-type {
                    height: 14vh;
                }
        }

        section h3 {
            font-size: 10px;
            // border: hotpink solid;
        }

        section h4 {
            display: flex;
            justify-content: center;
            align-items: flex-end;
            width: 6vw;
            font-size: 18px;
            font-weight: 400;
            // border: tomato solid;
        }

        section span {
            font-size: 10px;
            padding-bottom: 1.5px;
        }

        section p {
            width: 80vw;
            padding-right: 40%;
            // border: aqua solid;
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

            // :hover {
            //     color: 
            // }
        }
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
        <Header />
            <section>
                <h1>{ movie?.title || movie?.name || movie?.original_name }</h1>
                <div>
                    <h3>Duração: { movie?.runtime }</h3> | <h3>Gênero(s): { genres.join(", ") || genresId.join(", ") }</h3> | <h3>{ firstDate.getFullYear() || firstDateTwo.getFullYear() }</h3>
                </div>
                <div>
                    <FaStar style={{
                        width: "2vw",
                        height: "4vh",
                        color: "#f3cd32"
                    }} /> <h4>{ movie?.vote_average }<span>/10</span></h4> <img src={Imdb} alt="Logo Imdb"/>
                </div>
                <p>{ movie?.overview }</p>
                <div>
                    <button> <FaPlay /> Assistir Agora </button>
                    <button> <FaFilm style={{
                        width: "2vw",
                        height: "4vh"
                    }}/> Trailer </button>
                </div>
            </section>
        </BackBlack>
    </MainDivBanner>
  )
}

export default MainBanner






// -------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------
