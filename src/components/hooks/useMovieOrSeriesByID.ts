import { useEffect, useState } from 'react'
import { fetchData } from '../../API/consts'

interface IMovieOrSeries {
    imdb_id: string
    title: string
    year: number
    popularity: number
    description: string
    content_rating: string
    movie_length: number
    rating: number
    created_at: string
    trailer: string
    image_url: string
    release: string
    plot: string
    banner: string
    type: string
    more_like_this: {}
    gen: Array<{ id: number; genre: string }>
    keywords: Array<{ id: number; keyword: string }>
}

export function useMovieOrSeriesByID(
    type: 'movie' | 'series',
    id: string | null
): IMovieOrSeries {
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
        if (id !== null) {
            fetchData(`${type}/id/${id}/`)
                .then((res) => {
                    setMovieOrSeries(res.results)
                })
                .catch((err) => console.log(err))
        }
    }, [])
    return movieOrSeries
}
