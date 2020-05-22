import React from 'react'

export default function Offer(props) {

    const string_def = '..\\public\\'
    const images = props.photos.map( (el, id) => <img src={el.substring(string_def.length)} key={id} /> )

    return (
        <div>
            <span>{images}</span>
           {props.desc} 
           <br/>
           {props.name}
        </div>
    )
}
