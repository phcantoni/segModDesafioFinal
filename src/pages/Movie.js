import Header from "../components/Header";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BsGraphUp, BsWallet2, BsHourglassSplit, BsFillFileEarmarkTextFill } from "react-icons/bs";
import { FaPlay, FaFilm } from "react-icons/fa";
import MovieCard from "../components/MovieCard";
import ReactPlayer from "react-player";
import movieTrailer from "movie-trailer";

const MainDiv = styled.div`
    width: 100%;
    height: 100vh;

        .tagDivOne {
          width: inherit;
          height: inherit;
          z-index: 2;
        }
`

const TagSection = styled.section`
      display: flex;
      height: 100vh;
      background-color: rgb(0, 0, 0, 0.90);
      overflow: hidden;

          .tagDivTwo {
            width: 50vw;
          }

          .tagDivTwo h2 {
            height: 14vh;
          }

          .tagDivTwo div {

                :last-of-type {
                  display: flex;
                  align-items: center;
                  height: 10vh;
                }
          }

          .tagDivTwo h3 {
            font-size: 15px;
            margin-top: 10px;
          }

          .tagDivTwo .firstH3 {
            margin-top: 0;
          }

          .tagDivTwo .lastP {
            height: 30vh;
            overflow: hidden;
          }

          .tagDivTwo button {
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
`

const TagSectionDiv = styled.div`
      display: flex;
      width: 100vw;
      height: 100vh;
      padding-top: 6em;
      background-color: rgb(0, 0, 0, 0.90);
`

const urlSearch = "https://api.themoviedb.org/3/movie/";
const API_KEY = "5b481d7af8306d27b48eede041e4328c";

const Movie = () => {


  const {id} = useParams();
  const [ movie, setMovie ] = useState(null);

  const getMovies = async () => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?language=pt-BR&api_key=${API_KEY}`)
    .then(response => response.json())
    .then(data => setMovie(data))
  }

  console.log(getMovies);
  
  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    })
  }

  useEffect(() => {
    const movieUrl = `${urlSearch}${id}?language=pt-BR&${API_KEY}`;

    getMovies(movieUrl);
  }, []);


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
    };
  // let genres = [];
  //   for(let i in movie.genres) {
  //       genres.push(movie.genres[i].name);
  //   }

  // let description = movie.overview;
  //   if (description.length > 200) {
  //       description = description.substring(0, 500)+"..."
  //   };


  return (
    <MainDiv>
      <div className="tagDivOne">
        <Header />
        {movie === 0 && <p>Carregando...</p>}
        {movie && (
          <TagSection style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path})`,
            }}>
            <TagSectionDiv>
              <MovieCard className="tagMovieCard" movie={movie} showLink={false} />
              <div className="tagDivTwo">
                <h2>{movie.tagline}</h2>
                <div>
                  <h3 className="firstH3"><BsWallet2/> Orçamento: </h3>
                  <p>{formatCurrency(movie.budget)}</p>
                </div>
                <div>
                  <h3><BsGraphUp/> Receita: </h3>
                  <p>{formatCurrency(movie.revenue)}</p>
                </div>
                <div>
                  <h3><BsHourglassSplit/> Duração e Data de Lançamento: </h3>
                  <p>{movie.runtime} minutos | {movie.first_air_date || movie.release_date}</p>
                </div>
                <div>
                  <h3><BsFillFileEarmarkTextFill/> Descrição: </h3>
                  <p className="lastP">{movie.overview}</p>
                </div>
                <div>
                  <button> <FaPlay /> Assistir Agora </button>
                  <button onClick={() => handleOnClick(movie)}> <FaFilm className="trailerIcon"/> Trailer </button>
                </div>
              </div>
            {trailerUrl && <ReactPlayer url={trailerUrl} playing={true}/>}
            </TagSectionDiv>
          </TagSection>
        )}
      </div>
    </MainDiv>
  )
}

export default Movie