import React from 'react'
import leroy from '../images/loga/LM.png'
import nobo from '../images/loga/nobo.png'
import profit from '../images/loga/profit.png'
import constrado from '../images/loga/constrado.png'
import budem from '../images/loga/budemlogo.png'

export default function About() {

    const Service = ( props ) => {
        return(
        <span className="one_of_service" > <div>{props.number}</div><p>{props.desc}</p> </span>
        )
    }

    return (
       <>
        <label className="label">
            <h1 className="label1" >O Firmie</h1>
            <h1 className="label2" >O Firmie</h1>
        </label>
        <div className="about_us">
            <p className="quotation">“</p>
            Działamy na rynku Łódzkich przedsiębiorstw od 2009 roku. Zajmujemy się przede wszystkim
            obsługą rynku nieruchomości oraz inwestycjami w grunty. Nasze usługi są
            kierowane zarówno do klientów indywidualnych, jak i do firm.
        </div>
        <div className="services">
          <p>Zakres naszych usług</p>
        <Service number="1" desc="Pośrednictwo w sprzedaży, kupnie i wynajmie nieruchomości" />
        <Service number="2"  desc="Profesjonalne doradztwo" />
        <Service number="3"  desc="Pośrednictwo w inwestycjach w nieruchomości" />
        <Service number="4"  desc="Pośrednictwo finansowe" /> 
        <Service number="5"  desc="Pośrednictwo w kupnie nowoczesnych domów pasywnych" />
        </div>
        <span className="partners">
            <img alt="logo_leroy" src={leroy}/>
            <img alt="logo_nobo"  src={nobo}/>
            <img alt="logo_budem"  src={budem}/>
            <img alt="logo_profit" src={profit}/>
            <img alt="logo_constrado" src={constrado}/>
        </span>
       </>
    )
}
