import { useMovieOrSeriesByID } from '../hooks/useMovieOrSeriesByID'

export function MovieCover({
    type,
    id,
}: {
    type: 'movies' | 'series'
    id: string
}): JSX.Element {
    const movieData = useMovieOrSeriesByID(type, id)
    return (
        <div className="relative cursor-pointer transition ease-in-out duration-500 hover:scale-110">
            <div className="bg-black/60 h-full w-full absolute flex group align-center">
                <p className="text-white m-auto text-xl font-extrabold text-center">
                    {movieData.title}
                </p>
            </div>
            <img src={movieData.image_url} alt={movieData.title}></img>
        </div>
    )
}
