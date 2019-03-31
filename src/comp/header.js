import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {

    const logo = () => (
        <Link to="/" className="logo">
        </Link>
    )

    const navBar = () => {
        return (
            <div></div>
        )
    }

    return (
        <header>
            <div className="header">
                <FontAwesomeIcon icon="basketball-ball" className="ball-1" />
                <FontAwesomeIcon icon="basketball-ball" className="ball-2" />
                {navBar()}
                {logo()}
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/teams">Teams</Link>
                    <Link to="/news">Hot News</Link>
                    <Link to="/contact">Contact Us</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header