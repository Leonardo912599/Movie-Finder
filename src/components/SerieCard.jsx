
const SerieCard = ({serie}) => {

    const fechaPrimeraEmision = new Date(serie.first_air_date);

    return (
        <div className='flex flex-col w-[200px] h-auto'>
            <img
                src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
                alt={serie.name}
            />
            <h4 className='text-white'>{serie.name}</h4>
            <p className='text-white'>{fechaPrimeraEmision.getFullYear()}</p>
        </div>
    )
}

export default SerieCard
