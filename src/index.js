import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Films from './pages/Films';
import Movie from './pages/Movie';
import SearchFilms from './pages/SearchFilms';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Films />}/>
          <Route path="/movie/:id" element={<Movie />}/>
          <Route path="/searchfilms" element={<SearchFilms />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


//<Route path="series" element={<Series />}/>

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