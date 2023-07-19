import React, { createContext, useState } from 'react'

export const LoadingContext = createContext<any>({})

export const LoadingProvider = ({ children }: any) => {

    const [loading, setLoading] = useState<Boolean>()

    return (
        <LoadingContext.Provider value={{ loading, setLoading }}>
            {children}
        </LoadingContext.Provider>
    )
}

export const TemperatureContext = createContext<any>({})

export const TemperatureProvider = ({ children }: any) => {

    const [tempType, setTempType] = useState<'F' | 'C' | 'K'>('C')

    return (
        <TemperatureContext.Provider value={{ tempType, setTempType }}>
            {children}
        </TemperatureContext.Provider>
    )
}


