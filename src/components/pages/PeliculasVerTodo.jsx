import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ListaPeliculas from '../ListaPeliculas'
import { categoria } from '../data/generos'
import axios from 'axios'
import Paginacion from '../Paginacion'

const PeliculasVerTodo = () => {

    const { ver,page } = useParams()
    const navigate = useNavigate();
    const api_key = "9a50011305debfe6f5bfe14a5694843c";
    const [peliculas, setPeliculas] = useState([]);
    const [paginaActual, setPaginaActual] = useState(() => (page ? Number(page) : 1));
    const [paginas, setPaginas] = useState([]);
    const [totalPages, setTotalPages] = useState(0);

    const categoriaSeleccionada = categoria[ver]

    useEffect(() => {
        const fetchPelicula = async () => {
            try {
                const response = await axios.get(`${categoriaSeleccionada.url(paginaActual)}&api_key=${api_key}`);
                setPeliculas(response.data.results);
                setTotalPages(response.data.total_pages);
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchPelicula();
    }, [ver, paginaActual]);

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

    if (peliculas.length === 0) {
        return <div className="flex flex-col h-full items-center justify-center">
            <p className="text-white text-2xl">!Cargando...</p>
        </div>;
    }

    const handleClickLeft = () => {
        if (paginaActual > 1) {
            navigate(`/peliculas/${ver}/page/${paginaActual-1}`);
            setPaginaActual(paginaActual - 1);
        }
    };

    const handleClickRight = () => {
        if (paginaActual < totalPages) {
            navigate(`/peliculas/${ver}/page/${paginaActual+1}`);
            setPaginaActual(paginaActual + 1);
        }
    };

    const cambiarPagina = (pagina) => {
        setPaginaActual(pagina);
        navigate(`/peliculas/${ver}/page/${pagina}`);
      };

    return (
        <div className="w-full">
            <h1 className="text-center mt-5 text-3xl text-white">{categoriaSeleccionada.nombre}</h1>
            <ListaPeliculas peliculas={peliculas} />
            <Paginacion
                paginas={paginas}
                paginaActual={paginaActual}
                handleClickLeft={handleClickLeft}
                handleClickRight={handleClickRight}
                cambiarPagina={cambiarPagina}
                totalPages={totalPages}
            />
        </div>
    );
}

export default PeliculasVerTodo
