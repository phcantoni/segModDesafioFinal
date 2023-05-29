import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const MainDiv = styled.div`
  // border: seagreen solid;
  
    h1 {
      display: flex;
      justify-content: center;
      align-items: flex-end;
      height: 28vh;
      margin-bottom: 1.5em;
      // border: blue solid;
    }
`

const MainDivTwo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  // border: red solid;


    section {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 25vw;
      height: 100vh;
      // border: green solid;
    }
    
    .divOne {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      width: 20vw;
      height: 90vh;
      background-color: #111;
      padding-top: 10px;
      border-radius: 3px;
      // border: yellow solid;
    }

    .divTwo {
      // border: magenta solid;
    }

    img {
      width: 18vw;
      height: 60vh;
      margin-bottom: 10px;
      // border: aqua solid;
    }

    h2 {
      width: 18vw;
      font-size: 15px;
      // border: hotpink solid;
    }

    p {
      display: flex;
      align-items: center;
      width: 18vw;
      gap: 3px;
    }

    .starIcon {
      color: yellow;
    }

    h3 {
      font-size: 15px;
      // border: orangered solid;
    }

    span {
      font-size: 10px;
      font-weight: 100;
    }

    h4 {
      width: 2.3em;
      font-size: 12px;
      font-weight: 100;
      white-space: nowrap;
      overflow: hidden;
      // border: white solid;
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 18vw;
      height: 8vh;
      font-size: 15px;
      font-weight: 400;
      color: #111;
      margin-bottom: 10px;
      border: white solid;
      border-radius: 3px;

          :hover {
            cursor: pointer;
            color: white;
            background-color: #111;
            transition: 0.4s;
          }
    }
`

const API_KEY = "5b481d7af8306d27b48eede041e4328c";
const baseUrlImage = "https://image.tmdb.org/t/p/w500/";

function Crime({showLink = true}) {

    const [itens, setItens] = useState([]);

    fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=80&language=pt-BR&api_key=${API_KEY}`)
            .then(response => response.json())
            .then(data => setItens(data.results))


    useEffect(() => {
        const fecthing = "https://api.themoviedb.org/3/discover/movie?with_genres=80&language=pt-BR&api_key=${API_KEY}";

        fetch(fecthing)
        // const fetchData = async () => {
        //     const result = await fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
        //     .then(response => response.json())
        //     .then(data => data)

        //     setItens(result);
        // }
        // fetchData()
    }, [])
    


  return (
    <MainDiv>
      <Header />
      <h1>Filmes de Crime:</h1>
      <MainDivTwo>
          {itens.map((item) => {
              return (
              <>
              <section>
                <div className="divOne">
                  <div className="divTwo">
                    <img key={item.id} src={`${baseUrlImage}${item.poster_path}`} alt={item.name} ></img>
                    <h2>{item.title || item.name || item.original_name}</h2>
                    <p><FaStar className="starIcon"/> <h3>{item.vote_average}<span>/10</span></h3> | <h4>{item.first_air_date || item.release_date}</h4></p>
                    {/* <h3>{ firstDate.getFullYear() || firstDateTwo.getFullYear() }</h3> */}
                  </div>
                  {showLink && <Link to={`/movie/${item.id}`} style={{
                    textDecoration: "none"
                  }}><button>Detalhes</button></Link>}
                </div>
              </section>
              </>
              )
          })}
      </MainDivTwo>
    </MainDiv>
  )
}

export default Crime