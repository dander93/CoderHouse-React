import React from 'react';
import NavBar from './hero-nav/NavBar';
import HeroLogo from './hero-logo/HeroLogo';

function Hero() {
    return (
        <header className='container-fluid bg-dark bg-opacity-25 py-2 d-flex flex-column flex-lg-row align-items-center justify-content-lg-between border-bottom border-dark'>
            <HeroLogo />
            <NavBar />
        </header>
    )
}

export default Hero;