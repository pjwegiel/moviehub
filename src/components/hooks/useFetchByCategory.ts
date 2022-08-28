import { useEffect, useState } from 'react'
import { fetchData } from '../../API/consts'
import { IMovies } from './types'

export function useFetchByCategory(
    type: 'movies' | 'series',
    mainCategory: 'Genre' | 'Year',
    subCategory: string
): IMovies {
    const [results, setResults] = useState([])
    const typeName = type === 'movies' ? 'movie' : type
    const mainCategoryName = mainCategory === 'Genre' ? 'Gen' : mainCategory
    useEffect(() => {
        fetchData(`${typeName}/by${mainCategoryName}/${subCategory}/`)
            .then((res) => {
                setResults(res.results)
            })
            .catch((err) => console.log(err))
    }, [])
    return results
}
