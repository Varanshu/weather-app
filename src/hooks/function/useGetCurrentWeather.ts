import React, { useState } from 'react'

interface state {
    response: null | any,
    loading: boolean,
    error: null | any
}

export const useGetCurrentWeather = () => {
    const getCurrentWeather = async (lat: string, lon: string) => {
        try {
            const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`)
            const output = await data.json()

            return { response: output, error: null }
        } catch (error) {
            return { response: null, error: error }
        }
    }

    return getCurrentWeather
}