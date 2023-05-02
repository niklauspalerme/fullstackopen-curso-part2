import React from 'react'

export const Note = ({note}) =>{

    return (
      <li>
          <h2>{note.title}</h2>
          <small>
            <time>{note.body}</time>
          </small>
      </li>
  
    )
  }