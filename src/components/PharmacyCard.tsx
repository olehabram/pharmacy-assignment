import React from 'react';
import { Link } from 'react-router';
import type { Pharmacy } from '../types';
import { MapPin, Clock, Phone, CheckCircle, XCircle, Building, Eye } from 'lucide-react';

interface PharmacyCardProps {
    pharmacy: Pharmacy;
}

const PharmacyCard: React.FC<PharmacyCardProps> = ({ pharmacy }) => {
    const placeholderImage = `https://placehold.co/600x400/E0F2FE/0EA5E9?text=${encodeURIComponent(pharmacy.name)}`;

    // Проста логіка для відображення годин роботи (перший запис або "Не вказано")
    const displayHours = pharmacy.workingHours.length > 0
        ? `${pharmacy.workingHours[0].day}: ${pharmacy.workingHours[0].hours}`
        : 'Години роботи не вказано';

    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full group">
            <div className="relative">
                <img
                    src={placeholderImage}
                    alt={`Зображення аптеки ${pharmacy.name}`}
                    className="w-full h-48 object-cover"
                    onError={(e) => { (e.target as HTMLImageElement).src = placeholderImage; }}
                />
                <Link
                    to={`/pharmacy/${pharmacy.id}`}
                    className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    aria-label={`Детальніше про ${pharmacy.name}`}
                >
                    <Eye size={48} className="text-white" />
                </Link>
            </div>

            <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-sky-700 mb-2 flex items-center">
                    <Building size={22} className="mr-2 text-sky-600" />
                    <Link to={`/pharmacy/${pharmacy.id}`} className="hover:underline hover:text-sky-500 transition-colors">
                        {pharmacy.name}
                    </Link>
                </h3>

                <div className="space-y-2 text-sm text-slate-600 mb-4 flex-grow">
                    <p className="flex items-start">
                        <MapPin size={16} className="mr-2 mt-0.5 text-sky-500 flex-shrink-0" />
                        <span>{pharmacy.address}, {pharmacy.city}</span>
                    </p>
                    <p className="flex items-center">
                        <Clock size={16} className="mr-2 text-sky-500 flex-shrink-0" />
                        {displayHours}
                    </p>
                    <p className="flex items-center">
                        <Phone size={16} className="mr-2 text-sky-500 flex-shrink-0" />
                        {pharmacy.phone || 'Не вказано'}
                    </p>
                </div>

                <div className="mt-auto space-y-3">
                    <div className={`flex items-center p-2 rounded-md text-sm ${pharmacy.isOpenNow ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        {pharmacy.isOpenNow ? (
                            <CheckCircle size={18} className="mr-2" />
                        ) : (
                            <XCircle size={18} className="mr-2" />
                        )}
                        {pharmacy.isOpenNow ? 'Зараз відчинено' : 'Зараз зачинено'}
                    </div>
                    <Link
                        to={`/pharmacy/${pharmacy.id}`}
                        className="block w-full text-center px-4 py-2.5 border border-sky-500 text-sm font-medium rounded-md text-sky-600 bg-white hover:bg-sky-50 hover:shadow-md transition-all duration-200"
                    >
                        Детальніше
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PharmacyCard;