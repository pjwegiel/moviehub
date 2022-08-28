import { useEffect, useState } from 'react'
import { fetchData } from '../../API/consts'
import { IMovie, IMovieOrSeries } from './types'

export function useCategoryCover(
    type: 'movies' | 'series',
    mainCategory: 'Genre' | 'Year',
    subCategory: string
): string {
    const [cover, setCover] = useState('')
    const mainCategoryName = mainCategory === 'Genre' ? 'Gen' : mainCategory
    const typeName = type === 'movies' ? 'movie' : type
    useEffect(() => {
        fetchData(`${typeName}/by${mainCategoryName}/${subCategory}/`)
            .then(({ results }: { results: IMovie[] }) => {
                const result = results.pop()
                if (result !== undefined) {
                    fetchData(`${typeName}/id/${result?.imdb_id}/`)
                        .then((response: { results: IMovieOrSeries }) => {
                            setCover(response.results.image_url)
                        })
                        .catch((error) => console.log(error))
                }
            })
            .catch(() => setCover(''))
    }, [])
    return cover
}
