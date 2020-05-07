import React from 'react'
import homomom from '../images/Untitled2.svg'

export default function Home() {
    return (
        <>
                <span className="home_desc">
                    <div className="desc_holder" >
                        <h1>Zaoszczędź czas i pieniądze</h1>
                        <h2>Zaprojektuj z nami wymarzony dom, mieszkanie, lub odbierz gotowy projekt!</h2>
                        <span className="button_holder">
                            <button className="home_intro_button" >NAPISZ DO NAS</button>  
                        </span> 
                        <span className="empty_sticker" ></span>  
                    </div>
                    <div className="home_image">
                        <img alt="background-city" className="contain" src={homomom} ></img>
                    </div>
                </span>  
                <span className="offers">oferty</span>
                <span className="map">mapa z lokacjami</span>
        </>
    )
}
