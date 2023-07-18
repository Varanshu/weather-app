import React, { useState } from 'react'
import { styled } from 'styled-components/macro'

const CitySelector = ({
    result,
    setState
}: {
    result?: any,
    setState?: any
}) => {

    const { setLatLon, setInputValue } = setState

    const [selected, setSelected] = useState<any>()
    return (
        <Wrapper>
            <CountryList>
                {
                    result.map(({ state, country, name, lat, lon }: any, index: number) => (
                        <Item>
                            <input type="radio" name="city-name" id={`city-name-${index}`} hidden
                                onChange={e => {
                                    setSelected({ lat, lon })
                                    setInputValue(name)
                                }}
                            />
                            <label htmlFor={`city-name-${index}`}>{name}, {state}, {country}</label>
                        </Item>
                    ))
                }
            </CountryList>
            {
                selected && <Button onClick={e => setLatLon(selected)}>Select City</Button>
            }
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    justify-content: center;
    align-items: center;
`

const CountryList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 25px;
    justify-content: center;
    align-items: center;
`

const Item = styled.div`
    padding: 10px 15px;
    border-radius: 100px;
    border: 1px solid #ccc;
    background-color: transparent;
    cursor: pointer;
    filter: brightness(1);
    transition: all 0.25s ease-in-out;
    &:hover {
        background-color: #ccc;
        filter: brightness(0.75);
    }

    &:has(input:checked){
        background-color: green;
    }
`

const Button = styled.button`
    padding: 10px 65px;
    border-radius: 100px;
    cursor: pointer;
    filter: brightness(1);
    transition: all 0.25s ease-in-out;
    &:hover {
        filter: brightness(0.75);
    }
`

export default CitySelector