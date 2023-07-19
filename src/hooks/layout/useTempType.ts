import { useContext } from 'react'
import { TemperatureContext } from "../../utils/context"

export const useTempType = () => {
    const { tempType, setTempType } = useContext(TemperatureContext)
    return { tempType, setTempType }
}