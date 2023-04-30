import React, { useEffect, useState } from 'react'
import ReactDOM from "react-dom/client";
import { Note } from './Note';

const notes = [
  {
    'userId': 1,
    'id': 1,
    'title': "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    'body': "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit"
    }
]


const App = () => {

  //States

  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('') 
  const [lodading, setLoading] = useState(false)


  //Efectos
  useEffect(() =>{
    console.log("UserEffect")
    setLoading(true)

    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(resp => resp.json())
    .then(json => {
      setLoading(false)
      console.log(json)
      setNotes(json)
    })
  },[])

  //Controladores

  //1
  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  //2
  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      title: newNote,
      id: notes.length + 1,
    }
  
    setNotes(notes.concat(noteObject))
    setNewNote('')
  }


  return (
    <div>
      <h1>Notes:</h1>
      {
         lodading
         ? "Cargando..."
         : ''
      }
      <ol>
       {
        notes
        .map(note=> <Note key={note.id} note={note}/>)
       }
      </ol>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange}/>
        <button type="submit">save</button>
      </form>   
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App  notes={notes} />
  </React.StrictMode>
);
