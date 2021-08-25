import React from 'react'
import { Helmet } from 'react-helmet'
const ContactPage = () => {
    return (
        <div className="text-center py-48">
             <Helmet>
          <meta charSet="utf-8" />
          <title>Contact Gareth Davies</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
            <h2 className="font-montserrat text-3xl pb-4">Thanks for checking out my new website</h2>
            <p  className="font-semibold w-3/6 mx-auto">To contact me, send an email to 
            gareth@garethdaviesmedia.tech or WhatsApp me on +44 07933334833 </p>
        </div>
    )
}

export default ContactPage
