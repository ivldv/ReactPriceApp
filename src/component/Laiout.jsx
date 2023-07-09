import React from 'react';
import {Link,Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <header>
                <li><Link to="/">Main</Link></li>
                <li><Link to="/Page1">Page1</Link></li>
            </header>

            <Outlet/>

            <footer>2023</footer>
        </>
    );
};

export default Layout;