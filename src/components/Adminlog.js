import React, {useState, useContext} from 'react'
import {ThemeContext} from '../api_context'
import {useHistory} from "react-router-dom";

export default function Admin_log() {

    const [login, setlogin] = useState('')
    const [password, setpassword] = useState('')

    const {setisLogged} = useContext(ThemeContext)
    
    let history = useHistory();

    const update_data = (e) => {
        e.target.name === "login" ?
            setlogin( e.target.value ) :
            setpassword( e.target.value )
    }

    const check_data = (e) => {
        e.preventDefault()
    
        const options = {
            method: "POST",
            body: JSON.stringify({login, password}),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        
        fetch('http://localhost:5000/check_data', options)
        .then( response => response.text() )
        .then( json => 
                {
                    if( json === "true" ){
                        setisLogged( true );
                        history.replace('/admin_logged');
                    }  
                    else{
                        console.log('eeh')
                    }
                }
            )

     }

    return (
        <>
        <h1 className="login_h1" > Zaloguj się, <br/> aby otworzyć panel zarządzania treścią. </h1>
        <div className="login_form" >
            <label>
                Login
             <input onChange={update_data} name="login" value={login}></input>   
            </label>
            <label>
                Hasło
              <input onChange={update_data} name="password" value={password}></input>  
            </label>
            <div className="button_login_holder">
             <button onClick={check_data} > Zaloguj </button>   
            </div>
        </div>
        </>
    )
}
