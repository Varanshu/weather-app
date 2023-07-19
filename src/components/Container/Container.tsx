import React, { useState } from 'react'
import { styled } from 'styled-components/macro'
import { useGetCurrentWeather, useGetForecastWeather, useGetLonLan, useLoading } from '../../hooks'
import CitySelector from '../CitySelector/CitySelector'
import WeatherCalculator from '../WeatherCalculator/WeatherCalculator'

const Container = () => {

    const [inputValue, setInputValue] = useState('')

    const [response, setResponse] = useState<any>()
    const [error, setError] = useState<any>()

    const [latLon, setLatLon] = useState<any>()

    const { setLoading } = useLoading()

    const getLonLan = useGetLonLan()

    const submitHandler = async (e: any) => {
        e.preventDefault()
        setLoading(true)
        console.log("asdasda", inputValue);
        setLatLon(null)

        const { response, error } = await getLonLan(inputValue)

        console.log("res", response);


        setResponse(response)
        setError(error)
        setLoading(false)
        // const forecase = await getForecastWeather(inputValue)
        // console.log(forecase);

    }

    console.log("latLon", latLon);


    return (
        <Wrapper className='container container-lg'>
            <Heading>Weather App</Heading>
            <InputContainer onSubmit={e => submitHandler(e)}>
                <Input type="text" value={inputValue} placeholder="Enter City Name" onChange={e => setInputValue(e.target.value)} />
                <InputButton type='submit' value="Search City" />
            </InputContainer>
            {
                response && !latLon
                    ? <CitySelector
                        result={response}
                        setState={{
                            setLatLon,
                            setInputValue
                        }}
                    />
                    : null
            }

            {
                latLon
                    ? <WeatherCalculator latLon={latLon} />
                    : null
            }
        </Wrapper>
    )
}

const Heading = styled.h1`
    font-size: 34px;
    line-height: 1.25;
    margin-block: 30px 45px;
    font-weight: bold;
    text-align: center;
`

const Wrapper = styled.div`
    padding-top: 30px;
`

const InputContainer = styled.form`
    /* margin-top: 2; */
    width: 80%;
    display: flex;
    border-radius: 100px;
    margin-inline: auto;
`

const Input = styled.input`
    padding: 10px 20px;
    width: 70%;
    font-size: 18px;
    line-height: 1.5;
    border-radius:  100px 0 0 100px ;
`

const InputButton = styled.input`
    width: 30%;
    font-size: 26px;
    font-family: Ysabeau Infant;
    line-height: 1.5;
    border-radius: 0 100px 100px 0;
    border-left: none;
    cursor: pointer;
    filter: brightness(1);
    transition: all 0.25s ease-in-out;
    &:hover {
        filter: brightness(0.75);
    }
`

export default Container