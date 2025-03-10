import { useState, useEffect } from 'react'
import ListaPeliculas from '../ListaPeliculas';
import Paginacion from '../Paginacion';
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";
import ListaSeries from '../ListaSeries';

const Series = () => {
  const { page } = useParams();
  const navigate = useNavigate();
  const api_key = "9a50011305debfe6f5bfe14a5694843c";
  const [series, setSeries] = useState([]);
  const [paginaActual, setPaginaActual] = useState(() => (page ? Number(page) : 1));
  const [paginas, setPaginas] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
      const fetchSeries = async () => {
          try {
              const response = await axios.get(`https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=${paginaActual}&api_key=${api_key}`);
              setSeries(response.data.results);
              setTotalPages(response.data.total_pages);
          } catch (error) {
              console.log(error.message);
          }
      };
      fetchSeries()

  }, [paginaActual]);

  useEffect(() => {
      const actualizarPaginas = () => {
          const maxPagesToShow = 8;
          const startPage = Math.max(1, paginaActual - Math.floor(maxPagesToShow / 2));
          const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

          const array = [];
          for (let i = startPage; i <= endPage; i++) {
              array.push(i);
          }
          setPaginas(array);
      };

      if (totalPages > 0) {
          actualizarPaginas();
      }
  }, [paginaActual, totalPages]);


  if (series.length === 0) {
      return <div className="flex flex-col h-full items-center justify-center">
          <p className="text-white text-2xl">Cargando...</p>
      </div>;
  }

  const handleClickLeft = () => {
      if (paginaActual > 1) {
          setPaginaActual(paginaActual - 1);
      }
  };

  const handleClickRight = () => {
      if (paginaActual < totalPages) {
          setPaginaActual(paginaActual + 1);
      }
  };

  const cambiarPagina = (pagina) => {
      setPaginaActual(pagina);
      navigate(`/series/page/${pagina}`); 
    };

  return (
      <div className="w-full">
          <h1 className="text-center mt-5 text-3xl text-white">Series</h1>
          <ListaSeries series={series} />
          <Paginacion
              paginas={paginas}
              paginaActual={paginaActual}
              handleClickLeft={handleClickLeft}
              handleClickRight={handleClickRight}
              cambiarPagina={cambiarPagina}
              totalPages={totalPages}
          />
      </div>
  )
}

export default Series
