import { useEffect, useState } from 'react'
import { fetchData } from '../../API/consts'

export function useGenres(): string[] {
    const [results, setResults] = useState([])
    useEffect(() => {
        fetchData('genres/')
            .then((res) => {
                setResults(
                    res.results.map(({ genre }: { genre: string }) => genre)
                )
            })
            .catch((err) => console.log(err))
    }, [])
    return results
}
