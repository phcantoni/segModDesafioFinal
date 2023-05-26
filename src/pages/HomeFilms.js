import MainBannerMovies from "../components/MainBannerMovies";
import List from "../components/Lists";
import Header from "../components/Header";

import React, {useEffect, useState} from "react";
import TmdbTwo from "../components/TmdbTwo";


function HomeFilms() {


  const [featureData, setFeatureData] = useState (null);

useEffect(() => {
  const loadAll = async () => {
    let list = await TmdbTwo.getHomeList();

    let trending = list.filter(i=>i.slug === "trending");
    let randomChosen = Math.floor(Math.random() * (trending[0].path.results.length - 1));
    let chosen = trending[0].path.results[randomChosen];
    let chosenInfo = await TmdbTwo.getMovieInfo(chosen.id, 'movie');
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
      <List />
    </div>
  )
}

export default HomeFilms