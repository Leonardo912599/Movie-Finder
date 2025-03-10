import SerieCard from './SerieCard'
import { Link } from 'react-router-dom'

const ListaSeries = ({series}) => {
    return (
        <div className="grid p-9 grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 place-items-center">
            {series.map((serie) => (
                <Link to={`/serie/${serie.id}`} key={serie.id}>
                    <SerieCard serie={serie} />
                </Link>
            ))}
        </div>
    )
}

export default ListaSeries
