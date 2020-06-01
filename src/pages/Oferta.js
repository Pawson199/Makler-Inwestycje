import React, {useContext} from 'react'
import {useParams} from 'react-router-dom'
import {ThemeContext} from '../api_context'


export default function Oferta(props) {

    const oferty = useContext(ThemeContext)
    const {oferta} = useParams()

    const offer_name = oferty.find( el => el.nazwa === oferta )

    return (
        <>
            { 
            oferty.length === 0 ? "ŁADOWANKO" :
            <> 
            <p>{ offer_name.nazwa }</p>
            <div className="gallery">
            { offer_name.image != 0 ? offer_name.image.map( (el,id) => <img className="item" key={id} src={el}></img> ) : null }
            </div>
            <p>{ offer_name.desc }</p>
            { offer_name.rzuty != 0 ? offer_name.rzuty.map( (el,id) => <img className="item" key={id} src={el}></img> ) : null }
            </> 
            }
        </>
    )
}
