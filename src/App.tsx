import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './homePage/HomePage';
import Movies from './movies/Movies';
import { Movie } from './types';
import './style.css'

function App() {
  const [movieList, setMovieList] = useState<Movie[]>([]);
  const [selectedMovie, setSelected] = useState<Movie | null>(null);
  return (
    <>
      <div className="">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies/:id" element={<Movies /> }  />
          {/* <Route path="/movies" element={<Movies />} /> */}

        </Routes>
      </div>
    </>
  );

}

export default App;
