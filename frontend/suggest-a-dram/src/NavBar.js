import React from 'react';

export default function NavBar() {
    return (
        <header>
            {/* logo image with home route */}
            <ul>
                <li className="nav-link">
                    <a>Home</a>
                </li>
                <li className="nav-link">
                    <a>Whiskies</a>
                </li>
            </ul>
        </header>
    )
}