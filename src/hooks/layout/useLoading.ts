import { useContext } from 'react'
import { LoadingContext } from '../../utils/context'

export const useLoading = () => {

    const { loading, setLoading } = useContext(LoadingContext)

    return {
        loading,
        setLoading
    }

}