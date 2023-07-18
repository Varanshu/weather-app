import React, { useState } from 'react'
import { styled } from 'styled-components/macro'
import { useGetCurrentWeather, useGetForecastWeather } from '../../hooks'

const WeatherCalculator = ({
    latLon
}: {
    latLon: any
}) => {

    console.log("qwe", latLon);


    const [result, setResult] = useState<any>()
    const [error, setError] = useState<any>()

    const getCurrentWeather = useGetCurrentWeather()
    const getForecastWeather = useGetForecastWeather()


    const getCurrentWeatherFn = async (e: any) => {
        const { response, error } = await getCurrentWeather(latLon.lat, latLon.lon)
        console.log("asdsadsasda", response, error);

        setResult({
            type: "current",
            response
        })
        setError(error)
    }

    const getForecastFn = async (e: any) => {
        const { response, error } = await getForecastWeather(latLon.lat, latLon.lon)
        console.log("zxc", response, error);
        setResult({
            type: "forecast",
            response
        })
        setError(error)
    }

    return (
        <Wrapper>
            <div className='container container-lg'>
                <ButtonContainer>
                    <Button onClick={getCurrentWeatherFn}>Get Current Weather</Button>
                    <Button onClick={getForecastFn}>Get Forecast Weather</Button>
                </ButtonContainer>
                {/* {
                    result
                        && result.type === 'current'
                        ?
                } */}
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin-top: 30px;
`

const ButtonContainer = styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
`

const Button = styled.div`
    padding: 10px 65px;
    border-radius: 100px;
    border: 1px solid #ccc;
    background-color: transparent;
    cursor: pointer;
    filter: brightness(1);
    transition: all 0.25s ease-in-out;
    &:hover {
        background-color: #ccc;
        filter: brightness(0.75);
    }
    `

export default WeatherCalculator