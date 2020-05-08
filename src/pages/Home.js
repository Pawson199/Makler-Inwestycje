import React,{useEffect,useState} from 'react'
import homomom from '../images/Untitled2.svg'
import Slider from '../components/Slider'

export default function Home() {

    function amount(){
        if(window.innerWidth < 600 ){ return 1 }
        else if(window.innerWidth > 600 & window.innerWidth < 1000 ){ return 2 }
        else if(window.innerWidth > 1200){return 3}
    }

    const [slides, setslides] = useState(amount())

    const funkcja = () => {
        if(window.innerWidth < 600 ){ setslides(1) }
        else if(window.innerWidth > 600 & window.innerWidth < 1000 ){ setslides(2) }
        else if(window.innerWidth > 1200){setslides(3)}
       }

       console.log("dupa")
   
     useEffect(() => {
       window.addEventListener('resize', funkcja )
       return () => {
        window.removeEventListener('resize', funkcja )
       }
   }, [])

    return (
        <>
                <span className="home_desc">
                    <div className="desc_holder" >
                        <h1>Zaoszczędź czas i pieniądze</h1>
                        <h2>Zaprojektuj z nami wymarzony dom, mieszkanie, lub odbierz gotowy projekt!</h2>
                        <span className="button_holder">
                            <button className="home_intro_button" >NAPISZ DO NAS</button>  
                        </span> 
                        <span className="empty_sticker" ></span>  
                    </div>
                    <div className="home_image">
                        <img alt="background-city" className="contain" src={homomom} ></img>
                    </div>
                </span>  
                <span className="offers">
                    <Slider number={slides} />
                </span>
                <span className="map">mapa z lokacjami</span>
        </>
    )
}
