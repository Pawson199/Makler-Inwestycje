import React, { useEffect, useState } from 'react'
import Offer from '../components/Offer'

export default function Oferta() {

    const [nowy, setNowy] = useState([])

   useEffect( () => {
    fetch('http://localhost:4000/data')
      .then(response =>  response.json() )
      .then(json => setNowy(json[0]) )
      .catch((error) => {
        console.log(error);
     }) 
    }, [])

    console.log(nowy)

    let oferty = nowy.map( (el,id) => <Offer key={id} desc={el.nazwa} /> )

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
