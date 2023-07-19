import React, { useEffect } from 'react'
import { styled } from 'styled-components/macro'

import loading from '../../../static/animations/loading.json'
// import Lottie from 'react-lottie'
import Lottie from 'lottie-react'

const Loading = () => {

    useEffect(() => {
        // if (document.getElementById('loading-div'))
        // Lottie.loadAnimation({
        //     container: document?.querySelector('loading-div'),
        //     animationData: loading
        // })
    }, [])

    return (
        <Wrapper>
            <Overlay>&nbsp;</Overlay>
            {/* <div id='loading-div'  */}
            <Container
                animationData={loading}
                loop={true}
            />

        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 10000;
`

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0,0,0, 0.75);
`

const Container = styled(Lottie)`
    width: 10%;
    height: 10%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

export default Loading