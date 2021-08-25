import React from 'react'
import {Link} from 'gatsby'
import Fade from 'react-reveal/Zoom';
import { Helmet } from 'react-helmet';
const Layout = ({children}) => {
    const linkStyle = `
    hover:opacity-70
    text-sm
    sm:text-lg
    `
    const logoStyle=`
    text-white 
    font-montserrat
    sm:text-base
    text-sm
    `
    return (
        <div>
             <Helmet>
          <meta charSet="utf-8" />
          <title>Gareth Davies Website Design</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
            <Fade>
            <nav className="flex sm:justify-between justify-around items-center bg-blue-900 lg:px-20 sm:px-6 py-8 text-gray-100">
               <Link to="/"> <h3 className={logoStyle}>Gareth Davies</h3></Link>
                <ul className="flex">
                    <li className={linkStyle}><Link to="/">Home</Link></li>
                    <li className={linkStyle}><Link to="/contact">Contact</Link></li>
                    <li className={linkStyle}><Link to="/about">About</Link></li>
                </ul>
            </nav>
</Fade>
            <main>{children}</main>

            <footer className="text-center py-8 bg-blue-900 text-gray-100">
                <p>Copyright 2021 <span  className={logoStyle}>Gareth Davies Media | created with GatsbyJS + TailwindCSS</span></p>
            </footer>
        </div>
    )
}

export default Layout
