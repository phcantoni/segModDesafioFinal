import MainBanner from "../components/MainBanner";
import List from "../components/Lists";
// import Navbar from "./Navbar";
// import { Outlet } from "react-router-dom";



function HomeFilms() {
  return (
    <div>
      {/* <Navbar /> */}
      <MainBanner />
      <List />
      {/* <Outlet /> */}
    </div>
  )
}

export default HomeFilms