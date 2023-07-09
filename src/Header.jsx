import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <nav>
            <li><Link to="/">Main</Link></li>
            <li><Link to="/Page1">Page1</Link></li>
        </nav>
    );
};

export default Header;