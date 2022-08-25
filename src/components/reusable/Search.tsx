export function Search(): JSX.Element {
    return (
        <div className="w-full p-10 bg-teal-50">
            <div className="container m-auto flex">
                <button>
                    <div className="border-2 border-teal-800 h-10 w-10">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-full text-teal-800 p-1"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                            />
                        </svg>
                    </div>
                </button>
                <input
                    type="text"
                    placeholder="Search movies by name, genre, year, keyword and content rating"
                    className="border-2 border-teal-800 h-10 w-full mx-3 active:rounded-none focus:outline-none px-5 font-semibold text-teal-800"
                ></input>
                <button>
                    <div className="bg-teal-800 h-10 w-10">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-full text-white p-2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                            />
                        </svg>
                    </div>
                </button>
            </div>
        </div>
    )
}
