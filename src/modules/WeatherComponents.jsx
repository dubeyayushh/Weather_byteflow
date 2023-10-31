import React from 'react';
import styled from "styled-components";

export const WeatherInfoIcons = {
    sunset: "./assets/temp.svg",
    sunrise: "./assets/temp.svg",
    humidity: "./assets/humidity.svg",
    wind: "./assets/wind.svg",
    pressure: "./assets/pressure.svg",
};

const WeatherCondition = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: center;
    margin: 10px auto;
    font-weight: bold;
    font-size: 30px;
`;

const Condition = styled.div`
    margin: 20px;
    font-size: 14px;
    & span{
        font-size: 28px;
    }
`;

const Location = styled.span`
    margin: 15px auto;
    text-transform: capitalize;
    font-size: 28px;
    font-weight: bold;
`;

const WeatherInfoLabel = styled.span`
    margin: 20px 25px 10px;
    text-transform: capitalize;
    text-align: start;
    width: 90%;
    font-weight: bold;
    font-size: 14px;
`;

const WeatherInfoContainer = styled.div`
    display: flex;
    width: 90%;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
`;

const InfoContainer = styled.div`
  display: flex;
  margin: 5px 10px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const InfoIcon = styled.img`
  width: 36px;
  height: 36px;
`;

const InfoLabel = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin: 15px;
  & span {
    font-size: 12px;
    text-transform: capitalize;
  }
`;

const WeatherInfoComponent = (props)  => {
    const {name, value} = props;
    return(
        <InfoContainer>
            <InfoIcon src={WeatherInfoIcons[name]}/>
            <InfoLabel>
                {value}
                <span>{name}</span>
            </InfoLabel>

        </InfoContainer>
    )
}
const WeatherComponents = (props) => {
    const {weather} = props;
    const isDay = weather?.weather[0]?.icon
    const getTime = (timeStamp) => {
        return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
    }
  return (
    <>
        <WeatherCondition>
            <Condition>
                <span>
                    {`${Math.floor(weather?.main?.temp - 273)}°C`}
                </span>
                {`| ${weather?.weather[0].description}`}
            </Condition>  
        </WeatherCondition>
        <Location>{`${weather?.name}, ${weather?.sys?.country}`}</Location>
        <WeatherInfoLabel>WeatherInfo</WeatherInfoLabel>
        <WeatherInfoContainer>
            <WeatherInfoComponent name={isDay ? "sunset" : "sunrise"} value={`${getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}`}/>
            <WeatherInfoComponent name={"humidity"} value={weather?.main?.humidity}/>
            <WeatherInfoComponent name={"wind"} value={weather?.wind?.speed}/>
            <WeatherInfoComponent name={"pressure"} value={weather?.main?.pressure}/>
        </WeatherInfoContainer>
    </>
  )
}

export default WeatherComponents