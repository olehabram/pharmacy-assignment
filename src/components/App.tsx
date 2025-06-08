import React from 'react';
import { Routes, Route } from 'react-router';
import Header from './Header';
import Footer from './Footer';
import HomePage from './HomePage';
import PharmacySearchPage from './PharmacySearchPage';
import PharmacyDetailsPage from './PharmacyDetailsPage';
import NotFoundPage from './NotFoundPage';

// Іконки можна залишити тут або перенести в окремий файл, якщо їх буде дуже багато
import { Search, Filter, List, Pill, Clock, MapPin, Phone, CheckCircle, XCircle, Building, Home, Info } from 'lucide-react';
export { Search, Filter, List, Pill, Clock, MapPin, Phone, CheckCircle, XCircle, Building, Home, Info };


const App: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/search" element={<PharmacySearchPage />} />
                    <Route path="/pharmacy/:pharmacyId" element={<PharmacyDetailsPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
};

export default App;
