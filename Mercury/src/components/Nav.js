import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const Nav = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
        <Scrollspy items={ ['intro', 'tech', 'desc', 'other'] } currentClassName="is-active" offset={-300}>
            <li>
                <Scroll type="id" element="intro">
                    <a href="#">Introduction</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="tech">
                    <a href="#">Technologies Used</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="desc">
                    <a href="#">Description</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="other">
                    <a href="#">Other Projects</a>
                </Scroll>
            </li>
        </Scrollspy>
    </nav>
)

export default Nav
