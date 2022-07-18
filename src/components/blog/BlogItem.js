import React from "react"
import { Link } from "gatsby"

const BlogItem = ({ alt, image, slug, title }) => {
  return (
    <div className="rounded shadow-md bg-white py-12 px-4 hover:shadow-xl relative group">
      <Link
        className="absolute h-full w-full left-0 top-0"
        to={`blog/${slug}`}
      ></Link>
      <h2 className="text-center group-hover:font-semibold">{title}</h2>
    </div>
  )
}

export default BlogItem
