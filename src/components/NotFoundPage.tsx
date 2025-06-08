import React from 'react';
import { Link } from 'react-router';
import { AlertTriangle, Home } from 'lucide-react';

const NotFoundPage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-20rem)] text-center px-4">
            <AlertTriangle size={80} className="text-amber-500 mb-6 animate-pulse" />
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-4">404</h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-700 mb-3">Сторінку не знайдено</h2>
            <p className="text-slate-500 mb-8 max-w-md">
                На жаль, сторінка, яку ви шукаєте, не існує, або її було переміщено.
            </p>
            <Link
                to="/"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg shadow-md text-white bg-sky-600 hover:bg-sky-700 transition-colors transform hover:scale-105"
            >
                <Home size={20} className="mr-2" />
                На Головну
            </Link>
        </div>
    );
};

export default NotFoundPage;