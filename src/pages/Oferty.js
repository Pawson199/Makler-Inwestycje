import React, { useContext, useEffect, useState} from 'react'
import Offer from '../components/Offer'
import {ThemeContext} from '../api_context'
import {motion} from "framer-motion"

export default function Oferta() {

    const {givemedata, pageAnimation} = useContext(ThemeContext)
    const [ data, setData ] = useState([])

    useEffect( () => {
        async function lee(){
      const result = await givemedata()
      setData( result )
    } 
    lee()
    }
,[] )


    
    let oferty_map = data.map( (el,id) => <Offer key={id} desc={el.shortdesc} photos={el.image} name={el.nazwa} /> )

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
