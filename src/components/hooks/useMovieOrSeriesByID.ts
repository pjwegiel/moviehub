import { useEffect, useState } from 'react'
import { fetchData } from '../../API/consts'
import { IMovieOrSeries } from './types'

export function useMovieOrSeriesByID(
    type: 'movies' | 'series',
    id: string
): IMovieOrSeries {
    const typeName = type === 'movies' ? 'movie' : type
    const [movieOrSeries, setMovieOrSeries] = useState<IMovieOrSeries>({
        imdb_id: '',
        title: '',
        year: 0,
        popularity: 0,
        description: '',
        content_rating: '',
        movie_length: 0,
        rating: 0,
        created_at: '',
        trailer: '',
        image_url: '',
        release: '',
        plot: '',
        banner: '',
        type: '',
        more_like_this: {},
        gen: [],
        keywords: [],
    })
    useEffect(() => {
        fetchData(`${typeName}/id/${id}/`)
            .then((res) => {
                setMovieOrSeries(res.results)
            })
            .catch((err) => console.log(err))
    }, [])
    return movieOrSeries
}
