import React from 'react'
import { useConvertTemp } from '../../hooks';
import { styled } from 'styled-components';
import Lottie from 'lottie-react'


import thunder from '../../static/animations/thunderstorm-animation.json';
import cloudy from '../../static/animations/cloudy-animation.json';
import misty from '../../static/animations/misty-animation.json';
import rainy from '../../static/animations/rainy-animation.json';
import snow from '../../static/animations/snow-animation.json';
import clear from '../../static/animations/sunny-animation.json';
import unknown from '../../static/animations/unknown.json';
import drizzle from '../../static/animations/drizzle-animation.json';
import haze from '../../static/animations/haze.json';



const CurrentContainer = ({
    data
}: {
    data: any
}) => {

    const {
        main,
        weather,
        wind,
        visibility
    } = data

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

    const switchTemperature = useConvertTemp()

    return (
        <Container className='container container-lg'>
            <WeatherStats>
                <TableContainer>
                    <Table_Row>
                        <th>Max Temperature of the Day</th>
                        <td>{switchTemperature(main.temp_max)}</td>
                    </Table_Row>
                    <Table_Row>
                        <th>Min Temperature of the Day</th>
                        <td>{switchTemperature(main.temp_min)}</td>
                    </Table_Row>
                    <Table_Row>
                        <th>Temperature of the Day</th>
                        <td>{switchTemperature(main.temp)}</td>
                    </Table_Row>
                    <Table_Row>
                        <th>What Temperature Feels Link</th>
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
                    <Table_Row>
                        <th>Visibility</th>
                        <td>{visibility}</td>
                    </Table_Row>
                </TableContainer>

                <div>
                    <h2>Wind</h2>
                    <TableContainer>
                        <Table_Row>
                            <th>Speed</th>
                            <td>{wind.speed} m/s</td>
                        </Table_Row>
                        <Table_Row>
                            <th>Direction</th>
                            <td>{wind.deg}</td>
                        </Table_Row>
                    </TableContainer>
                </div>
            </WeatherStats>
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
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    gap: 20px;

    flex-wrap: wrap;
`

const TableContainer = styled.table`
    border-collapse: collapse;
    width: 100%;
    margin-block: 25px;
    border: 1px solid #ddd;

    tr:nth-child(odd){
        background-color: #ccc;
    }
    th {
        width: 70%;
    }
    th, td {
        text-align: center;
        border: 1px solid #ddd;
        padding: 15px 0;
    }
`

const Table_Row = styled.tr`

`

const WeatherStats = styled.div`
    width: calc(50% - 10px);
    @media (max-width: 768px){
        padding: 0 16px;
        width: 100%;
    }
`

const WeatherDesc = styled.div`
    width: calc(50% - 10px);

    @media (max-width: 768px){
        padding: 0 16px;
        width: 100%;
    }
`

const Heading = styled.h1`
    text-align: center;
`

const WeatherContainer = styled.div`
    margin-block: 15px;
`

const WeatherItem = styled.div`
    display: flex;
    gap: 15px;
    align-items: center;
    justify-content: space-evenly;
`

const WeatherTitle = styled.p``

const WeatherIcon = styled(Lottie)`
    width: 150px;
    height: 150px;
`


export default CurrentContainer