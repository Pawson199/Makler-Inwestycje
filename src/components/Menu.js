import React, {useState, useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom'

export default function Menu(){


    const [permission, setPermission] = useState("display_off")
    let location = useLocation();
    const setPermissionOnClick = () => {
      setPermission( 
        prevState => prevState === "display_off" ?  "display_in" : 'display_off'
      )
    }

    useEffect(() => {
      const lista = document.querySelectorAll("li")
      lista.
      forEach( el => 
        { 
          const name = el.getAttribute('isactive');
         return name === location.pathname ? el.classList.add('current') : null  
      })
    }, [])
    

     const burger_menu = () => { return ( 
        <>
          <button onClick={setPermissionOnClick} className="burger" > MENU </button>
          <ul onClick={setPermissionOnClick} className={`${permission} burgerek`}>
            <li isactive="/" ><Link to="/" >HOME</Link></li>
            <li isactive="/oferta" ><Link to="/oferta" >OFERTY</Link></li>
            <li isactive="/about" ><Link to="/about" >O NAS</Link></li>
            <li isactive="/kontakt" ><Link to="/kontakt" >KONTAKT</Link></li>
          </ul>
        </>
      )
    }
    
     const classic_menu = () => { return ( 
      <ul>
        <li isactive="/" ><Link to="/" >HOME</Link></li>
        <li isactive="/oferta" ><Link to="/oferta" >OFERTY</Link></li>
        <li isactive="/about" ><Link to="/about" >O NAS</Link></li>
        <li isactive="/kontakt" ><Link to="/kontakt" >KONTAKT</Link></li>
      </ul>)
    }

    return( 
       window.innerWidth > 700 ? classic_menu() : burger_menu()
        )
    
}

