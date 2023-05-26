import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeFilms from './pages/HomeFilms';
import Movie from './pages/Movie';
import SearchFilms from './pages/SearchFilms';
import HomeSeries from "./pages/HomeSeries";
import Login from "./pages/Login"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<HomeFilms />}/>
          <Route path="/movie/:id" element={<Movie />}/>
          <Route path="/searchfilms" element={<SearchFilms />}/>
          <Route path="/homeseries" element={<HomeSeries />}/>
          <Route path="/login" element={<Login />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();



//<Route path="serie/:id" element={<Serie />}/> 

//<Route path="searchseries" element={<SearchSeries />}/>
//<Route path="popular" element={<Popular />}/>
//<Route path="drama" element={<Drama />}/>
//<Route path="action" element={<Action />}/>
//<Route path="adventure" element={<Adventure />}/>
//<Route path="comedy" element={<Comedy />}/>
//<Route path="crime" element={<Crime />}/>
//<Route path="fantasy" element={<Fantasy />}/>
//<Route path="family" element={<Family />}/>