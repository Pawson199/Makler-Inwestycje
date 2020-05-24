import React from 'react'

export default function Offer(props) {

    return (
        <div>
         <span><img src={props.photos[0]}  /> </span>
           {props.desc} 
           <br/>
           {props.name}
        </div>
    )
}
