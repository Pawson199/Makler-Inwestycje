import React, {useState, useRef, useContext} from 'react'
import boyicon from '../images/boyicon.png'
import girlicon from '../images/girlicon.png'
import {ThemeContext} from '../api_context'
import { motion } from "framer-motion"

export default function Kontakt() {

    const [message, setMessage] = useState('')
    const [email, setEmail] = useState('')
    const ref1 = useRef(null)
    const {pageAnimation} = useContext(ThemeContext)

    const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    const changeIt = (e) => {
        e.target.name === 'message' ?
        setMessage( e.target.value ) :
        setEmail( e.target.value )
    }

    const sendIt = (e) => {
        e.preventDefault()
        if(re.test(email)){
            fetch('/send', {
                method: "POST",
                body: JSON.stringify({message, email}),
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
              })
            .then(response => response.json())
            .then( json => console.log(json) )
            ref1.current.classList.remove('wrong_input')
            ref1.current.classList.add('good_input')
        }
        else{
            ref1.current.classList.add('wrong_input')
        }
    
    }

    return (
        <motion.div className="wrapper"
        initial="out"
        animate="in"
        exit="out"
        variants={pageAnimation}
        >
            <label className="label">
                <h1 className="label1" >Kontakt</h1>
                <h1 className="label2" >Kontakt</h1>
            </label>
            <span className="info_contact_container" >
                <div className="info_contact">
                    <img alt="icon-girl" src={girlicon} />
                    <h1>Dział Techniczny</h1>
                    <p>Numer Kontaktowy:</p>
                    <p>575 812 066</p>
                    <p>Mail:</p>
                    <p>kamila@makler-inwestycje.pl</p>
                </div>
                <div className="info_contact">
                    <img  alt="icon-boy" src={boyicon} />
                    <h1>Agent Nieruchomości</h1>
                    <p>Numer Kontaktowy:</p>
                    <p>576 812 066</p>
                    <p>Mail:</p>
                    <p>biuro@makler-inwestycje.pl</p>
                </div> 
            </span>
            <span className="form_holder" >
                <form onSubmit={sendIt} className="form" ref={ref1} >
                    <h1>Napisz do nas!</h1>
                    <label >
                        E-mail
                        <input type="text" name="email" value={email} onChange={changeIt} />
                    </label>
                    <label>
                        Treść Wiadomości
                    <textarea type="text"  name="message" value={message} onChange={changeIt} /> 
                    </label>
                    <button className="message_button" value="Wyślij" > Wyślij </button>
                </form>
            </span>
        </motion.div>
    )
}
