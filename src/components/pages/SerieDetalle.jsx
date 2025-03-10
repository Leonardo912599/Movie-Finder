import {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SerieDetalle = () => {

    const { id } = useParams();

    const [serie, setSerie] = useState(null);
    const api_key = "9a50011305debfe6f5bfe14a5694843c";

    useEffect(() => {
        console.log(id)
        const fetchSerie = async () => {
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/tv/${id}?api_key=${api_key}&language=es-ES`
                );
                setSerie(response.data);
            } catch (error) {
                console.error("Error al obtener los detalles de la película:", error);
            }
        };

        fetchSerie();
    }, [id]);

    if (!serie) {
        return <div className="text-white text-center">Cargando...</div>;
    }
    return (
        <div className="min-h-screen">
            <div className="flex flex-col sm:flex-row items-center p-9 sm:space-x-5 justify-between text-black m-5 bg-white rounded-lg">
                <img
                    className="w-64 sm:w-80 md:w-96 h-auto rounded-lg mb-4 sm:mb-0"
                    src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
                    alt={serie.name}
                />
                <div className="flex flex-col grow items-center sm:items-start justify-center p-5 sm:w-1/2">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center sm:text-left">
                        {serie.name}
                    </h1>
                    <p className="text-base md:text-lg mb-4 text-center sm:text-left">
                        {serie.overview}
                    </p>
                    <p className="text-sm text-gray-400 text-center sm:text-left">
                    Fecha de primera emisión: {serie.first_air_date}
                    </p>
                    <p className="text-sm text-gray-400 text-center sm:text-left">
                        Puntuación: {serie.vote_average} / 10
                    </p>
                </div>
            </div>
        </div>

    )
}

export default SerieDetalle
