// src/components/HomePage.tsx
import React from 'react';
import { Link } from 'react-router';
import { Search, Pill, MapPin, Info, Filter as FilterIcon, ListChecks, Smartphone } from 'lucide-react';

const HomePage: React.FC = () => {
    return (
        <> {/* Використовуємо React.Fragment для групування двох основних секцій */}
            {/* Секція привітання та основних дій */}
            <div className="text-center py-12 md:py-20 bg-white p-6 rounded-lg shadow-xl">
                <Pill size={64} className="mx-auto text-sky-500 mb-6 animate-bounce" />
                <h1 className="text-4xl md:text-5xl font-bold text-sky-700 mb-4">
                    Ласкаво просимо до "Аптеки Міста"!
                </h1>
                <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                    Знаходьте потрібні аптеки у вашому місті швидко та зручно. Переглядайте інформацію про години роботи, адреси та доступні послуги.
                </p>
                <div className="space-y-4 sm:space-y-0 sm:flex sm:justify-center sm:space-x-4">
                    <Link
                        to="/search"
                        className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-sky-600 hover:bg-sky-700 transition-colors shadow-md hover:shadow-lg transform hover:scale-105"
                    >
                        <Search size={20} className="mr-2" />
                        Знайти Аптеку
                    </Link>
                    <a
                        href="https://maps.google.com" // Приклад посилання на карти
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-sky-500 text-base font-medium rounded-lg text-sky-600 bg-white hover:bg-sky-50 transition-colors shadow-md hover:shadow-lg transform hover:scale-105"
                    >
                        <MapPin size={20} className="mr-2" />
                        Переглянути на Карті (Приклад)
                    </a>
                </div>
            </div>

            {/* Оновлена секція Переваг - тепер як окремий блок */}
            <div className="mt-16 py-12 bg-gradient-to-br from-sky-50 to-indigo-50 rounded-xl shadow-inner"> {/* Додано mt-16 для відступу зверху */}
                <div className="container mx-auto px-4"> {/* Додатковий контейнер, якщо потрібно обмежити ширину контенту всередині градієнтного блоку */}
                    <h2 className="text-3xl font-bold text-center text-sky-700 mb-10">
                        Чому варто обрати наш сервіс?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Перевага 1 */}
                        <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
                            <div className="p-3 bg-sky-100 rounded-full mb-4">
                                <Info size={32} className="text-sky-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-slate-800 mb-2">Актуальна інформація</h3>
                            <p className="text-sm text-slate-600">
                                Завжди свіжі дані про аптеки, їх наявність та послуги.
                            </p>
                        </div>

                        {/* Перевага 2 */}
                        <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
                            <div className="p-3 bg-sky-100 rounded-full mb-4">
                                <FilterIcon size={32} className="text-sky-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-slate-800 mb-2">Зручний пошук</h3>
                            <p className="text-sm text-slate-600">
                                Знаходьте аптеки за назвою, адресою, містом чи годинами роботи.
                            </p>
                        </div>

                        {/* Перевага 3 */}
                        <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
                            <div className="p-3 bg-sky-100 rounded-full mb-4">
                                <ListChecks size={32} className="text-sky-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-slate-800 mb-2">Детальний опис</h3>
                            <p className="text-sm text-slate-600">
                                Повна інформація: адреса, телефон, години роботи, доступні сервіси.
                            </p>
                        </div>

                        {/* Перевага 4 */}
                        <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
                            <div className="p-3 bg-sky-100 rounded-full mb-4">
                                <Smartphone size={32} className="text-sky-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-slate-800 mb-2">Адаптивний дизайн</h3>
                            <p className="text-sm text-slate-600">
                                Комфортне користування на комп'ютері, телефоні чи планшеті.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;
