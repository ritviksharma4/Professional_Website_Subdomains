import React from 'react'

import logo from '../assets/images/MyCFO.jpg'

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img width="100px" src={logo} alt="" /></span>
        <h1 style={{ color: '#64ffda' }}>MyCFO.ai</h1>
        <p>Agentic AI orchestration that thinks like a CFO — analyze, optimize, and predict your business finances in real time. <a href="https://ritvik-sharma.com//">Ritvik Sharma</a>.</p>
    </header>
)

export default Header