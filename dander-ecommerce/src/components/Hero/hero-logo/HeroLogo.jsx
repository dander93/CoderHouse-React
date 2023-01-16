import React from 'react';
import { Link } from 'react-router-dom';

import brandLogo from '../../../assets/images/logo.svg';

function BrandLogo() {
    return (
        <Link to='/' className='navbar-brand d-flex ml' >
            <img className='d-inline-block align-text-top logo-image' src={brandLogo} alt='Logo' />
            <p className='d-inline-block mt-3 text-warning'>Dander</p>
        </Link>
    );
}

export default BrandLogo;