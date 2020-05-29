import React, {useContext} from 'react'
import {useParams} from 'react-router-dom'
import {ThemeContext} from '../api_context'


export default function Oferta() {

    const oferty = useContext(ThemeContext)

    const {name_of_offer} = useParams()

    const offer_name = oferty.find( el => name_of_offer.name === el )

    console.log(offer_name)

    return (
        <div>
            
        </div>
    )
}
