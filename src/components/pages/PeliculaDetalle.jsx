import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PeliculaDetalle = () => {

    const { id } = useParams();

    const [pelicula, setPelicula] = useState(null);
    const api_key = "9a50011305debfe6f5bfe14a5694843c";

    useEffect(() => {
        console.log(id)
        const fetchPelicula = async () => {
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=es-ES`
                );
                setPelicula(response.data);
            } catch (error) {
                console.error("Error al obtener los detalles de la película:", error);
            }
        };

        fetchPelicula();
    }, [id]);

    if (!pelicula) {
        return <div className="text-white text-center">Cargando...</div>;
    }
    return (
        <div className="min-h-screen">
            <div className="flex flex-col sm:flex-row items-center p-9 sm:space-x-5 justify-between text-black m-5 bg-white rounded-lg">
                <img
                    className="w-64 sm:w-80 md:w-96 h-auto rounded-lg mb-4 sm:mb-0"
                    src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
                    alt={pelicula.title}
                />
                <div className="flex flex-col grow items-center sm:items-start justify-center p-5 sm:w-1/2">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center sm:text-left">
                        {pelicula.title}
                    </h1>
                    <p className="text-base md:text-lg mb-4 text-center sm:text-left">
                        {pelicula.overview}
                    </p>
                    <p className="text-sm text-gray-400 text-center sm:text-left">
                        Fecha de lanzamiento: {pelicula.release_date}
                    </p>
                    <p className="text-sm text-gray-400 text-center sm:text-left">
                        Puntuación: {pelicula.vote_average} / 10
                    </p>
                </div>
            </div>
        </div>

    )
}

export default PeliculaDetalle
