import Header from "../components/Header";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";


const MainDiv = styled.div`
    width: 100vw;

        h1 {
          display: flex;
          justify-content: center;
          align-items: flex-end;
          height: 30vh;
          margin-bottom: 2em;

            span {
              margin-left: 1em;
            }
        }
`

const MainDivSection = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    width: 85vw;
    margin: 0 auto;
    // border: red solid;
`


const urlSearch = "https://api.themoviedb.org/3/search/movie/"
const API_KEY = "5b481d7af8306d27b48eede041e4328c";

const SearchFilms = () => {
  

  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");


  fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`)
    .then(response => response.json())
    .then(data => setMovies(data.results))


  useEffect(() => {
    const searchWithQueryURL = `${urlSearch}?${API_KEY}&query=${query}`;
    
    fetch(searchWithQueryURL);
  }, [query]);


  return (
    <MainDiv>
      <Header />
      <h1>Resultados para:  <span>{query}</span></h1>
      {movies.length === 0 && <p>Carregando...</p>}
      <MainDivSection>
          {movies.map((movie) => {
          return (<MovieCard key={movie.id} movie={movie} />)})}
      </MainDivSection>
    </MainDiv>
  )
}

export default SearchFilms