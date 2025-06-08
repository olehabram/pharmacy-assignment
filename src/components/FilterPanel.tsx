import React from 'react';
// import { Filter } from 'lucide-react'; // Filter іконка не використовується тут, можна видалити

interface FilterPanelProps {
    cities: string[];
    selectedCity: string;
    onCityChange: (city: string) => void;
    isOpenNow: boolean;
    onOpenNowChange: (isOpen: boolean) => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({
                                                     cities,
                                                     selectedCity,
                                                     onCityChange,
                                                     isOpenNow,
                                                     onOpenNowChange,
                                                 }) => {
    return (
        <div className="space-y-4">
            <div>
                <label htmlFor="city-filter" className="block text-sm font-medium text-slate-700 mb-1">
                    Фільтрувати за містом
                </label>
                <select
                    id="city-filter"
                    value={selectedCity}
                    onChange={(e) => onCityChange(e.target.value)}
                    className="block w-full pl-3 pr-10 py-2.5 border border-slate-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm transition-colors"
                >
                    <option value="">Всі міста</option>
                    {cities.map(city => (
                        <option key={city} value={city}>{city}</option>
                    ))}
                </select>
            </div>
            <div>
                <div className="relative flex items-start">
                    <div className="flex items-center h-5">
                        <input
                            id="open-now-filter"
                            name="open-now-filter"
                            type="checkbox"
                            checked={isOpenNow}
                            onChange={(e) => onOpenNowChange(e.target.checked)}
                            className="focus:ring-sky-500 h-4 w-4 text-sky-600 border-slate-300 rounded transition-colors"
                        />
                    </div>
                    <div className="ml-3 text-sm">
                        <label htmlFor="open-now-filter" className="font-medium text-slate-700 cursor-pointer">
                            Зараз відчинено
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterPanel;