export const headers = {
    'X-RapidAPI-Key': import.meta.env.VITE_X_RapidAPI_Key as string,
    'X-RapidAPI-host': import.meta.env.VITE_X_RapidAPI_Host as string,
    'Content-Type': 'application/json',
}

export const moviesDBUrl = 'https://moviesminidatabase.p.rapidapi.com'

export async function fetchData(url: string): Promise<any> {
    const response = await fetch(`${moviesDBUrl}/${url}`, {
        method: 'GET',
        headers,
    })
    return await response.json()
}
