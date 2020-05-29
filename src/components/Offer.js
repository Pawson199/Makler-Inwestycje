import React from 'react'
import {Link} from 'react-router-dom'

export default function Offer(props) {

    return (
       <div className="single_offer">
          <span>
          <Link to={`/oferta/${props.name}`}> <img alt="home" src={props.photos[0]}></img> </Link>
          </span>
          <h1>{props.name}</h1>
          <h2>{props.desc}</h2>
      </div>
    )
}
