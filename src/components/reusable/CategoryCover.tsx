import { useCategoryCover } from '../hooks/useCategoryCover'

interface CategoryCoverProps {
    type: 'movie' | 'series'
    mainCategory: 'Genre' | 'Year'
    subCategory: string
}

export function CategoryCover({
    type,
    mainCategory,
    subCategory,
}: CategoryCoverProps): JSX.Element | null {
    const cover = useCategoryCover(type, mainCategory, subCategory)
    return cover !== null ? (
        <div className="relative cursor-pointer transition ease-in-out duration-500 hover:scale-110">
            <div className="bg-black/60 h-full w-full absolute flex group align-center">
                <p className="text-white m-auto text-xl font-extrabold ">
                    {subCategory}
                </p>
            </div>
            <img src={cover} alt={subCategory}></img>
        </div>
    ) : null
}
