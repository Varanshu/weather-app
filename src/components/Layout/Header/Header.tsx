import React from 'react'

import logo from '../../../images/weather-logo.png'
import styled from 'styled-components/macro'

import LinkType from '../../Shared/LinkType/LinkType'
import { useLoading, useTempType } from '../../../hooks'

const Header = () => {

    const { tempType, setTempType } = useTempType()

    return (
        <Wrapper className=''>
            <Container className='container container-lg'>
                <LinkType to='/'>
                    <Logo src={logo} alt='Logo' />
                </LinkType>
                <TempContainer>
                    <RadioItem>
                        <RadioInput name='temp-unit' type='radio' id='celcius' hidden onChange={e => e.target.checked && setTempType('C')} checked={tempType === 'C'} />
                        <RadioLabel className='radio_label' htmlFor='celcius'>Celcius</RadioLabel>
                    </RadioItem>
                    <RadioItem>
                        <RadioInput name='temp-unit' type='radio' id='fahrenheit' hidden onChange={e => e.target.checked && setTempType('F')} />
                        <RadioLabel className='radio_label' htmlFor='fahrenheit'>Fahrenheit</RadioLabel>
                    </RadioItem>
                </TempContainer>
            </Container>
        </Wrapper>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

`
const Wrapper = styled.header`
    background-color: #Dfe3e4;
    padding: 10px 0;
    box-shadow: 0 5px 15px rgba(226,223,236,.541);
    position: fixed;
    top: 0;
    width: 100%;
    left: 0;
    z-index: 1000;
`

const Logo = styled.img`
    height: 10vh;
    padding-left: 16px;
`

const TempContainer = styled.ul`
    position: relative;
    display: inline-flex;
    gap: 20px;
    @media (max-width: 768px){
        padding-right:  16px;
    }
`

const RadioItem = styled.li`
    position: relative;
    display: inline-block;
`

const RadioLabel = styled.label`
    position: relative;
    z-index: 2;
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    font-weight:700;
    border-radius: var(--radio-switch-radius);
    cursor: pointer;
    font-size: var(--ri5-text-sm);
    -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
    transition: all 0.25s;
  `

const RadioInput = styled.input`
    &:checked ~ .radio_label {
        color: green;
    }
`

export default Header