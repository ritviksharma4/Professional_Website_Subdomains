import React from 'react'

import logo from '../assets/images/HyperSafety_Logo.png'

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img width="100px" src={logo} alt="" /></span>
        <h1 style={{ color: '#64ffda' }}>HyperSafety</h1>
        <p>An app for monitoring People with or without Masks to keep the Workplace Safe. <br/>
        Designed by <a href="https://ritvik-sharma.com//">Ritvik Sharma</a>.</p>
    </header>
)

export default Header