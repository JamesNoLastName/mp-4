"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
    background: '#0f0c29',
`;

const Title = styled.h1`
  font-size: calc(4vw + 10%);
  font-weight: 600;
  color: white;
`;

const Card = styled.div`
  width: 100%;
  max-width: 600px;
  background-color: #ffffff;
  border-radius: 12px;
  padding: 4vw;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    font-weight: bold;
`;

const Label = styled.label`
  display: block;
  font-size: calc(3vw + 10%);
  margin-bottom: 1rem;
  text-align: center;
    font-weight: bold;
  color: black;
`;

const Input = styled.input`
  width: 100%;
  padding: 3vw;
  font-size: calc(2vw + 10%);
  border: 2px solid #d1d5db;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #4f7cfa;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 3vw;
  font-size: calc(2vw + 10%);
  background-color: #4f7cfa;
  color: #fff;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3b64c5;
  }
`;

export default function Home() {
    const [city, setCity] = useState("");
    const router = useRouter();

    const handleSubmit = () => {
        if (city) {
            router.push(`/${encodeURIComponent(city)}`);
        }
    };

    return (
        <Container>
            <Title>Weathermatic</Title>
            <Card>
                <Label htmlFor="city">Going out or stalking a friend? Be informed on the latest weather updates!</Label>
                <Input
                    id="city"
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Ex: Boston, MA"
                />
                <Button type="button" onClick={handleSubmit}>
                    Get Weather
                </Button>
            </Card>
        </Container>
    );
}
