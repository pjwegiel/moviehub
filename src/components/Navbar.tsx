import { useState } from 'react'
import { Link } from 'react-router-dom'

const navbarOptions = ['Home', 'Movies', 'Series', 'Account']

export function Navbar(): JSX.Element {
    const [currentNavbarOption, setCurrentNavbarOption] = useState(
        navbarOptions[0]
    )
    return (
        <nav className="flex bg-teal-800 min-w-full px-6 py-2 justify-between text-white font-sans">
            <Link to="/" className="flex">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/864/864781.png"
                    alt="MovieHub"
                    width="54"
                />
                <span className="my-auto font-bold text-2xl ml-2">
                    MovieHub
                </span>
            </Link>
            <ul className="flex my-auto">
                {navbarOptions.map((navbarOption) => (
                    <li key={navbarOption}>
                        <Link
                            to={
                                navbarOption.toLowerCase() === 'home'
                                    ? '/'
                                    : `/${navbarOption.toLowerCase()}`
                            }
                            className={`text-white pl-4 font-semibold ${
                                currentNavbarOption === navbarOption
                                    ? 'underline'
                                    : ''
                            }`}
                            onClick={() => setCurrentNavbarOption(navbarOption)}
                        >
                            {navbarOption}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
