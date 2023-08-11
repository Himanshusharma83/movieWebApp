import React from 'react';
import './App.css';
import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import Header from './components/header/header';
import Home from './pages/Home/Home';
import Movielist from './movieList/Movielist';
import Movie from './movieDetails/movie';

function App() {
  return (
    <div className="App">
    
     <BrowserRouter>
     <Header />
      <Routes>
        <Route index element={<Home />}/>
        <Route path="movie/:id" element={<Movie />}></Route>
        <Route path='movies/:type' element={<Movielist />}/>
        <Route path='/*' element={<h1>Error Page</h1>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
