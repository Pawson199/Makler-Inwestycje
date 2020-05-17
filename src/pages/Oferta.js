import React, { useEffect, useState } from 'react'
import Offer from '../components/Offer'

export default function Oferta() {

    const [dane, setdane] = useState([])

   useEffect( () => {
    fetch('http://localhost:4000/data')
      .then(response =>  response.json() )
      .then(json => console.log(json))
      .catch((error) => {
        console.log(error);
     }) 
    })

    const oferty = dane.map( el => <Offer desc={el} /> )

    return (
        <>
        <label className="label">
            <h1 className="label1" >Oferty</h1>
            <h1 className="label2" >Oferty</h1>
        </label>
        <div className="oferty">{oferty}</div>
       </>
    )
}
