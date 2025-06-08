import React from 'react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-slate-800 text-slate-300 py-6 text-center">
            <div className="container mx-auto px-4">
                <p>&copy; {currentYear} Веб-сайт Аптек Міста. Всі права захищено.</p>
                <p className="text-sm mt-1">Розроблено для курсової роботи.</p>
            </div>
        </footer>
    );
};

export default Footer;