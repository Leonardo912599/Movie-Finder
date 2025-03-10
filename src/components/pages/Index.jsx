import React from 'react';

import CarrouselPeliculas from '../CarrouselPeliculas';

const Index = () => {
    return (
      <div className="flex flex-col items-center w-full">
        <CarrouselPeliculas nombre="Peliculas en Cines" url="https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1" />
        <CarrouselPeliculas nombre="Mejores Calificadas" url="https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1" />
        <CarrouselPeliculas nombre="Proximas Peliculas" url="https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1" />
      </div>
    );
  };
  

export default Index;
