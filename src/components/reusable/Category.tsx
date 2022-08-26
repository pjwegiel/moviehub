import { CategoryCover } from './CategoryCover'

interface CategoryProps {
    type: 'movie' | 'series'
    mainCategory: 'Genre' | 'Year'
    subCategories: string[]
}

export function Category({
    type,
    mainCategory,
    subCategories,
}: CategoryProps): JSX.Element {
    return (
        <div className="container m-auto py-12">
            <h2 className="text-2xl font-bold pb-5">
                {type} by {mainCategory.toLowerCase()}
            </h2>
            <div className="grid grid-cols-6 gap-10">
                {subCategories.map((subCategory) => (
                    <CategoryCover
                        type={type}
                        mainCategory={mainCategory}
                        subCategory={subCategory}
                        key={`${type}-${subCategory}`}
                    />
                ))}
            </div>
        </div>
    )
}
