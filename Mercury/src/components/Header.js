import React from 'react'

import logo from '../assets/images/Mercury_Logo.png'

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img width="100px" src={logo} alt="" /></span>
        <h1 style={{ color: '#64ffda' }}>Mercury</h1>
        <p>A Chatbot that can take Food order in the form of Audio / Text 
            and automatically place the order for the User.<br />
        Designed by <a href="https://ritvik-sharma.com//">Ritvik Sharma</a>.</p>
    </header>
)

export default Header