import React from 'react'
import Layout from "../components/Layout"
import AboutPage from "../components/AboutPage"
import { Helmet } from 'react-helmet'
const About = () => {
    return (
        <Layout>
            <Helmet>
          <meta charSet="utf-8" />
          <title>About Gareth Davies</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
            <AboutPage/>
        </Layout>
    )
}

export default About
