import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BlogItem from "./BlogItem"
import { Link } from 'gatsby'
import Fade from 'react-reveal/Zoom';

const Blog = () => {

    const articles = useStaticQuery(graphql`
    {
        allMarkdownRemark {
        nodes {
            frontmatter {
                title
                author
                tag
                slug
                image {
                    childImageSharp {
                        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
                    }
                }
            }
            html
            
            }
        }
    }
    `)

    const allArticles = articles.allMarkdownRemark.nodes.map((item, index) => (
        <BlogItem
        key={index}
        image={item.frontmatter.image.childImageSharp.gatsbyImageData}
        slug={item.frontmatter.slug}
        alt={item.frontmatter.title}
        title={item.frontmatter.title}
        tag={item.frontmatter.tag}
        author={item.frontmatter.author}

        />
    ))
    return (
        <>
         <Fade left>
        <div className="px-10 py-12">
            <section className="text-blueGray-700 ">
  <div className="container flex flex-col items-center px-5 py-16 mx-auto md:flex-row lg:px-28">
    <div className="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:mb-0">
      <h2 className="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font"> Website builder! </h2>
      <h1 className="mb-8 text-2xl font-black tracking-tighter text-black md:text-5xl title-font"> Website Design in the UK </h1>
      <p className="mb-8 text-base leading-relaxed text-left text-blueGray-600 "> I develop unique and blazing fast websites for your business. If you need a website get in contact today for a no obligation free quote </p>
      <div className="flex flex-col justify-center lg:flex-row">
          <Link to="/contact">
        <button className="flex items-center px-6 py-2 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-lg hover:bg-blue-700 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"> Contact Me </button>
      </Link>
      </div>
    </div>
    <div className="w-full lg:w-5/6 lg:max-w-lg md:w-1/2">
      <img className="object-cover object-center rounded-lg " alt="hero" src="https://images.pexels.com/photos/4533077/pexels-photo-4533077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
    </div>
  </div>
</section>
<Fade right>
<section className="text-blueGray-700 ">
  <div className="container flex flex-col items-start px-5 py-16 mx-auto lg:items-center md:flex-row lg:px-28">
    <div className="w-full mb-10 lg:w-5/6 lg:max-w-lg md:w-1/2">
      <img className="object-cover object-center rounded" alt="hero" loading="lazy" src="https://images.pexels.com/photos/270557/pexels-photo-270557.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
    </div>
    <div className="flex flex-col items-start text-left lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16">
      <h2 className="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font">Services I offer</h2>
      <h1 className="mb-8 text-2xl font-bold tracking-tighter text-left text-black title-font"> I offer a range of services from Website Design to Video Production.</h1>
      <p className="mb-8 text-base leading-relaxed text-left text-blueGray-700">I create websites for all sizes of business from multi level e-com to simple business websites with four pages. Below is what exactly I offer.</p>
      <p className="flex mb-2 text-blueGray-600"><span className="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full">
          <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}>
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
          </svg>
        </span>Website Design/Dev</p>
      <p className="flex mb-2 text-blueGray-600"><span className="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full">
          <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}>
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
          </svg></span>Video Production & Editing</p>
      <p className="flex mb-6 text-blueGray-600"><span className="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full">
          <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}>
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
          </svg></span>Social Media Marketing</p>
    </div>
  </div>
</section>
</Fade>


            <h3 className="text-2xl font-montserrat">Latest from my blog</h3>
            <div className="grid md:grid-cols-3 grid-cols-2 gap-x-4 gap-y-10 mt-8">
            {allArticles} 
            </div>
        </div>
       
        </Fade>
        </>
    )
}

export default Blog
