import { useEffect, useState } from 'react'
import { headers, moviesDBUrl } from '../../API/consts'

interface IGenre {
    genre: string
}

type IGenres = IGenre[]

export function useGenres(): IGenres {
    const [genres, setGenres] = useState([])
    useEffect(() => {
        fetch(`${moviesDBUrl}/genres/`, {
            method: 'GET',
            headers,
        })
            .then((res: any) => {
                return res.json()
            })
            .then((res) => {
                setGenres(res.results)
            })
            .catch((err) => console.log(err))
    }, [])
    return genres
}
