import RowSeries from "./RowMovies";
import RowSeriesTwo from "./RowMoviesTwo";
import Navbar from "./Navbar";
import React, { useState, useEffect } from "react";
import Tmdb from "./Tmdb";



function Lists() {

    const [ series, setSeries ] = useState ([]);
    const [ seriesTwo, setSeriesTwo ] = useState ([]);

    useEffect(() => {
        const loadAll = async () => {
          let list = await Tmdb.getHomeListSeries();
          setSeries(list);
  }

  loadAll();
}, [])

    useEffect(() => {
        const loadAllTwo = async () => {
        let list = await Tmdb.getHomeListSeriesTwo();
        setSeriesTwo(list);
    }

    loadAllTwo();
    }, [])

  return (
    <div>
        <Navbar />
        {series.map((item, key) => {
            return (
                <RowSeries key={key} title={item.title} path={item.path} isLarge={item.isLarge}/>
            );
        })}
        {seriesTwo.map((item, key) => {
            return (
                <RowSeriesTwo key={key} title={item.title} path={item.path} isLarge={item.isLarge}/>
            );
        })}
    </div>
  )
}

export default Lists