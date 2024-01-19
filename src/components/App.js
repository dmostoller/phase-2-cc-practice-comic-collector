import React, {useEffect, useState} from "react";
import ComicsContainer from "./ComicsContainer"
import ComicForm from "./ComicForm"

function App() {
  const [comics, setComics] = useState([])

  useEffect(() => {
    fetch("http://localhost:8004/comics")
    .then((r) => r.json())
    .then((comics) => (setComics(comics)))
  }, []);

  const addComic = (newComic) => {
    setComics ([...comics, newComic]);
  };
  const deleteComic = (id) => {
    fetch(`http://localhost:8004/comics/${id}`, { method: "DELETE"});
  };
  const removeComic = (comicId) => {
    deleteComic(comicId);
    setComics(comics.filter((comic) => comic.id !== comicId));
  };
  return (
    <div className="App">
      <h1>Comicbook Collector</h1>
      <div className="grid with-sidebar">
        <div className="flex-container">
          <ComicsContainer comics={comics} onRemoveComic={removeComic}/>
        </div>
        <div className="sidebar">
          <ComicForm onAddComic={addComic}/>
        </div>
      </div>
    </div>
  );
}

export default App;
