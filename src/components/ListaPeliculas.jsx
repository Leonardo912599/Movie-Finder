import React from 'react'
import PeliculaCard from './PeliculaCard'
import { Link } from 'react-router-dom'

const ListaPeliculas = ({peliculas}) => {
    return (
        <div className="grid p-9 grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 place-items-center">
            {peliculas.map((pelicula) => (
                <Link to={`/pelicula/${pelicula.id}`} key={pelicula.id}>
                    <PeliculaCard pelicula={pelicula} />
                </Link>
            ))}
        </div>
    )
}

export default ListaPeliculas
