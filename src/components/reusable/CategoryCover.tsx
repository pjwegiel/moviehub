import { useCategoryCover } from '../hooks/useCategoryCover'

interface CategoryCoverProps {
    genre: string
}

export function CategoryCover({ genre }: CategoryCoverProps): JSX.Element {
    const cover = useCategoryCover(genre)
    return (
        <div className="relative cursor-pointer transition ease-in-out duration-500 hover:scale-110">
            <div className="bg-black/60 h-full w-full absolute flex group align-center">
                <p className="text-white m-auto text-xl font-extrabold ">
                    {genre}
                </p>
            </div>
            {cover !== '' ? (
                <img src={cover} alt={genre}></img>
            ) : (
                <div className="h-full w-full bg-teal-800"></div>
            )}
        </div>
    )
}
