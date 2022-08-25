import { useEffect, useState } from 'react'
import { headers, moviesDBUrl } from '../../API/consts'

export function useFetchByCategory(category: string): any {
    const [fetchedData, setFetchedData] = useState<any[]>([])

    useEffect(() => {
        fetch(`${moviesDBUrl}/movie/byGen/${category}/`, { headers })
            .then(async (res) => await res.json())
            .then((res) => {
                setFetchedData(res.results)
            })
            .catch((err) => console.log(err))
    }, [])
    return fetchedData
}
