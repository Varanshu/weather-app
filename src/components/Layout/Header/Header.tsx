import React from 'react'

import logo from '../../../images/weather-logo.png'
import styled from 'styled-components/macro'

import LinkType from '../../Shared/LinkType/LinkType'

const Header = () => {
    return (
        <Wrapper className=''>
            <div className='container container-lg'>
                <LinkType to='/'>
                    <Logo src={logo} alt='Logo' />
                </LinkType>
            </div>
        </Wrapper>
    )
}

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
`

export default Header