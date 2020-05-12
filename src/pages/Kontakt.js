import React from 'react'
import boyicon from '../images/boyicon.png'
import girlicon from '../images/girlicon.png'

export default function Kontakt() {
    return (
        <>
            <label className="label">
                <h1 className="label1" >Kontakt</h1>
                <h1 className="label2" >Kontakt</h1>
                </label>
            <span className="employees">
                <div>
                    <img src={girlicon} />
                    <h1>Dział Techniczny</h1>
                    <p>Numer Kontaktowy:</p>
                    <p>575 812 066</p>
                    <p>Mail:</p>
                    <p>kamila@makler-inwestycje.pl</p>
                </div>
                <div>
                    <img src={boyicon} />
                    <h1>Agent Nieruchomości</h1>
                    <p>Numer Kontaktowy:</p>
                    <p>576 812 066</p>
                    <p>Mail:</p>
                    <p>biuro@makler-inwestycje.pl</p>
                </div> 
            </span>
            
        </>
    )
}
