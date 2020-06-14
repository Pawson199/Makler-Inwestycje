import React, {useContext, useState} from 'react'
import {useParams} from 'react-router-dom'
import {ThemeContext} from '../api_context'
import gallery_background from '../images/gallery_background.jpg'
import rzuty_background from '../images/rzut_background.jpg'


export default function Oferta(props) {

    const [showGallery, setshowGallery] = useState(false)
    const [showPhoto, setshowPhoto] = useState(false)
    const [whichGallery, setwhichGallery] = useState('')
    const [image_source, setimage_source] = useState('')
    const {oferty} = useContext(ThemeContext)
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
                <div className="main_ofer_photo" ><img alt="offer_main_photo" src={offer_name.image[0]} ></img> </div>
                <div className="offer_info_container" >
                        <label>
                           <p>Opis</p>
                           <p>{ offer_name.desc }</p> 
                        </label>
                        <label>
                            <p>Rozmiary</p>
                            <p>{ offer_name.sizes }</p>   
                        </label>
                        <label>
                            <p>Cena</p>
                            <p>{ offer_name.prices }</p>  
                        </label>
                </div>
                    <div className="gal_and_rzuty">
                        <div onClick={ () => {setshowGallery( prevState => !prevState ); setwhichGallery('galeria')} } ><img alt="gallery_background" src={gallery_background}></img><p>Galeria</p> </div>
                        <div onClick={ () => {setshowGallery( prevState => !prevState ); setwhichGallery('rzuty')} } > <img  alt="rzuty_background"  src={rzuty_background}></img><p>Rzuty</p></div> 
                    </div>
                

                { 
                    showGallery === true 
                    ? 
                        <div className="gallery-images" onClick={ e => 
                        { 
                            if( e.target.tagName === "IMG" || e.target.className === "photo_image"  ){
                                setshowPhoto( prev => !prev );
                                setimage_source( e.target.src )  
                            } 
                        } 
                        }> 
                        <div className="button_container" onClick={ () => setshowGallery( prevState => !prevState ) } >
                            <span> </span>
                        </div>
                        <div className='gallery_inside'>
                            <div className="gallery_inside_gallery" >
                                { 
                                whichGallery === "rzuty" ?
                                offer_name.rzuty.map( (el,id) => 
                                <img alt="offer_image" className="item_1" key={id} src={el}></img> ) 
                                : 
                                offer_name.image.map( (el,id) => 
                                <img alt="offer_image" className="item_1" key={id} src={el}></img> ) 
                                } </div>
                                { showPhoto === true 
                                ? 
                                <div className="photo_image" > <img alt="full_width_gallery_image" src={image_source} ></img> </div> 
                                : null } 
                             </div>
                        </div>
                    : null
                }


                </> 
                }
            </>
        
    )
}
