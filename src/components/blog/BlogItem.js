import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const BlogItem = ({ alt, image, slug, title }) => {
  return (
    <div className="rounded-lg shadow-md text-white py-12 px-4 hover:shadow-xl relative group hover:-translate-y-1 duration-150 transition min-h-[200px] flex items-center justify-center">
      {image ? (
        <GatsbyImage
          image={image}
          alt={alt}
          className="absolute object-cover w-full h-full left-0 top-0 z-1 rounded-lg filter brightness-75 group-hover:brightness-50"
        />
      ) : (
        <div className="absolute w-full h-full left-0 top-0 z-1 rounded-lg filter brightness-75 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 group-hover:brightness-50"></div>
      )}
      <Link
        className="absolute h-full w-full left-0 top-0 z-20"
        to={`blog/${slug}`}
      ></Link>
      <h2 className="text-center z-10 relative text-xl">{title}</h2>
    </div>
  )
}

export default BlogItem
