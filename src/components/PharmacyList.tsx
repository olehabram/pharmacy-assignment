// =============== components/PharmacyList.tsx ===============
import React from 'react';
import PharmacyCard from './PharmacyCard';
import type { Pharmacy } from '../types';
import { XCircle } from 'lucide-react';

interface PharmacyListProps {
    pharmacies: Pharmacy[];
}

const PharmacyList: React.FC<PharmacyListProps> = ({ pharmacies }) => {
    if (pharmacies.length === 0) {
        return (
            <div className="text-center py-10 bg-white rounded-lg shadow">
                <XCircle size={48} className="mx-auto text-amber-500 mb-4" />
                <p className="text-xl text-slate-600">Аптеки не знайдено.</p>
                <p className="text-slate-500">Спробуйте змінити параметри пошуку або фільтри.</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pharmacies.map(pharmacy => (
                <PharmacyCard key={pharmacy.id} pharmacy={pharmacy} />
            ))}
        </div>
    );
};

export default PharmacyList;