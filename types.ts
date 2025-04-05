export interface DayForecast {
    datetime: string;
    temp: number;
    tempmax: number;
    tempmin: number;
    feelslike: number;
    humidity: number;
    windspeed: number;
}

export interface WeatherResponse {
    resolvedAddress: string;
    days: DayForecast[];
}