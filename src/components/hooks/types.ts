export interface IMovie {
    title: string
    imdb_id: string
}

export type IMovies = IMovie[]

export interface IMovieOrSeries {
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
