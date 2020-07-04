import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/4.3 crown.svg.svg';
import './header.style.scss';


const Header = () => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo  className='logo'/>
        </Link>
        <Link className='options'>
            <Link className='option' to="/shop">
                SHOP
            </Link>
            <Link className='option' to="/shop">
                CONTACT
            </Link>
        </Link>
    </div>
);

export default Header;
