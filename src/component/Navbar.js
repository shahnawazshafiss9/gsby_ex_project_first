import React from 'react'
import {Link} from 'gatsby'
const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">about</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/examples">Examples</Link>
                </li>
                <li>
                    <Link to="/images">Images</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
