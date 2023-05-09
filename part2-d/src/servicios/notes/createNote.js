import axios from "axios";

export const createNote = ({noteObject}) =>{

    return axios.post("https://jsonplaceholder.typicode.com/posts", noteObject)
    .then( response => {
      return response.data
    })

}