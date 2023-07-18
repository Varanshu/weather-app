import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'

const Layout = ({
    children
}: {
    children: any
}) => {

    return (
        <div>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout