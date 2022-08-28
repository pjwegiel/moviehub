import { useParams } from 'react-router-dom'
import { useFetchByCategory } from '../hooks/useFetchByCategory'
import { MovieCover } from './MovieCover'

export function Category(): JSX.Element {
    const { type, mainCategory, subCategory } = useParams()
    const categoryData = useFetchByCategory(
        type as 'movies' | 'series',
        mainCategory as 'Genre' | 'Year',
        subCategory as string
    )
    console.log(categoryData)
    return (
        <div className="container m-auto py-12">
            <h2 className="text-2xl pb-5 font-bold">
                {subCategory} {type}
            </h2>
            <div className="grid grid-cols-6 gap-10">
                {categoryData.map((movieInCategory) => (
                    <MovieCover
                        type={type as 'movies' | 'series'}
                        id={movieInCategory.imdb_id}
                        key={`${type as string}-${movieInCategory.imdb_id}`}
                    />
                ))}
            </div>
        </div>
    )
}
