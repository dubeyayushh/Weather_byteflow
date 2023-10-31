import React from 'react'
import styled from 'styled-components';
import perfectday from '../image/perfect-day.svg'

const WeatherLogo = styled.img`
    width: 140px;
    height: 140px;
    margin: 20px auto;
`;

const ChooseCityLabel = styled.span`
    color: lid 1px;
    ;
    margin: 10px auto;
    font-size: 18px;
    font-weight: bold;
`;

const SearchBox = styled.form`
    display: flex;
    flex-direction: row;
    border: black solid 1px;
    boder-radius: 2px;
    color: black;
    margin: 20px auto;
    font-size: 18px;
    font-weight: bold;
     
    & input{
        padding: 10px;
        font-size: 14px;
        border: none;
        outline: none;
        font-weight: bold;
        font-family: Montserrat;
    }

    & button{
        padding: 0 10px;
        font-size: 14px;
        color: white;
        background-color: black;
        border: none;
        outline: none;
        font-weight: bold;
        cursor: pointer;
        font-family: Monteserrat;
    }
`;
const CityComponents = (props) => {
    const {updateCity, fetchWeather} = props;
  return (
    <>
        <WeatherLogo src={perfectday} />
        <ChooseCityLabel>Find Weather Of Your City</ChooseCityLabel>
        <SearchBox onSubmit={fetchWeather}>
            <input 
                placeholder='City' 
                onChange={(e) => updateCity(e.target.value)}
            />
            <button type="submit">Search</button>
        </SearchBox>
    </>
  )
}

export default CityComponents