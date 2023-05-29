import RowMovies from "./RowMovies";
import RowMoviesTwo from "./RowMoviesTwo";
import Navbar from "./Navbar";
import React, { useState, useEffect } from "react";
import Tmdb from "./Tmdb";



function Lists() {

    const [ movies, setMovies ] = useState ([]);
    const [ moviesTwo, setMoviesTwo ] = useState ([]);

    
    // const [itemsPerpage, setItemsPerpage] = useState(10);
    // const [currentPage, setCurrentPage] = useState(0);

    // const pages = Math.ceil(moviesTwo.length / itemsPerpage);

    useEffect(() => {
        const loadAll = async () => {
          let list = await Tmdb.getHomeList();
          setMovies(list);
  }

  loadAll();
}, [])

    useEffect(() => {
        const loadAllTwo = async () => {
        let list = await Tmdb.getHomeListTwo();
        setMoviesTwo(list);
        console.log("Aqui está: ", loadAllTwo);
    }

    loadAllTwo();
    }, [])

  return (
    <div>
        <Navbar />

        {/* <div>
            {pages}
        </div> */}

        {movies.map((item, key) => {
            return (
                <RowMovies key={key} title={item.title} path={item.path} isLarge={item.isLarge}/>
            );
        })}
        {moviesTwo.map((item, key) => {
            return (
                <RowMoviesTwo key={key} title={item.title} path={item.path} isLarge={item.isLarge}/>
            );
        })}
    </div>
  )
}

export default Lists