import React, {useState} from 'react';
import {Link} from 'react-router-dom'

export default function Menu(){


    const [permission, setPermission] = useState("display_off")
    const [burger, setBurger] = useState('no-cross')
    const setPermissionOnClick = () => {
      setPermission( 
        prevState => prevState === "display_off" ?  "display_in" : 'display_off'
      );
      setBurger(
        prevState => prevState === "no-cross" ?  "cross" : 'no-cross'
      )
    }
    
     const burger_menu = () => { return ( 
        <>
          <div onClick={setPermissionOnClick} className={` ${burger} burger`} >
            <span ></span>
          </div>
          <ul onClick={setPermissionOnClick} className={`${permission} burgerek`}>
            <li ><Link to="/" >HOME</Link></li>
            <li ><Link to="/oferta" >OFERTY</Link></li>
            <li ><Link to="/about" >O NAS</Link></li>
            <li ><Link to="/kontakt" >KONTAKT</Link></li>
          </ul>
        </>
      )
    }
    
     const classic_menu = () => { return ( 
      <ul>
        <li ><Link to="/" >Strona główna</Link></li>
        <li ><Link to="/oferta" >Oferty</Link></li>
        <li ><Link to="/about" >O nas</Link></li>
        <li ><Link to="/kontakt" >Kontakt</Link></li>
      </ul>)
    }

    return( 
       window.innerWidth > 900 ? classic_menu() : burger_menu()
        )
    
}

