import React, { useContext } from 'react'
import Offer from '../components/Offer'
import {ThemeContext} from '../api_context'
import { motion } from "framer-motion"

export default function Oferta() {

    const {oferty, pageAnimation} = useContext(ThemeContext)

    console.log(oferty)

    let oferty_map = oferty.map( (el,id) => <Offer key={id} desc={el.shortdesc} photos={el.image} name={el.nazwa} /> )

    return (
        <motion.div className="wrapper"
        initial="out"
        animate="in"
        exit="out"
        variants={pageAnimation} >
            <label className="label">
                <h1 className="label1" >Oferty</h1>
                <h1 className="label2" >Oferty</h1>
            </label>
            <div className="oferty">
                {oferty_map}
            </div>
       </motion.div>
    )
}
