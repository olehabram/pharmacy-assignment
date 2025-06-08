import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
    searchTerm: string;
    onSearchChange: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchChange }) => {
    return (
        <div className="relative">
            <label htmlFor="search-pharmacy" className="block text-sm font-medium text-slate-700 mb-1">
                Пошук за назвою, адресою або містом
            </label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-slate-400" aria-hidden="true" />
                </div>
                <input
                    type="text"
                    id="search-pharmacy"
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                    placeholder="Наприклад, 'Аптека Здоров'я' або 'вул. Центральна'"
                    className="block w-full pl-10 pr-3 py-2.5 border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm transition-colors"
                />
            </div>
        </div>
    );
};

export default SearchBar;