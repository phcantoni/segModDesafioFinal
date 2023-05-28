import MainBannerMovies from "../components/MainBannerMovies";
import MovieList from "../components/MovieLists";
import Header from "../components/Header";

import React, {useEffect, useState} from "react";
import Tmdb from "../components/Tmdb";


function HomeFilms() {


  const [featureData, setFeatureData] = useState (null);

useEffect(() => {
  const loadAll = async () => {
    let list = await Tmdb.getHomeListTwo();

    let trending = list.filter(i=>i.slug === "trending");
    let randomChosen = Math.floor(Math.random() * (trending[0].path.results.length - 1));
    let chosen = trending[0].path.results[randomChosen];
    let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'movie');
    setFeatureData(chosenInfo);
  }

  loadAll();
}, [])


  return (
    <div>
      <section>
        <Header />
      </section>
      <section>
          {featureData &&
          <MainBannerMovies item={featureData} />}
      </section>
      <MovieList />
    </div>
  )
}

export default HomeFilms