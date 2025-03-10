import React, { useEffect, useState } from 'react';
import PeliculaCard from './PeliculaCard';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const CarrouselPeliculas = ({ url, nombre }) => {
  const api_key = '9a50011305debfe6f5bfe14a5694843c';
  const [peliculas, setPeliculas] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [peliculasPorPagina, setPeliculasPorPagina] = useState(6);
  const [nombre_categoria, setNombre_categoria] = useState('')

  const fetchPeliculas = async () => {
    const response = await axios.get(`${url}&api_key=${api_key}`);
    const peliculas = response.data.results.slice(0, 18);
    setPeliculas(peliculas);
  };

  useEffect(() => {
    fetchPeliculas();
    enviarNombre()
    const handleResize = () => {
      if (window.innerWidth <= 640) {
          setPeliculasPorPagina(2);
      } else if (window.innerWidth <= 768) {
          setPeliculasPorPagina(3);
      } else if (window.innerWidth <= 1024) {
          setPeliculasPorPagina(4);
      }else if(window.innerWidth <= 1280){
        setPeliculasPorPagina(5);
      }else {
          setPeliculasPorPagina(6);
      }
  };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - peliculasPorPagina, 0));
  };

  const handleNext = (totalPeliculas = peliculas.length) => {
    setStartIndex((prev) =>
      prev + peliculasPorPagina < totalPeliculas ? prev + peliculasPorPagina : prev
    );
  };

  const peliculasAMostrar = peliculas.slice(startIndex, startIndex + peliculasPorPagina);
  
  const enviarNombre = () => {
    switch (nombre) {
      case "Peliculas en Cines":
        setNombre_categoria('en_cines')
        break;
      case "Mejores Calificadas":
        setNombre_categoria('mejores_calificadas')
        break;
      case "Proximas Peliculas":
        setNombre_categoria('proximas_peliculas')
        break;
    }
  }
  return (
    <div className="flex flex-col w-11/12 items-center justify-center my-[25px]">
      <div className="flex flex-row my-9 w-full items-center justify-between">
        <p className="text-white text-xl md:text-2xl">{nombre}</p>
        <div className="flex flex-row items-center">
          <FontAwesomeIcon
            className="text-white cursor-pointer mr-2 h-[20px] md:h-[24px]"
            icon={faCaretLeft}
            onClick={() => handlePrev()}
          />
          <FontAwesomeIcon
            className="text-white cursor-pointer mr-4 h-[20px] md:h-[24px]"
            icon={faCaretRight}
            onClick={() => handleNext()}
          />
          <Link to={`/peliculas/${nombre_categoria}/page/1`} className="text-white text-sm md:text-base hover:underline">Ver todo</Link>
        </div>
      </div>

      <div className="flex flex-row justify-center w-full gap-4">
        {peliculasAMostrar.map((pelicula) => (
          <Link key={pelicula.id} to={`/pelicula/${pelicula.id}`} >
            <PeliculaCard key={pelicula.id} pelicula={pelicula} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CarrouselPeliculas;
