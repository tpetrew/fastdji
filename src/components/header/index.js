import React from 'react';
import {Link} from "gatsby";
import {
    headerContainer
} from '../styles/header.module.css'

const Header = () => {
    return (
        <header {...{className: headerContainer}}>
            <Link {...{to: '/'}}>Home</Link>
            <Link {...{to: '/products'}}>Products</Link>
        </header>
    )
}

export default Header
