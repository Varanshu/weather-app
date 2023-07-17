import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import GlobalStyles from '../../styles/globalStyles'

const Layout = ({
    children
}: {
    children: any
}) => {

    return (
        <div>
            <GlobalStyles />
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout