import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const BlogItem = ({ alt, image, slug, title }) => {
  return (
    <div className="post-cover rounded-lg shadow-md text-white py-12 px-6 hover:shadow-xl relative group hover:-translate-y-1 duration-150 transition min-h-[200px] flex items-center justify-center">
      {image ? (
        <GatsbyImage
          image={image}
          alt={alt}
          className="absolute object-cover w-full h-full left-0 top-0 z-1 rounded-lg"
        />
      ) : (
        <div className="absolute w-full h-full left-0 top-0 z-1 rounded-lg bg-gradient-animated"></div>
      )}
      <Link
        className="absolute h-full w-full left-0 top-0 z-20"
        to={`blog/${slug}`}
      ></Link>
      <h2 className="text-center z-10 relative text-xl bg-black bg-opacity-70 px-1">
        {title}
      </h2>
    </div>
  )
}

export default BlogItem
