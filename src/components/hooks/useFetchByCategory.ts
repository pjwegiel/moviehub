import { useEffect, useState } from 'react'
import { fetchData } from '../../API/consts'

interface IMovie {
    title: string
    imdb_id: string
}

type IMovies = IMovie[]

export function useFetchByCattegory(
    type: 'movie' | 'series',
    mainCategory: 'Genre' | 'Year',
    subCategory: string
): IMovies {
    const [results, setResults] = useState([])
    const mainCategoryName = mainCategory === 'Genre' ? 'Gen' : mainCategory
    useEffect(() => {
        fetchData(`${type}/by${mainCategoryName}/${subCategory}/`)
            .then((res) => {
                setResults(res.results)
            })
            .catch((err) => console.log(err))
    }, [])
    return results
}
