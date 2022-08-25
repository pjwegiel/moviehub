export function TopSection(): JSX.Element {
    return (
        <div className="bg-teal-800 px-2 text-white py-12">
            <div className="container mx-auto flex">
                <div className="w-1/2 my-auto pr-8">
                    <h2 className="font-extrabold text-7xl">
                        Welcome to MovieHub!
                    </h2>
                    <p className="text-xl font-semibold py-8">
                        A platform to browse movies and series, check their
                        rating on most popular platforms, rate them by yourself,
                        create collection of your wathed movies and share them
                        with friends!
                    </p>
                    <button className="bg-white text-teal-800 px-6 py-3 font-semibold">
                        Browse Movies
                    </button>
                </div>
                <div className="flex w-1/2 group relative">
                    <div className="absolute hidden w-full h-full rounded group-hover:flex group-hover:backdrop-blur-sm">
                        <button className="m-auto bg-white text-teal-800 px-6 py-3 font-semibold transition duration-500 hover:scale-110">
                            Browse movies
                        </button>
                    </div>
                    <img
                        src="https://www.ubuy.com/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzFCUHV2K2lSYkwuX0FDX1NMMTAwMF8uanBn.jpg"
                        alt="movie"
                        className="w-1/2 rounded m-1 my-4 shadow-2xl"
                    />
                    <div className="w-1/2 flex">
                        <div className="grid grid-cols-2 grid-rows-2 py-2 gap-x-1">
                            <img
                                src="https://www.ubuy.com/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzFCUHV2K2lSYkwuX0FDX1NMMTAwMF8uanBn.jpg"
                                alt="movie"
                                className="rounded m-auto shadow-2xl"
                            />
                            <img
                                src="https://www.ubuy.com/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzFCUHV2K2lSYkwuX0FDX1NMMTAwMF8uanBn.jpg"
                                alt="movie"
                                className="rounded m-auto shadow-2xl"
                            />
                            <img
                                src="https://www.ubuy.com/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzFCUHV2K2lSYkwuX0FDX1NMMTAwMF8uanBn.jpg"
                                alt="movie"
                                className="rounded m-auto shadow-2xl"
                            />
                            <img
                                src="https://www.ubuy.com/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzFCUHV2K2lSYkwuX0FDX1NMMTAwMF8uanBn.jpg"
                                alt="movie"
                                className="rounded m-auto shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
