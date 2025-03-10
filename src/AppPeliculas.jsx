import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
import Index from './components/pages'
import './styles.css'
import PeliculaDetalle from './components/pages/PeliculaDetalle'
import PeliculaGenero from './components/pages/PeliculaGenero'
import PeliculasVerTodo from './components/pages/PeliculasVerTodo'
import BuscarPelicula from './components/pages/BuscarPelicula'
import MasPopular from './components/pages/MasPopular'

import Series from './components/pages/Series'
import SerieDetalle from './components/pages/SerieDetalle'

const AppPeliculas = () => {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path='/pelicula/:id' element={<PeliculaDetalle />} />
        <Route path='/serie/:id' element={<SerieDetalle />} />
        <Route path='/genero/:genr/page/:page' element={<PeliculaGenero />} />
        <Route path='/peliculas/:ver/page/:page' element={<PeliculasVerTodo />} />
        <Route path='/buscar-pelicula/:pelicula/page/:page' element={<BuscarPelicula />} />
        <Route path='/mas-popular/page/:page' element={<MasPopular />} />
        <Route path='/series/page/:page' element={<Series />} />
      </Routes>
    </>
  );
};


export default AppPeliculas
