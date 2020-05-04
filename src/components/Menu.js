import React, {useState} from 'react';
import {Link} from 'react-router-dom'

export default function Menu(){


    const [permission, setPermission] = useState("display_off")

    const setPermissionOnClick = () => {
      setPermission( 
        prevState => prevState === "display_off" ?  "display_in" : 'display_off'
      )
    }

     const burger_menu = () => { return ( 
        <>
          <button onClick={setPermissionOnClick} className="burger" > MENU </button>
          <ul onClick={setPermissionOnClick} className={`${permission} burgerek`}>
            <li><Link to="/" >HOME</Link></li>
            <li><Link to="/oferta" >OFERTY</Link></li>
            <li><Link to="/about" >O NAS</Link></li>
            <li><Link to="/kontakt" >KONTAKT</Link></li>
          </ul>
        </>
      )
    }
    
     const classic_menu = () => { return ( 
      <ul>
        <li><Link to="/" >HOME</Link></li>
        <li><Link to="/oferta" >OFERTY</Link></li>
        <li><Link to="/about" >O NAS</Link></li>
        <li><Link to="/kontakt" >KONTAKT</Link></li>
      </ul>)
    }

    return( 
       window.innerWidth > 700 ? classic_menu() : burger_menu()
        )
    
}

