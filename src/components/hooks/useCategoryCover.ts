import { useFetchByCattegory } from './useFetchByCategory'
import { useMovieOrSeriesByID } from './useMovieOrSeriesByID'

export function useCategoryCover(
    type: 'movie' | 'series',
    mainCategory: 'Genre' | 'Year',
    subCategory: string
): string | null {
    const categoryData = useFetchByCattegory(type, mainCategory, subCategory)
    const movieFromCategoryID =
        categoryData.length > 0 ? categoryData[0].imdb_id : null
    const movieCover = useMovieOrSeriesByID(type, movieFromCategoryID).image_url
    return movieCover
}
