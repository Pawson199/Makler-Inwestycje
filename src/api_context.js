import React, { createContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

function Apidata(props){

    const [oferty, setOferty] = useState([])

    const [isLogged, setisLogged] = useState(false)
    console.log(isLogged)
    useEffect(
        () => {
     fetch('/data')
    .then( response => response.json() )
    .then(json => setOferty( json ) )
    .catch((error) => {
      console.log(error);
   })   
        },[]
    )

    const obj = { oferty, isLogged, setisLogged }

   return (
       <ThemeContext.Provider value={obj} >
           {props.children}
       </ThemeContext.Provider>
   )

}

export {Apidata, ThemeContext}