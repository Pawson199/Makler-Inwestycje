import React, { useContext } from 'react'
import Offer from '../components/Offer'
import {ThemeContext} from '../api_context'

export default function Oferta() {

    const oferty = useContext(ThemeContext)

    console.log(oferty)

    let oferty_map = oferty.map( (el,id) => <Offer key={id} desc={el.desc} photos={el.image} name={el.nazwa} /> )

    return (
        <>
        <label className="label">
            <h1 className="label1" >Oferty</h1>
            <h1 className="label2" >Oferty</h1>
        </label>
        <div className="oferty">
            {oferty_map}
        </div>
       </>
    )
}
