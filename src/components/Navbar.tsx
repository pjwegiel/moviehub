import { useState } from 'react'

const navbarOptions = ['Home', 'Movies', 'TV Series', 'Account']

export function Navbar(): JSX.Element {
    const [currentNavbarOption, setCurrentNavbarOption] = useState(
        navbarOptions[0]
    )
    return (
        <nav className="flex bg-teal-800 min-w-full px-6 py-2 justify-between text-white font-sans">
            <a href="#" className="flex">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/864/864781.png"
                    alt="MovieHub"
                    width="54"
                />
                <span className="my-auto font-bold text-2xl ml-2">
                    MovieHub
                </span>
            </a>
            <ul className="flex my-auto">
                {navbarOptions.map((navbarOption) => (
                    <li key={navbarOption}>
                        <a
                            href="#"
                            className={`text-white pl-4 font-semibold ${
                                currentNavbarOption === navbarOption
                                    ? 'underline'
                                    : ''
                            }`}
                            onClick={() => setCurrentNavbarOption(navbarOption)}
                        >
                            {navbarOption}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
