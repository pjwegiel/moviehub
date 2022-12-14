import { GenresSection } from './homeSections/GenresSection'
import { TopSection } from './homeSections/TopSection'

export function Home(): JSX.Element {
    return (
        <>
            <TopSection />
            <GenresSection type="movies" />
            <GenresSection type="series" />
        </>
    )
}
