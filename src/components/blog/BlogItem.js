import React from 'react'
import {Link} from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import Zoom from 'react-reveal/Zoom';

const BlogItem = ({alt, image, slug, title, tag}) => {
    return (
    <>
    <Zoom>
        <div className="hover:opacity-50"> 
        

            <Link to={`/${slug}`}>
                <h1 className="hover:opacity-50"></h1>
                <GatsbyImage image={image}
                alt={alt} className="max-h-[200px] rounded-lg hover:opacity-5088amp"  
                />
                  <h3 className="font-semibold text-black max-w-4/5 text-center mt-2 capitalize sm:text-base text-sm">{title} </h3>
           </Link>

        </div>
        </Zoom>
        </>
    )
}

export default BlogItem
