"use client";

import styled from "styled-components";
import { DayForecast } from "@/types";

const WeatherCard = styled.div`
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(12px);
    border-radius: 1.5rem;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
    padding: 2rem;
    margin: 1rem;
    text-align: center;
    max-width: 250px;
    width: auto;
    display: inline-block;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-8px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }
`;

const WeatherTitle = styled.h2`
    font-size: calc(2vw + 10%);
    font-weight: bold;
    color: white;
    margin-bottom: 1rem;
    text-align: center;
`;

const Temperature = styled.p`
    font-size: calc(2vw + 10%);
    font-weight: bold;
    color: white;
    margin-bottom: 1rem;
`;

const WeatherDetails = styled.div`
    margin-top: 1rem;
    font-size: 1.4vw;
    color: white;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
    text-align: left;
`;

const DetailRow = styled.div`
    display: flex;
    justify-content: space-between;
    font-weight: 500;
    font-size: 1rem;
`;

export default function WeatherGrid({ weatherData }: { weatherData: DayForecast }) {
    const formattedDate = new Date(weatherData.datetime);
    const displayDate = isNaN(formattedDate.getTime())
        ? 'Invalid Date'
        : formattedDate.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric',
        });

    return (
        <WeatherCard>
            <WeatherTitle>{displayDate}</WeatherTitle>
            <Temperature>{weatherData.temp}°F</Temperature>

            <WeatherDetails>
                <DetailRow>
                    <span>High: </span>
                    <span>{weatherData.tempmax}°F</span>
                </DetailRow>
                <DetailRow>
                    <span>Low: </span>
                    <span>{weatherData.tempmin}°F</span>
                </DetailRow>
                <DetailRow>
                    <span>Wind: </span>
                    <span>{weatherData.windspeed} mph</span>
                </DetailRow>
                <DetailRow>
                    <span>Humidity: </span>
                    <span>{weatherData.humidity}%</span>
                </DetailRow>
                <DetailRow>
                    <span>Feels like: </span>
                    <span>{weatherData.feelslike}°F</span>
                </DetailRow>
            </WeatherDetails>
        </WeatherCard>
    );
}
