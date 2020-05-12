import React from 'react'
import background_city from '../images/Untitled2.svg'
import background_offers from '../images/home_choosing.svg'
import Slider from '../components/Slider'
import { Map, Marker, TileLayer } from 'react-leaflet'

export default function Home(props) {
    console.log('dupa')
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
                        <img alt="background_city" className="contain" src={background_city} ></img>
                    </div>
                </span>  
                <span className="offers">
                    <Slider number={props.slides} />
                    <img alt="green_bulb" className="offers_background" src={background_offers} ></img>
                </span>
                <span className="map">
                    <div className="locations" >
                        <h1>Lokalizacje naszych inwestycji:</h1>
                        <p>Lokalizacje inwestycji w wielu ciekawych miejscach. Od miast po wsie, min:
                        Łódź Widzew, Zgierz Skotniki, Zgierz Swoboda.</p>
                    </div>
                    <Map center={[51.7592, 19.4560]} zoom={9} zoomControl={false} >
                        <TileLayer
                        url="https://api.mapbox.com/styles/v1/starnaw2/cka1gtpne1rdm1ippw49w289j/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic3Rhcm5hdzIiLCJhIjoiY2thMWZxOHdiMDAxdTNkb2N3NHIwZTY3OSJ9.M5JBQc0BGcrg3uj8YgpMQw"
                        attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
                        />
                        <Marker position={[51.7671, 19.5572]}>
                        </Marker>
                        <Marker position={[51.8591, 19.4908]}>
                        </Marker>
                        <Marker position={[51.9315, 19.4107]}>
                        </Marker>
                    </Map>
                </span>
        </>
    )
}
