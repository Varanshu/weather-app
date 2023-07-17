import React from 'react'
import { Link } from 'react-router-dom'

const LinkType = ({
    children,
    to
}: {
    children: any,
    to: string
}) => {
    return (
        <Link to={to}>{children}</Link>
    )
}

export default LinkType