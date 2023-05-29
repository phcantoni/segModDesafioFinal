import Header from "../components/Header";
import SerieLists from "../components/SerieLists";

import React, { useEffect, useState } from "react";
import Tmdb from "../components/Tmdb";
import MainBannerSeries from "../components/MainBannerSeries";

function HomeSeries() {
  const [featureData, setFeatureData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeListSeries();

      let news = list.filter((i) => i.slug === "news");
      let randomChosen = Math.floor(
        Math.random() * (news[0].path.results.length - 1)
      );
      let chosen = news[0].path.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, "tv");
      setFeatureData(chosenInfo);
    };

    loadAll();
  }, []);

  return (
    <div>
      <section>
        <Header />
      </section>
      <section>
        {featureData && <MainBannerSeries item={featureData} />}
      </section>
      <SerieLists />
    </div>
  );
}

export default HomeSeries;
