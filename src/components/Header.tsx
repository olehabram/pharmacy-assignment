import React from 'react';
import { Link, NavLink } from 'react-router';
import { Pill, Home, Search as SearchIcon } from 'lucide-react'; // Перейменовано Search на SearchIcon, щоб уникнути конфлікту

const Header: React.FC = () => {
    const activeLinkClass = "text-sky-200 border-b-2 border-sky-200";
    const inactiveLinkClass = "hover:text-sky-200 transition-colors";

    return (
        <header className="bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <Link to="/" className="flex items-center space-x-2 group">
                    <Pill size={36} className="text-white group-hover:animate-pulse" />
                    <h1 className="text-2xl md:text-3xl font-bold tracking-tight group-hover:text-sky-100 transition-colors">Аптеки Міста</h1>
                </Link>
                <nav className="flex space-x-4 md:space-x-6 items-center">
                    <NavLink
                        to="/"
                        className={({ isActive }) => `${isActive ? activeLinkClass : inactiveLinkClass} flex items-center space-x-1 px-2 py-1 rounded-md`}
                    >
                        <Home size={18} />
                        <span>Головна</span>
                    </NavLink>
                    <NavLink
                        to="/search"
                        className={({ isActive }) => `${isActive ? activeLinkClass : inactiveLinkClass} flex items-center space-x-1 px-2 py-1 rounded-md`}
                    >
                        <SearchIcon size={18} />
                        <span>Пошук Аптек</span>
                    </NavLink>
                    {/* <a href="#" className="hover:text-sky-200 transition-colors">Про нас</a>
          <a href="#" className="hover:text-sky-200 transition-colors">Контакти</a> */}
                </nav>
            </div>
        </header>
    );
};

export default Header;