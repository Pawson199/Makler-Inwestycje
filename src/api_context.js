import React, { createContext, useState } from 'react'

const ThemeContext = createContext()

function Apidata(props){

    const [isLogged_inStorage, setisLogged_inStorage] = useState(false)
    const [isLogged, setisLogged] = useState(false)

    const pageAnimation = {
        in: {
            opacity: 1
        },
        out: {
            opacity: 0
        }
    }

    const givemedata = () => {
       return fetch('http://localhost:5000/data')
       .then( response => response.json() )
       .then(json => json )
       .catch((error) => {
         console.log(error);
      })   

       }


    const obj = { givemedata, isLogged, setisLogged, isLogged_inStorage, setisLogged_inStorage, pageAnimation }

   return (
       <ThemeContext.Provider value={obj} >
           {props.children}
       </ThemeContext.Provider>
   )

}

export {Apidata, ThemeContext}