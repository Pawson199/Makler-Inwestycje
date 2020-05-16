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

            <form onSubmit={sendIt} className="form" >
                <h1>Napisz do nas!</h1>
                <input type="text" placeholder="Tutaj wpisz swój e-mail, lub numer telefonu" name="email" value={email} onChange={changeIt} />
                <textarea type="text" placeholder="Treść wiadomości" name="message" value={message} onChange={changeIt} />
                <input type="submit" value="Wyślij" />
            </form>
            
            <span className="employees div_and_margin">
                <div>
                    <h1>Godziny Pracy</h1>
                    <p>Od poniedziałku do piątku </p>
                    <p>w godzinach 8:00-17:00</p>
                </div>
                <div>
                    <h1>Gdzie nas znajdziecie?</h1>
                    <p>Nasze biuro mieści się przy ulicy</p>
                    <p>Pomorskiej 83/85, w lokalu nr 409 A, w Łodzi</p>
                </div> 
            </span>
        </>
    )
}
