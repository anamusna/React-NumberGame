import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import '../App.css';

const Navigation = () => (
    <nav>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/game'>Game</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>

        </ul>

    </nav>

);

export default Navigation;

