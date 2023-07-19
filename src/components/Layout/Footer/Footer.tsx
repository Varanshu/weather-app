import React from 'react'
import styled from 'styled-components/macro'


const Footer = () => {
    return (
        <Wrapper>
            <div className='container container-lg'>
                Weather App Assignment for mirrAR
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.footer`
    background-color: #Dfe3e4;
    padding: 10px 0;
    @media (max-width: 768px){
        padding: 0 16px;
    }
`


export default Footer