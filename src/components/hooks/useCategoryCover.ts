import { useState, useEffect } from 'react'
import { headers, moviesDBUrl } from '../../API/consts'

export function useCategoryCover(genre: string): string {
    const [cover, setCover] = useState('')
    useEffect(() => {
        fetch(`${moviesDBUrl}/movie/byGen/${genre}/`, {
            method: 'GET',
            headers,
        })
            .then(async (res) => await res.json())
            .then((res) => {
                const id = res.results.pop().imdb_id as string
                fetch(
                    `https://moviesminidatabase.p.rapidapi.com/movie/id/${id}/`,
                    {
                        method: 'GET',
                        headers,
                    }
                )
                    .then(async (response) => await response.json())
                    .then((response) => {
                        setCover(response.results.image_url)
                    })
                    .catch((err) => console.log(err))
            })
            .catch((err) => console.log(err))
    }, [])
    return cover
}
