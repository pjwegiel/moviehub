import { useFetchByCategory } from '../hooks/useFetchByCategory'
import { useGenres } from '../hooks/useGenres'
import { CategoryCover } from './CategoryCover'

interface GenresProps {
    type: 'Movies' | 'Series'
}

export function Genres({ type }: GenresProps): JSX.Element {
    const genres = useGenres()
    useFetchByCategory('Adventure')
    return (
        <div className="container m-auto py-12">
            <h2 className="text-2xl font-bold pb-5">Genres</h2>
            <div className="grid grid-cols-6 gap-10">
                {genres.map(({ genre }) => (
                    <CategoryCover genre={genre} key={`movies-${genre}`} />
                ))}
            </div>
        </div>
    )
}
