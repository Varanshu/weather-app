import React from 'react'

const ForecastContainer = ({
    data
}: {
    data: any
}) => {
    console.log(data)
    return (
        <div className='container container-lg'>ForecastContainer</div>
    )
}

export default ForecastContainer