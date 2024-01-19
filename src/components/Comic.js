import React, {useState} from "react"

function Comic({id, title, issue, image, onRemoveComic}) {
  const [isCoverView, setIsCoverView] = useState(true)
  const toggleDetails = () => {
    setIsCoverView(!isCoverView)
  } 
    const details = (
      <div>
      <h3>{title}</h3>
      <h4>"Issue No." {issue}</h4>
      <button onClick={() => onRemoveComic(id)}>Remove</button>
      </div>)
    const cover = (<div><img src={image} alt={"Comic Issue Image"} /></div>)

  return (
    <div className="comic-item" onClick={toggleDetails}>
    { isCoverView ? cover : details }
    </div>
  )
}

export default Comic
