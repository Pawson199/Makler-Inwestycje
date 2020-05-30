import React, {useContext} from 'react'
import {useParams} from 'react-router-dom'
import {ThemeContext} from '../api_context'


export default function Oferta() {

    const oferty = useContext(ThemeContext)
    const {oferta} = useParams()

    const offer_name = oferty.find( el => el.nazwa === oferta )

    return (
        <div>
            { oferty.length === 0 ? "ŁADOWANKO" : offer_name.nazwa }
        </div>
    )
}
