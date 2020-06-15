import React, { createContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

function Apidata(props){

    const [oferty, setOferty] = useState([])
    const [isLogged_inStorage, setisLogged_inStorage] = useState(false)
    const [isLogged, setisLogged] = useState(false)

    useEffect(
        () => {
     fetch('http://localhost:5000/data')
    .then( response => response.json() )
    .then(json => setOferty( json ) )
    .catch((error) => {
      console.log(error);
   })   
        },[]
    )

    const obj = { oferty, isLogged, setisLogged, isLogged_inStorage, setisLogged_inStorage }

   return (
       <ThemeContext.Provider value={obj} >
           {props.children}
       </ThemeContext.Provider>
   )

}

export {Apidata, ThemeContext}