import React, {useState} from "react";

const initState = {
  title: "",
  issue: "",
  image_url: "",
};
const ComicForm = ({onAddComic}) => {
  const [formData, setFormData] = useState(initState);

  function handleChange (e) {
    setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  })
  }
  function handleAddNewComic(e) {
    e.preventDefault()
    fetch("http://localhost:8004/comics", {
      method: "POST",
      headers: {
        "Content-Type": "application.json",
      },
      body: JSON.stringify({
        ...formData
      })
    })
    .then((r) => r.json())
    .then(onAddComic)
    setFormData(initState)
  }
  return (
    <form className="comic-form" onSubmit={handleAddNewComic}>
      <h2>Add A New Issue</h2>
      <label htmlFor="image_url">Image URL: </label>
      <input onChange={handleChange} name="image_url" value={formData.image_url} />
      <label htmlFor="title">Title: </label>
      <input onChange={handleChange} name="title" value={formData.title} />
      <label htmlFor="issue">Issue Number: </label>
      <input onChange={handleChange} name="issue" type="number" value={formData.issue}/>
      <input type="submit" value="Add Issue" />
    </form>
  )
}

export default ComicForm
