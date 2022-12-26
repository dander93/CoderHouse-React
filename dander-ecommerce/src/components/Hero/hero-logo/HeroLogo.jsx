import React from 'react';

import brandLogo from '../../../assets/images/logo.svg';

function BrandLogo() {
    return (
        <a className='navbar-brand d-flex ml' href='#'>
            <img className='d-inline-block align-text-top logo-image' src={brandLogo} alt='Logo' />
            <p className='d-inline-block mt-3 text-warning'>Dander</p>
        </a>
    );
}

export default BrandLogo;