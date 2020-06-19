import React from 'react'
import logo from '../images/logo-makler.png'
import {useHistory} from "react-router-dom";

export default function Footer() {

    let history = useHistory();

    return (
        <h2 className="footer" >
            <span>
                <span className="span_icon"><i className="ri-map-pin-line"></i></span>
                <p> ul.Pomorska 83/85 </p>
                <p> Lokal nr 409 </p>
                <p> 90-001 Łódź </p>
            </span>
            <span>
            <span className="span_icon"><i className="ri-time-line"></i></span>
                <p>Poniedziałek - Piątek </p>
                <p>8:00-17:00</p>
             </span>
            <span>
            <span className="span_icon"><i className="ri-mail-line"></i></span>
                <p> biuro@makler-inwestycje.pl </p>
                <p><a  onClick={ () =>  history.replace('/kontakt') } > napisz do nas {`>>`} </a> </p> 
             </span>
             
             <div className="footer_logo_container" >
                <img alt="logo" src={logo}/>
             </div>
        </h2>
    )
}
