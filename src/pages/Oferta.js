import React, { useEffect, useState } from 'react'
import Offer from '../components/Offer'

export default function Oferta() {

    const [oferty, setOferty] = useState([])

   useEffect( () => {
    fetch('/data')
      .then(response =>  response.json() )
      .then(json => setOferty( json ) )
      .catch((error) => {
        console.log(error);
     }) 
    }, [])

    
    console.log(oferty)

    let oferty_map = oferty.map( (el,id) => <Offer key={id} desc={el.desc} photos={el.image} name={el.nazwa} /> )

    return (
        <>
        <label className="label">
            <h1 className="label1" >Oferty</h1>
            <h1 className="label2" >Oferty</h1>
        </label>
        <div className="oferty">{oferty_map}</div>
       </>
    )
}
