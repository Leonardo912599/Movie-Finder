
const PeliculaCard = ({ pelicula }) => {
    const fechaLanzamiento = new Date(pelicula.release_date);
  
    return (
      <div className="flex flex-col w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] h-auto bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
        <img
          src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
          alt={pelicula.title}
          className="w-full h-auto object-cover rounded-t-lg"
        />
        <div className="p-2">
          <h4 className="text-white text-sm sm:text-base md:text-lg font-semibold truncate">
            {pelicula.title}
          </h4>
          <p className="text-gray-400 text-xs sm:text-sm">
            {fechaLanzamiento.getFullYear()}
          </p>
        </div>
      </div>
    );
  };
  
  export default PeliculaCard;
  