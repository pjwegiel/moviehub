import { useEffect, useState } from 'react'
import { headers } from '../../../API/headers'
import { MovieGenreCover } from '../../reusable/MovieGenreCover'

interface IGenre {
    genre: string
}

type IGenres = IGenre[]

export function GenresSection(): JSX.Element {
    const [genres, setGenres] = useState<IGenres>([])

    useEffect(() => {
        fetch('https://moviesminidatabase.p.rapidapi.com/genres/', {
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
    const slicedGenres = genres.slice(0, 7)
    return (
        <div className="text-teal-800 px-2 py-12">
            <div className="container mx-auto flex flex-col w-full">
                <div className="flex justify-between w-full">
                    <h2 className="text-4xl font-bold my-auto">Genres</h2>
                    <h4 className="my-auto text-xl">view all</h4>
                </div>
                <div className="flex w-full justify-between">
                    {slicedGenres.map(({ genre }) => (
                        <MovieGenreCover key={genre} genre={genre} />
                    ))}
                </div>
            </div>
        </div>
    )
}
