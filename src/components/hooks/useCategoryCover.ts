import { useEffect, useState } from 'react'
import { fetchData } from '../../API/consts'
import { IMovie, IMovieOrSeries } from './types'

export function useCategoryCover(
    type: 'movie' | 'series',
    mainCategory: 'Genre' | 'Year',
    subCategory: string
): string {
    const [cover, setCover] = useState('')
    const mainCategoryName = mainCategory === 'Genre' ? 'Gen' : mainCategory
    useEffect(() => {
        fetchData(`${type}/by${mainCategoryName}/${subCategory}/`)
            .then(({ results }: { results: IMovie[] }) => {
                fetchData(`${type}/id/${results[0].imdb_id}/`)
                    .then((response: { results: IMovieOrSeries }) => {
                        setCover(response.results.image_url)
                    })
                    .catch((error) => console.log(error))
            })
            .catch((err) => console.log(err))
    }, [])
    return cover
}
