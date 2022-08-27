import { useGenres } from '../../hooks/useGenres'
import { Category } from '../../reusable/Category'
import { Search } from '../../reusable/Search'

const years: string[] = []
for (let i = new Date().getFullYear(); i >= 1960; i--) {
    years.push(String(i))
}

export function Series(): JSX.Element {
    const genres = useGenres()
    return (
        <>
            <div className="container m-auto py-12">
                <h2 className="font-extrabold text-7xl">
                    Welcome to the series section!
                </h2>
            </div>
            <Search />
            <Category
                mainCategory="Genre"
                type="series"
                subCategories={genres}
            />
            <Category mainCategory="Year" type="series" subCategories={years} />
        </>
    )
}
