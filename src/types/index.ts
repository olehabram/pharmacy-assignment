// src/types/index.ts

export interface WorkingHour { // Змінено на однину для одного запису про години
    day: string;
    hours: string;
    isToday?: boolean; // Зроблено необов'язковим, як і було
}

export interface Pharmacy {
    id: string;
    name: string;
    address: string;
    city: string;
    workingHours: WorkingHour[]; // Правильно використовує WorkingHour
    phone?: string; // Залишено необов'язковим
    latitude: number;
    longitude: number;
    services?: string[]; // Залишено необов'язковим
    isOpenNow: boolean;
    // imageUrl?: string;
}