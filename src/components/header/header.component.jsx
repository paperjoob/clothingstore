import React from 'react';
import { Link } from 'react-router-dom';

// syntax for importing SVG, naming it as Logo
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';

import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser }) => (
    <div className='header'>
        <Link to="/" className='logo-container'>
            <Logo className='logo'></Logo>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/contact'>
                CONTACT
            </Link>
            {
                // if currentUser is an object or someone is logged in, show the signout option
                // else render the SIGN IN link, if no one is logged in
                currentUser ?
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to='/signin'>SIGN IN</Link>
            }
        </div>
    </div>
);

export default Header;