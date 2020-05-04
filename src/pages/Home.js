import React from 'react'
import homomom from '../images/home.svg'

export default function Home() {
    return (
        <>
            <div className="home_intro" >
                <span className="home_desc">
                <h1>Zaoszczędź czas i pieniądze</h1>
                    <h2>Zaprojektuj z nami wymarzony dom, <br/> mieszkanie, lub odbierz gotowy projekt!</h2>
                    <button className="home_intro_button" >NAPISZ DO NAS</button>
                    <h3>OFERTY</h3>
                </span>
                <div className="home_image" >
                    <img src={homomom} ></img>
                </div>
            </div>
            <div>oferty</div>
        </>
    )
}
