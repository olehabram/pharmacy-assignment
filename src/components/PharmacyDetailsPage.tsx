// =============== components/PharmacyDetailsPage.tsx ===============
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router';
import { mockPharmacies } from '../data/mockPharmacies';
import type { Pharmacy as PharmacyType } from '../types'; // Перейменовано, щоб уникнути конфлікту з компонентом
import { MapPin, Clock, Phone, CheckCircle, XCircle, Building, ArrowLeft, ExternalLink } from 'lucide-react';

const PharmacyDetailsPage: React.FC = () => {
    const { pharmacyId } = useParams<{ pharmacyId: string }>();
    const [pharmacy, setPharmacy] = useState<PharmacyType | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        setIsLoading(true);
        // Імітація завантаження даних
        setTimeout(() => {
            const foundPharmacy = mockPharmacies.find(p => p.id === pharmacyId);
            setPharmacy(foundPharmacy || null);
            setIsLoading(false);
        }, 500);
    }, [pharmacyId]);

    if (isLoading) {
        return (
            <div className="flex flex-col justify-center items-center h-64">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-sky-500 mb-4"></div>
                <p className="text-xl text-slate-600">Завантаження деталей аптеки...</p>
            </div>
        );
    }

    if (!pharmacy) {
        return (
            <div className="text-center py-10 bg-white rounded-lg shadow-xl">
                <XCircle size={64} className="mx-auto text-red-500 mb-4" />
                <h2 className="text-3xl font-semibold text-slate-700 mb-2">Аптеку не знайдено</h2>
                <p className="text-slate-500 mb-6">На жаль, ми не змогли знайти інформацію про цю аптеку.</p>
                <Link
                    to="/search"
                    className="inline-flex items-center px-6 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-sky-600 hover:bg-sky-700 transition-colors"
                >
                    <ArrowLeft size={18} className="mr-2" />
                    Повернутися до пошуку
                </Link>
            </div>
        );
    }

    const placeholderImage = `https://placehold.co/800x400/E0F2FE/0EA5E9?text=${encodeURIComponent(pharmacy.name)}`;
    // Corrected Google Maps link to use HTTPS and standard query parameters
    const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${pharmacy.latitude},${pharmacy.longitude}`;

    return (
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
            <Link
                to="/search"
                className="absolute top-28 left-8 md:top-32 md:left-12 z-10 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-all hover:scale-105"
                style={{ marginTop: '1rem', marginLeft: '1rem' }} // Додано для відступу від Header
            >
                <ArrowLeft size={16} className="mr-1.5" />
                До списку
            </Link>
            <img
                src={placeholderImage}
                alt={`Зображення аптеки ${pharmacy.name}`}
                className="w-full h-64 md:h-80 object-cover"
                onError={(e) => { (e.target as HTMLImageElement).src = placeholderImage; }}
            />
            <div className="p-6 md:p-8">
                <h1 className="text-3xl md:text-4xl font-bold text-sky-700 mb-4 flex items-center">
                    <Building size={32} className="mr-3 text-sky-600" /> {pharmacy.name}
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Left Column: Info */}
                    <div className="space-y-3 text-slate-700">
                        <p className="flex items-start">
                            <MapPin size={20} className="mr-3 mt-1 text-sky-500 flex-shrink-0" />
                            <span><strong>Адреса:</strong> {pharmacy.address}, {pharmacy.city}</span>
                        </p>
                        <p className="flex items-center">
                            <Phone size={20} className="mr-3 text-sky-500 flex-shrink-0" />
                            <span><strong>Телефон:</strong> {pharmacy.phone || 'Не вказано'}</span>
                        </p>
                        <div className={`flex items-center p-3 rounded-md text-md ${pharmacy.isOpenNow ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                            {pharmacy.isOpenNow ? (
                                <CheckCircle size={20} className="mr-2" />
                            ) : (
                                <XCircle size={20} className="mr-2" />
                            )}
                            <strong>{pharmacy.isOpenNow ? 'Зараз відчинено' : 'Зараз зачинено'}</strong>
                        </div>
                        <a
                            href={googleMapsLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center mt-2 text-sky-600 hover:text-sky-800 hover:underline"
                        >
                            <ExternalLink size={18} className="mr-1.5" />
                            Відкрити на Google Картах
                        </a>
                    </div>

                    {/* Right Column: Working Hours */}
                    <div className="bg-slate-50 p-4 rounded-lg shadow-inner">
                        <h2 className="text-xl font-semibold text-sky-600 mb-3 flex items-center">
                            <Clock size={22} className="mr-2" /> Години Роботи
                        </h2>
                        <ul className="space-y-1 text-sm text-slate-600">
                            {pharmacy.workingHours.map((wh, index) => (
                                <li key={index} className={`flex justify-between p-1 rounded ${wh.isToday ? 'bg-sky-100 font-semibold' : ''}`}>
                                    <span>{wh.day}:</span>
                                    <span>{wh.hours}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {pharmacy.services && pharmacy.services.length > 0 && (
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold text-sky-600 mb-3">Доступні Послуги:</h2>
                        <div className="flex flex-wrap gap-2">
                            {pharmacy.services.map(service => (
                                <span key={service} className="bg-sky-100 text-sky-700 px-3 py-1.5 text-sm rounded-full shadow-sm">
                                    {service}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
                {/* Placeholder for map integration */}
                <div className="bg-slate-100 p-4 rounded-lg shadow-inner">
                    <h2 className="text-xl font-semibold text-sky-600 mb-3">Розташування на карті:</h2>
                    <div className="aspect-[16/9] bg-slate-300 rounded-md flex items-center justify-center">
                        <a
                            href={googleMapsLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-500 hover:text-sky-600 hover:underline p-4 text-center"
                        >
                            (Плейсхолдер карти – Натисніть, щоб відкрити на Google Картах за координатами)
                        </a>
                    </div>
                </div>
            </div> {/* This closes the div className="p-6 md:p-8" */}
        </div> // This closes the main container div className="bg-white rounded-xl shadow-2xl overflow-hidden"
    );
};

export default PharmacyDetailsPage;
