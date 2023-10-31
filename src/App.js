import './App.css';
import styled from "styled-components";
import CityComponents from './modules/CityComponents';
import WeatherComponents from './modules/WeatherComponents';
import { useState } from 'react';
import axios from 'axios';

const API_KEY = "0e74d6f055199e169d4d42a212cb8a76";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  padding: 20px 10px;
  margin: auto;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 #555;
  background: white;
  font-family: Montserrat;
`;

const AppLabel= styled.span`
  color: black;
  font-size: 18px;
  font-weight:bold;
`;

function App() {
  const[city, updateCity] = useState(null);
  const[weather, updateWeather] = useState(null);

  const fetchWeather = async(e) => {
    e.preventDefault();
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );

    updateWeather(response?.data);
  }
  return (
    <Container>
      <AppLabel>Any Time Weather</AppLabel>
      {city && weather?
        <WeatherComponents weather={weather} city={city} />
        :
        <CityComponents updateCity={updateCity} fetchWeather={fetchWeather}/>
      }
    </Container>
  );
}

export default App;
