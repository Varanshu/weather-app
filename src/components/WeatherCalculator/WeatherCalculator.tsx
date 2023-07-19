import React, { useState } from 'react'
import { styled } from 'styled-components/macro'
import { useGetCurrentWeather, useGetForecastWeather, useLoading } from '../../hooks'
import CurrentContainer from '../CurrentContainer/CurrentContainer'
import ForecastContainer from '../ForecastContainer/ForecastContainer'

const WeatherCalculator = ({
    latLon
}: {
    latLon: any
}) => {

    console.log("qwe", latLon);

    const { setLoading } = useLoading()


    const [result, setResult] = useState<any>()
    const [error, setError] = useState<any>()

    const getCurrentWeather = useGetCurrentWeather()
    const getForecastWeather = useGetForecastWeather()


    const getCurrentWeatherFn = async (e: any) => {
        setLoading(true)
        const { response, error } = await getCurrentWeather(latLon.lat, latLon.lon)
        console.log("asdsadsasda", response, error);

        setResult({
            type: "current",
            response
        })
        setError(error)
        setLoading(false)
    }

    const getForecastFn = async (e: any) => {
        setLoading(true)
        const { response, error } = await getForecastWeather(latLon.lat, latLon.lon)
        console.log("zxc", response, error);
        setResult({
            type: "forecast",
            response
        })
        setError(error)
        setLoading(false)
    }

    return (
        <Wrapper>
            <div className='container container-lg'>
                <ButtonContainer>
                    <Button onClick={getCurrentWeatherFn} disabled={result?.type === "current"}>Get Current Weather</Button>
                    <Button onClick={getForecastFn} disabled={result?.type === "forecast"}>Get Forecast Weather</Button>
                </ButtonContainer>

                <Container>
                    {
                        result && result.type && result.response
                            ? result.type === 'current'
                                ? <CurrentContainer data={result.response} />
                                : result.type === "forecast"
                                    ? <ForecastContainer data={result.response} />
                                    : null
                            : null
                    }
                </Container>
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

const Button = styled.button`
    padding: 10px 65px;
    border-radius: 100px;
    border: 1px solid #ccc;
    background-color: transparent;
    &:not(:disabled){
        cursor: pointer;
    }
    filter: brightness(1);
    transition: all 0.25s ease-in-out;
    &:hover {
        background-color: #ccc;
        filter: brightness(0.75);
    }
    &:disabled {
        background-color: #ccc;
    }
    `

const Container = styled.div`
    margin-top: 30px;

`

export default WeatherCalculator