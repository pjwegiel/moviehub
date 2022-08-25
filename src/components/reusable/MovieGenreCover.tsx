import { useEffect, useState } from 'react'
import { headers } from '../../API/headers'

interface MovieGenreCoverProps {
    genre: string
}

export function MovieGenreCover({ genre }: MovieGenreCoverProps): JSX.Element {
    const [cover, setCover] = useState('')
    useEffect(() => {
        fetch(
            `https://moviesminidatabase.p.rapidapi.com/movie/byGen/${genre}/`,
            {
                method: 'GET',
                headers,
            }
        )
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
    return (
        <div className="relative cursor-pointer rounded">
            <div className="bg-black/60 w-full h-full absolute flex rounded">
                <p className="text-white m-auto text-xl font-extrabold">
                    {genre}
                </p>
            </div>
            <img src={cover} alt={genre} />
        </div>
    )
}
