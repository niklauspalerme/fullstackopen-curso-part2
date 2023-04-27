import React from 'react'

export const Note = ({note}) =>{

    return (
      <li>
          <p>{note.content}</p>
          <small>
            <time>{note.date}</time>
          </small>
      </li>
  
    )
  }