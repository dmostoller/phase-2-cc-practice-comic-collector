import React from "react"
import Comic from "./Comic"

function ComicsContainer({comics, onRemoveComic}) {
  const collection = comics.map((comic) => {
    return <Comic 
    key={comic.id}
    id={comic.id}
    title={comic.title}
    issue={comic.issue}
    image={comic.image_url}
    onRemoveComic={onRemoveComic}
    />
  })
  return ( 
    <div className="flex-container">
      {collection}
    </div>
  )
}

export default ComicsContainer
