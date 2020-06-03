import React, {useContext, useState} from 'react'
import ReactDOM from 'react-dom'
import {useParams} from 'react-router-dom'
import {ThemeContext} from '../api_context'


export default function Oferta(props) {

    const [showGallery, setshowGallery] = useState(false)
    const [showPhoto, setshowPhoto] = useState(false)
    const [whichGallery, setwhichGallery] = useState('')
    const [image_source, setimage_source] = useState('')
    const oferty = useContext(ThemeContext)
    const {oferta} = useParams()
    const offer_name = oferty.find( el => el.nazwa === oferta )
    return (
        <>
            { 
            oferty.length === 0 ? 
            "LOADING" 
            :
                <> 
                <label className="label">
                    <h1 className="label1" >{ offer_name.nazwa }</h1>
                    <h1 className="label2" >{ offer_name.nazwa }</h1>
                </label>
                <div className="main_ofer_photo" >{  } <img src={offer_name.image[0]} ></img> </div>
                <button onClick={ () => {setshowGallery( prevState => !prevState ); setwhichGallery('galeria')} } > GALERIA </button>
                <button onClick={ () => {setshowGallery( prevState => !prevState ); setwhichGallery('rzuty')} } > RZUTY </button>
                { 
                    showGallery === true 
                    ? 
                        <div className="gallery-images" onClick={ e => 
                        { 
                            if( e.target.tagName === "IMG" ){
                                setshowPhoto( prev => !prev );
                                setimage_source( e.target.src )  
                            } 
                        } 
                        }> 
                        <button onClick={ () => setshowGallery( prevState => !prevState ) } > X </button>
                        { 
                        whichGallery === "rzuty" ?
                        offer_name.rzuty.map( (el,id) => 
                        <img alt="offer_image" className="item_1" key={id} src={el}></img> ) 
                        : 
                        offer_name.image.map( (el,id) => 
                        <img alt="offer_image" className="item_1" key={id} src={el}></img> ) 
                        } 
                        { showPhoto === true 
                        ? 
                        <div className="photo_image" > <img src={image_source} ></img> </div> 
                        : null } 
                        </div>
                    : null
                }
                <p>{ offer_name.desc }</p>
                <p>{ offer_name.sizes }</p>
                <p>{ offer_name.prices }</p>
                </> 
                }
            </>
        
    )
}
