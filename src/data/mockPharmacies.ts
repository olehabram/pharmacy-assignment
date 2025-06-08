// src/data/mockPharmacies.ts
import type { Pharmacy } from '../types';

// Функція для визначення, чи сьогоднішній день для підсвічування
const getIsToday = (dayAbbreviation: string): boolean => {
    const today = new Date().getDay(); // 0 = Нд, 1 = Пн, ..., 6 = Сб
    const dayMap: { [key: string]: number } = {
        'Нд': 0, 'Пн': 1, 'Вт': 2, 'Ср': 3, 'Чт': 4, 'Пт': 5, 'Сб': 6
    };
    return dayMap[dayAbbreviation] === today;
};

export const mockPharmacies: Pharmacy[] = [
    // --- Аптеки з Києва (оновлені ID) ---
    {
        id: 'k-1', // Оновлено ID
        name: 'Фармація Надія',
        address: 'просп. Свободи, 22А',
        city: 'Київ',
        workingHours: [
            { day: 'Пн', hours: '09:00 - 21:00', isToday: getIsToday('Пн') },
            { day: 'Вт', hours: '09:00 - 21:00', isToday: getIsToday('Вт') },
            { day: 'Ср', hours: '09:00 - 21:00', isToday: getIsToday('Ср') },
            { day: 'Чт', hours: '09:00 - 21:00', isToday: getIsToday('Чт') },
            { day: 'Пт', hours: '09:00 - 21:00', isToday: getIsToday('Пт') },
            { day: 'Сб', hours: '10:00 - 18:00', isToday: getIsToday('Сб') },
            { day: 'Нд', hours: 'Вихідний', isToday: getIsToday('Нд') },
        ],
        phone: '+380 (44) 234-56-78',
        latitude: 50.4863,
        longitude: 30.4737,
        services: ['Медичні вироби', 'Косметика', 'Тонометри', 'Пандус'],
        isOpenNow: false,
    },
    {
        id: 'k-2', // Оновлено ID
        name: 'Аптека Доброго Дня',
        address: 'вул. Хрещатик, 10',
        city: 'Київ',
        workingHours: [
            { day: 'Пн-Нд', hours: 'Цілодобово', isToday: true }
        ],
        phone: '+380 (44) 345-67-89',
        latitude: 50.4470,
        longitude: 30.5222,
        services: ['Цілодобове обслуговування', 'Ліки на замовлення', 'Оптика'],
        isOpenNow: true,
    },
    {
        id: 'k-3', // Оновлено ID
        name: 'Сімейна Аптека',
        address: 'бул. Лесі Українки, 5',
        city: 'Київ',
        workingHours: [
            { day: 'Пн', hours: '08:30 - 20:30', isToday: getIsToday('Пн') },
            { day: 'Вт', hours: '08:30 - 20:30', isToday: getIsToday('Вт') },
            { day: 'Ср', hours: '08:30 - 20:30', isToday: getIsToday('Ср') },
            { day: 'Чт', hours: '08:30 - 20:30', isToday: getIsToday('Чт') },
            { day: 'Пт', hours: '08:30 - 20:30', isToday: getIsToday('Пт') },
            { day: 'Сб', hours: '09:00 - 19:00', isToday: getIsToday('Сб') },
            { day: 'Нд', hours: '09:00 - 19:00', isToday: getIsToday('Нд') },
        ],
        phone: '+380 (44) 456-78-90',
        latitude: 50.4330,
        longitude: 30.5300,
        services: ['Дитячі товари', 'Гомеопатія', 'Доставка ліків'],
        isOpenNow: true,
    },
    {
        id: 'k-4', // Оновлено ID
        name: 'Аптека №1 "МістоФарм"',
        address: 'просп. Перемоги, 50',
        city: 'Київ',
        workingHours: [
            { day: 'Пн', hours: '07:00 - 23:00', isToday: getIsToday('Пн') },
            { day: 'Вт', hours: '07:00 - 23:00', isToday: getIsToday('Вт') },
            { day: 'Ср', hours: '07:00 - 23:00', isToday: getIsToday('Ср') },
            { day: 'Чт', hours: '07:00 - 23:00', isToday: getIsToday('Чт') },
            { day: 'Пт', hours: '07:00 - 23:00', isToday: getIsToday('Пт') },
            { day: 'Сб', hours: '08:00 - 22:00', isToday: getIsToday('Сб') },
            { day: 'Нд', hours: '08:00 - 22:00', isToday: getIsToday('Нд') },
        ],
        phone: '+380 (44) 567-89-01',
        latitude: 50.4510,
        longitude: 30.4500,
        services: ['Широкий асортимент', 'Консультація фармацевта', 'Програма лояльності'],
        isOpenNow: false,
    },
    // --- Аптеки з Івано-Франківська (оновлені ID) ---
    {
        id: 'if-1', // Раніше if-2
        name: 'Аптека "Подорожник" ІФ',
        address: 'вул. Гетьмана Мазепи, 25',
        city: 'Івано-Франківськ',
        workingHours: [
            { day: 'Пн', hours: '08:00 - 22:00', isToday: getIsToday('Пн') },
            { day: 'Вт', hours: '08:00 - 22:00', isToday: getIsToday('Вт') },
            { day: 'Ср', hours: '08:00 - 22:00', isToday: getIsToday('Ср') },
            { day: 'Чт', hours: '08:00 - 22:00', isToday: getIsToday('Чт') },
            { day: 'Пт', hours: '08:00 - 22:00', isToday: getIsToday('Пт') },
            { day: 'Сб', hours: '08:00 - 22:00', isToday: getIsToday('Сб') },
            { day: 'Нд', hours: '09:00 - 21:00', isToday: getIsToday('Нд') },
        ],
        phone: '+380 (50) 123-45-67',
        latitude: 48.9215,
        longitude: 24.7083,
        services: ['Медичні вироби', 'Косметика', 'Тонометри', 'Пандус'],
        isOpenNow: true,
    },
    {
        id: 'if-2', // Раніше if-3
        name: 'Аптека "Здорова Родина" ІФ (Січ.Стрільців)',
        address: 'вул. Січових Стрільців, 15',
        city: 'Івано-Франківськ',
        workingHours: [
            { day: 'Пн-Нд', hours: '08:00 - 21:00', isToday: true }
        ],
        phone: '+380 (67) 234-56-78',
        latitude: 48.9200,
        longitude: 24.7100,
        services: ['Цілодобове обслуговування (уточнювати)', 'Ліки на замовлення', 'Оптика'],
        isOpenNow: true,
    },
    {
        id: 'if-3', // Раніше if-4
        name: 'Аптека "Подорожник" ІФ (Вовчинецька)',
        address: 'вул. Вовчинецька, 26',
        city: 'Івано-Франківськ',
        workingHours: [
            { day: 'Пн', hours: '08:00 - 21:00', isToday: getIsToday('Пн') },
            { day: 'Вт', hours: '08:00 - 21:00', isToday: getIsToday('Вт') },
            { day: 'Ср', hours: '08:00 - 21:00', isToday: getIsToday('Ср') },
            { day: 'Чт', hours: '08:00 - 21:00', isToday: getIsToday('Чт') },
            { day: 'Пт', hours: '08:00 - 21:00', isToday: getIsToday('Пт') },
            { day: 'Сб', hours: '09:00 - 20:00', isToday: getIsToday('Сб') },
            { day: 'Нд', hours: '09:00 - 20:00', isToday: getIsToday('Нд') },
        ],
        phone: '+380 (95) 345-67-89',
        latitude: 48.9135,
        longitude: 24.7002,
        services: ['Дитячі товари', 'Гомеопатія', 'Доставка ліків'],
        isOpenNow: false,
    },
    {
        id: 'if-4', // Раніше if-5
        name: 'Аптека "Здорова Родина" ІФ (Галицька)',
        address: 'вул. Галицька, 57',
        city: 'Івано-Франківськ',
        workingHours: [
            { day: 'Пн', hours: '07:30 - 22:00', isToday: getIsToday('Пн') },
            { day: 'Вт', hours: '07:30 - 22:00', isToday: getIsToday('Вт') },
            { day: 'Ср', hours: '07:30 - 22:00', isToday: getIsToday('Ср') },
            { day: 'Чт', hours: '07:30 - 22:00', isToday: getIsToday('Чт') },
            { day: 'Пт', hours: '07:30 - 22:00', isToday: getIsToday('Пт') },
            { day: 'Сб', hours: '08:00 - 21:00', isToday: getIsToday('Сб') },
            { day: 'Нд', hours: '09:00 - 20:00', isToday: getIsToday('Нд') },
        ],
        phone: '+380 (66) 456-78-90',
        latitude: 48.9177,
        longitude: 24.7165,
        services: ['Широкий асортимент', 'Консультація фармацевта', 'Програма лояльності'],
        isOpenNow: true,
    },
    {
        id: 'if-5', // Раніше if-7
        name: 'Аптека "Здорова Родина" ІФ (Довга)',
        address: 'вул. Довга, 98',
        city: 'Івано-Франківськ',
        workingHours: [
            { day: 'Пн', hours: '08:00 - 21:00', isToday: getIsToday('Пн') },
            { day: 'Вт', hours: '08:00 - 21:00', isToday: getIsToday('Вт') },
            { day: 'Ср', hours: '08:00 - 21:00', isToday: getIsToday('Ср') },
            { day: 'Чт', hours: '08:00 - 21:00', isToday: getIsToday('Чт') },
            { day: 'Пт', hours: '08:00 - 21:00', isToday: getIsToday('Пт') },
            { day: 'Сб', hours: '09:00 - 20:00', isToday: getIsToday('Сб') },
            { day: 'Нд', hours: '09:00 - 19:00', isToday: getIsToday('Нд') },
        ],
        phone: '+380 (50) 426-22-84',
        latitude: 48.9245,
        longitude: 24.7021,
        services: ['Рецептурні ліки', 'Медичні вироби', 'Вітаміни'],
        isOpenNow: true,
    },
    {
        id: 'if-6', // Раніше if-8
        name: 'Аптека "Подорожник" ІФ (Тичини)',
        address: 'вул. Павла Тичини, 8/1',
        city: 'Івано-Франківськ',
        workingHours: [
            { day: 'Пн', hours: '08:00 - 21:00', isToday: getIsToday('Пн') },
            { day: 'Вт', hours: '08:00 - 21:00', isToday: getIsToday('Вт') },
            { day: 'Ср', hours: '08:00 - 21:00', isToday: getIsToday('Ср') },
            { day: 'Чт', hours: '08:00 - 21:00', isToday: getIsToday('Чт') },
            { day: 'Пт', hours: '08:00 - 21:00', isToday: getIsToday('Пт') },
            { day: 'Сб', hours: '08:00 - 21:00', isToday: getIsToday('Сб') },
            { day: 'Нд', hours: '08:00 - 21:00', isToday: getIsToday('Нд') },
        ],
        phone: '+380 (67) 148-53-59',
        latitude: 48.9070,
        longitude: 24.7050,
        services: ['Широкий асортимент', 'Дитячі товари', 'Косметика'],
        isOpenNow: true,
    },
    {
        id: 'if-7', // Раніше if-9
        name: "Аптека \"Бажаємо здоров'я\" ІФ",
        address: 'вул. Дністровська, 26',
        city: 'Івано-Франківськ',
        workingHours: [
            { day: 'Пн-Нд', hours: '08:00 - 21:00', isToday: getIsToday('Пн') },
        ],
        phone: '+380 (67) 293-28-21',
        latitude: 48.9180,
        longitude: 24.7120,
        services: ['Онлайн бронювання', 'Широкий асортимент'],
        isOpenNow: true,
    },
    {
        id: 'if-8', // Раніше if-10
        name: 'Аптека "БАМ" ІФ',
        address: 'вул. Вовчинецька, 140',
        city: 'Івано-Франківськ',
        workingHours: [
            { day: 'Пн-Пт', hours: '08:00 - 21:00', isToday: getIsToday('Пн') },
            { day: 'Сб-Нд', hours: '09:00 - 20:00', isToday: getIsToday('Сб') },
        ],
        phone: '+380 (67) 803-46-49',
        latitude: 48.9030,
        longitude: 24.6995,
        services: ['Медикаменти', 'Дитячі товари'],
        isOpenNow: true,
    },
    {
        id: 'if-9', // Раніше if-11
        name: 'Аптека "Здорова Родина" ІФ (Короля Данила)',
        address: 'вул. Короля Данила, 11',
        city: 'Івано-Франківськ',
        workingHours: [
            { day: 'Пн-Пт', hours: '08:00 - 21:00', isToday: getIsToday('Пн') },
            { day: 'Сб', hours: '09:00 - 20:00', isToday: getIsToday('Сб') },
            { day: 'Нд', hours: '09:00 - 19:00', isToday: getIsToday('Нд') },
        ],
        phone: '+380 (99) 301-17-37',
        latitude: 48.9195,
        longitude: 24.7068,
        services: ['Ліки на замовлення', 'Вітаміни', 'Косметика'],
        isOpenNow: true,
    },
    {
        id: 'if-10', // Раніше if-12
        name: 'АПТЕКА "ЗДОРОВА РОДИНА" ІФ (Незалежності)',
        address: 'вул. Незалежності, 34А',
        city: 'Івано-Франківськ',
        workingHours: [
            { day: 'Пн-Сб', hours: '08:00 - 21:00', isToday: getIsToday('Пн') },
            { day: 'Нд', hours: '08:00 - 19:00', isToday: getIsToday('Нд') },
        ],
        phone: '+380 (50) 500-46-87',
        latitude: 48.9220,
        longitude: 24.7105,
        services: ['Рецептурні ліки', 'Медичні вироби', 'Програма лояльності'],
        isOpenNow: true,
    }
];
