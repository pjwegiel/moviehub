import { Link } from 'react-router-dom'
import { useGenres } from '../../../hooks/useGenres'
import { CategoryCover } from '../../../reusable/CategoryCover'

export function GenresSection({
    type,
}: {
    type: 'Movies' | 'Series'
}): JSX.Element {
    const genres = useGenres()
    const slicedGenres = genres.slice(0, 7)
    return (
        <div className="text-teal-800 px-2 py-12">
            <div className="container mx-auto flex flex-col w-full">
                <div className="flex justify-between w-full">
                    <h2 className="text-4xl font-bold my-auto">
                        {type} Genres
                    </h2>
                    <Link to={`/${type.toLowerCase()}`}>
                        <h4 className="my-auto text-xl cursor-pointer">
                            view all
                        </h4>
                    </Link>
                </div>
                <div className="flex w-full justify-between py-10">
                    {slicedGenres.map((genre) => (
                        <CategoryCover
                            key={genre}
                            type="movie"
                            mainCategory="Genre"
                            subCategory={genre}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
