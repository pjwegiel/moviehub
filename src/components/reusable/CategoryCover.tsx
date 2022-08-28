import { Link } from 'react-router-dom'
import { useCategoryCover } from '../hooks/useCategoryCover'

interface CategoryCoverProps {
    type: 'movies' | 'series'
    mainCategory: 'Genre' | 'Year'
    subCategory: string
}

export function CategoryCover({
    type,
    mainCategory,
    subCategory,
}: CategoryCoverProps): JSX.Element {
    const cover = useCategoryCover(type, mainCategory, subCategory)
    return (
        <Link to={`/${type}/${mainCategory}/${subCategory}`}>
            <div className="relative cursor-pointer transition ease-in-out duration-500 hover:scale-110">
                <div className="bg-black/60 h-full w-full absolute flex group align-center">
                    <p className="text-white m-auto text-xl font-extrabold">
                        {subCategory}
                    </p>
                </div>
                <img src={cover} alt={subCategory}></img>
            </div>
        </Link>
    )
}
