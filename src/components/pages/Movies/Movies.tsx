import { Genres } from '../../reusable/Genres'
import { Search } from '../../reusable/Search'

export function Movies(): JSX.Element {
    return (
        <>
            <div className="container m-auto py-12">
                <h2 className="font-extrabold text-7xl">
                    Welcome to the movies section!
                </h2>
            </div>
            <Search />
            <Genres type="Movies" />
        </>
    )
}
