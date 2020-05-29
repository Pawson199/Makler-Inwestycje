import React, { createContext, useState } from 'react'

const ThemeContext = createContext()

function Apidata(props){

    const [oferty, setOferty] = useState([])

    fetch('/data')
    .then(response =>  response.json() )
    .then(json => setOferty( json ) )
    .catch((error) => {
      console.log(error);
   }) 

   return (
       <ThemeContext.Provider value={{oferty}} >
           {props.children}
       </ThemeContext.Provider>
   )

}

export {Apidata, ThemeContext}