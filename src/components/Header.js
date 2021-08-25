import React from 'react'
import Fade from 'react-reveal/Zoom';

const Header = () => {
    return (
        <Fade>
        <header className="bg-blue-900	 text-gray-100 pt-16 pb-10 text-center">
        <h1 className="font-semibold font-montserrat lg:text-5xl sm:text-4xl text-2xl pb-4">Hello, my name is Gareth Davies</h1>
        <p className="lg:text-2xl sm:text-lg text-sm font-light">I'm a web designer/developer from the United Kingdom.</p>
        </header>
        </Fade>
    )
}

export default Header
