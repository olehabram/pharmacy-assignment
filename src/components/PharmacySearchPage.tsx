import React, { useState, useEffect, useMemo } from 'react';
import SearchBar from './SearchBar';
import FilterPanel from './FilterPanel';
import PharmacyList from './PharmacyList';
import { mockPharmacies } from '../data/mockPharmacies';
import type { Pharmacy } from '../types';
import { List } from 'lucide-react';

const PharmacySearchPage: React.FC = () => {
    const [pharmacies, setPharmacies] = useState<Pharmacy[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [cityFilter, setCityFilter] = useState<string>(''); // Залишаємо, якщо в майбутньому буде >1 міста
    const [openNowFilter, setOpenNowFilter] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setPharmacies(mockPharmacies);
            setIsLoading(false);
        }, 1000);
    }, []);

    const uniqueCities = useMemo(() => {
        const cities = new Set(mockPharmacies.map(p => p.city));
        return Array.from(cities).sort();
    }, []); // mockPharmacies не змінюються, тому можна залишити порожній масив залежностей

    const filteredPharmacies = useMemo(() => {
        return pharmacies
            .filter(pharmacy => {
                const searchTermLower = searchTerm.toLowerCase();
                return (
                    pharmacy.name.toLowerCase().includes(searchTermLower) ||
                    pharmacy.address.toLowerCase().includes(searchTermLower) ||
                    pharmacy.city.toLowerCase().includes(searchTermLower)
                );
            })
            .filter(pharmacy => {
                return cityFilter ? pharmacy.city === cityFilter : true;
            })
            .filter(pharmacy => {
                if (!openNowFilter) return true;
                // Проста логіка перевірки "Зараз відчинено" на основі mock-даних
                // В реальному додатку це було б складніше, враховуючи поточний час та дні тижня
                return pharmacy.isOpenNow; // Використовуємо існуюче поле isOpenNow
            });
    }, [pharmacies, searchTerm, cityFilter, openNowFilter]);

    return (
        <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4 text-sky-700 flex items-center">
                    <List className="mr-2" size={28} /> Пошук та Фільтрація Аптек
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
                    </div>
                    <div>
                        <FilterPanel
                            cities={uniqueCities}
                            selectedCity={cityFilter}
                            onCityChange={setCityFilter}
                            isOpenNow={openNowFilter}
                            onOpenNowChange={setOpenNowFilter}
                        />
                    </div>
                </div>
            </div>

            {isLoading ? (
                <div className="flex flex-col justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-sky-500 mb-4"></div>
                    <p className="text-xl text-slate-600">Завантаження аптек...</p>
                </div>
            ) : (
                <PharmacyList pharmacies={filteredPharmacies} />
            )}
        </div>
    );
};

export default PharmacySearchPage;