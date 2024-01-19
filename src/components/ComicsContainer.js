import React from "react"
import Comic from "./Comic"

function ComicsContainer({comics}) {
  const collection = comics.map((comic) => {
    return <Comic 
    key={comic.id}
    title={comic.title}
    issue={comic.issue}
    image={comic.image_url}
    />
  })
  return ( 
    <div className="flex-container">
      {collection}
    </div>
  )
}

export default ComicsContainer
