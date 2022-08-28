import { Routes as RRDRoutes, Route } from 'react-router-dom'
import { Category } from '../reusable/Category'
import { Home } from './Home/Home'
import { Movies } from './Movies/Movies'
import { Series } from './Series/Series'

export function Routes(): JSX.Element {
    return (
        <RRDRoutes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route
                path="/:type/:mainCategory/:subCategory"
                element={<Category />}
            />
            <Route path="/series" element={<Series />} />
        </RRDRoutes>
    )
}
