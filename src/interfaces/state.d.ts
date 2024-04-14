import type { IWeatherData } from '@/interfaces/weatherData';
export interface IStoreState {
    windowWidth: number;
    windowHeight: number;
    deviceType: string;
    orientation: string;
    position: {
        longitude: number;
        latitude: number;
    };
    weatherData: IWeatherData;
}
