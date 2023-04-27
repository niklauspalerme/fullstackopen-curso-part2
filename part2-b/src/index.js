import React, { useState } from 'react'
import ReactDOM from "react-dom/client";
import { Note } from './Note';

const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    date: '2019-05-30T17:30:31.098Z',
    important: true,
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    date: '2019-05-30T18:39:34.091Z',
    important: false,
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    date: '2019-05-30T19:20:14.298Z',
    important: true,
  },
]


const App = (props) => {

  //States

  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('') 
  const [showAll, setShowAll] = useState(true)

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
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1,
    }
  
    setNotes(notes.concat(noteObject))
    setNewNote('')
  }

  //3
  const handleShowAll = () => {
    setShowAll(!showAll)
  }
  

  return (
    <div>
      <h1>Notes:</h1>
      <div>
        <button onClick={handleShowAll}>
          {showAll ? 'Show only important' : 'Show all' }
        </button>
      </div>
      <ol>
       {
        notes
        .filter(note => {
           if (showAll === true)  
            return note
           else
            return note.important === true
        })
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
