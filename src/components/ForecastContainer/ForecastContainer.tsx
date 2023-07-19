import React from 'react'
import { styled } from 'styled-components/macro'


import thunder from '../../static/animations/thunderstorm-animation.json';
import cloudy from '../../static/animations/cloudy-animation.json';
import misty from '../../static/animations/misty-animation.json';
import rainy from '../../static/animations/rainy-animation.json';
import snow from '../../static/animations/snow-animation.json';
import clear from '../../static/animations/sunny-animation.json';
import unknown from '../../static/animations/unknown.json';
import drizzle from '../../static/animations/drizzle-animation.json';
import haze from '../../static/animations/haze.json';
import { useConvertTemp } from '../../hooks';

import Lottie from 'lottie-react'

const ForecastContainer = ({
    data
}: {
    data: any
}) => {
    const getFile = (id: number) => {
        // return useAnimationFile(id)
        if (id >= 200 && id < 300)
            return thunder
        else if (id >= 300 && id < 400)
            return drizzle
        else if (id >= 500 && id < 600)
            return rainy
        else if (id >= 600 && id < 700)
            return snow
        else if (id === 701)
            return misty
        else if (id === 721 || id === 741 || id === 761)
            return haze
        else if (id === 800)
            return clear
        else if (id > 800 && id < 900)
            return cloudy
        else
            return unknown
    }

    // const useGetTemp = (temp: number) => {
    //     return useConvertTemp(temp)
    // }


    const switchTemperature = useConvertTemp()

    return (
        <div className='container container-lg'>
            <Container>
                {
                    data.map(({ main, weather }: any, index: number) => {
                        return (
                            <WeatherCard>
                                <TableContainer>
                                    <Table_Row>
                                        <th>Max Temp</th>
                                        <td>{switchTemperature(main.temp_max)}</td>
                                    </Table_Row>
                                    <Table_Row>
                                        <th>Min Temp</th>
                                        <td>{switchTemperature(main.temp_min)}</td>
                                    </Table_Row>
                                    <Table_Row>
                                        <th>Temp</th>
                                        <td>{switchTemperature(main.temp)}</td>
                                    </Table_Row>
                                    <Table_Row>
                                        <th>Feels Link</th>
                                        <td>{switchTemperature(main.feels_like)}</td>
                                    </Table_Row>
                                    <Table_Row>
                                        <th>Humidity</th>
                                        <td>{main.humidity} %</td>
                                    </Table_Row>
                                    <Table_Row>
                                        <th>Pressure</th>
                                        <td>{main.pressure} hPa</td>
                                    </Table_Row>
                                </TableContainer>
                                <WeatherDesc>
                                    <Heading>Current Weather</Heading>
                                    <WeatherContainer>
                                        {
                                            weather.map(({ main, id }: any, index: number) => {
                                                return (
                                                    <WeatherItem>
                                                        <WeatherTitle>{main}</WeatherTitle>
                                                        <WeatherIcon
                                                            animationData={getFile(id)}
                                                            loop={true}
                                                        />
                                                    </WeatherItem>
                                                )
                                            })
                                        }
                                    </WeatherContainer>
                                </WeatherDesc>
                            </WeatherCard>
                        )
                    })
                }
            </Container>
        </div>
    )
}

const Container = styled.div`
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    @media (max-width: 768px){
        padding: 0 16px;
    }

`

const WeatherCard = styled.div`
    width: calc((100% / 6 ) - 10px);
    @media (max-width: 768px){
        /* padding: 0 16px; */
        width: calc((100% / 2 ) - 15px);
    }

`

const TableContainer = styled.table`
    border-collapse: collapse;
    width: 100%;
    /* margin-block: 25px; */
    flex-grow: 1;
    border: 1px solid #ddd;

    tr:nth-child(odd){
        background-color: #ccc;
    }
    th {
        width: 50%;
    }
    th, td {
        text-align: center;
        border: 1px solid #ddd;
        padding: 15px 0;
    }
`

const Table_Row = styled.tr`

`

const WeatherDesc = styled.div`
    width: 100%;
`

const Heading = styled.h1`
    text-align: center;
`

const WeatherContainer = styled.div`
    margin-block: 15px;
`

const WeatherItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
    justify-content: space-evenly;
`

const WeatherTitle = styled.p``

const WeatherIcon = styled(Lottie)`
    width: 150px;
    height: 150px;
`

export default ForecastContainer