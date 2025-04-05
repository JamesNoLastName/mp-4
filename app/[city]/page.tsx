import { getWeather } from "../../lib/getWeather";
import WeatherGrid from "@/app/components/weatherGrid";
import Link from "next/link";

interface PageProps {
    params: Promise<{ city: string }>;
}

export default async function WeatherPage({ params }: PageProps) {
    const { city } = await params;
    const cityName = decodeURIComponent(city);
    const weather = await getWeather(cityName);

    if (!weather) {
        return (
            <div >
                <div>
                    <h1>Error: City nonexistent</h1>
                    <Link href="/" style={{ color: 'white' }}>
                        Return to start
                    </Link>
                </div>
            </div>
        );
    }
    return (
        <div>
            <h1>
                Weather in {weather.resolvedAddress}
            </h1>
            <div>
                {weather.days.slice(0, 7).map((day, index) => (
                    <WeatherGrid
                        key={index}
                        weatherData={{
                            datetime: day.datetime,
                            temp: day.temp,
                            tempmax: day.tempmax,
                            tempmin: day.tempmin,
                            windspeed: day.windspeed,
                            humidity: day.humidity,
                            feelslike: day.feelslike,
                        }}
                    />
                ))}
            </div>
        </div>
    );
}
