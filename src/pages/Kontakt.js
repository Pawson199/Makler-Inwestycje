import React, {useState} from 'react'
import boyicon from '../images/boyicon.png'
import girlicon from '../images/girlicon.png'

export default function Kontakt() {

    const [message, setMessage] = useState('')
    const [email, setEmail] = useState('')

    const changeIt = (e) => {
        e.target.name === 'message' ?
        setMessage( e.target.value ) :
        setEmail( e.target.value )
    }

    const sendIt = (e) => {
        e.preventDefault()
        fetch('http://localhost:4000/send', {
            method: "POST",
            body: JSON.stringify({message, email}),
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
          })
        .then(response => response.json())
        .then( json => console.log(json) )
    }

    return (
        <>
            <label className="label">
                <h1 className="label1" >Kontakt</h1>
                <h1 className="label2" >Kontakt</h1>
                </label>
            <span className="employees">
                <div>
                    <img alt="icon-girl" src={girlicon} />
                    <h1>Dział Techniczny</h1>
                    <p>Numer Kontaktowy:</p>
                    <p>575 812 066</p>
                    <p>Mail:</p>
                    <p>kamila@makler-inwestycje.pl</p>
                </div>
                <div>
                    <img  alt="icon-boy" src={boyicon} />
                    <h1>Agent Nieruchomości</h1>
                    <p>Numer Kontaktowy:</p>
                    <p>576 812 066</p>
                    <p>Mail:</p>
                    <p>biuro@makler-inwestycje.pl</p>
                </div> 
            </span>

            <form onSubmit={sendIt}  >
                <label>
                    Email:
                    <input type="text" name="email" value={email} onChange={changeIt} />
                </label>
                <label>
                    Message:
                    <input type="text" name="message" value={message} onChange={changeIt} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            
        </>
    )
}
