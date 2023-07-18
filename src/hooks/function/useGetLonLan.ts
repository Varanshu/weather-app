import React, { useState } from 'react'

interface state {
    response: null | any,
    loading: boolean,
    error: null | any
}

export const useGetLonLan = () => {
    const getLonLan = async (city: string) => {
        try {
            const data = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${process.env.REACT_APP_API_KEY}`)
            const output = await data.json()
            console.log("output", output);
            return { response: output, error: null }
        } catch (error) {
            console.log("error", error);

            return { response: null, error: error }
        }
    }

    return getLonLan
}