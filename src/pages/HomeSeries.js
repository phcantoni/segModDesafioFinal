import Header from "../components/Header";
import Lists from "../components/Lists"


import React, {useEffect, useState} from "react";
import TmdbTwo from "../components/TmdbTwo";
import MainBannerSeries from "../components/MainBannerSeries";



function HomeSeries() {

const [featureData, setFeatureData] = useState (null);

useEffect(() => {
  const loadAll = async () => {
    let list = await TmdbTwo.getHomeList();

    let news = list.filter(i=>i.slug === "news");
    let randomChosen = Math.floor(Math.random() * (news[0].path.results.length - 1));
    let chosen = news[0].path.results[randomChosen];
    let chosenInfo = await TmdbTwo.getMovieInfo(chosen.id, 'tv');
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
          <MainBannerSeries item={featureData} />}
        </section>
        <Lists />
    </div>
  )
}

export default HomeSeries