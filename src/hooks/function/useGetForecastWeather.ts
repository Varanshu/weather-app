import React, { useState } from 'react'

interface state {
    response: null | any,
    loading: boolean,
    error: null | any
}

export const useGetForecastWeather = () => {
    const getForecastWeather = async (lat: string, lon: string) => {
        try {
            const data = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`)
            const output = await data.json()
            console.log("output", output);

            return { response: output, loading: false, error: null }
        } catch (error) {
            return { response: null, loading: false, error: error }
        }
    }

    return getForecastWeather
}