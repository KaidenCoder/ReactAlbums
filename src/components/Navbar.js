import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <header>
            <ul className="navlink">
                <li><Link to="/ReactAlbums">Get</Link></li>
                <li><Link to="/ReactAlbums/post">Post</Link></li>
                <li><Link to="/ReactAlbums/put">Put</Link></li>
                <li><Link to="/ReactAlbums/delete">Delete</Link></li>
            </ul>

        </header>
    )
}

export default Navbar
