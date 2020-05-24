import React from 'react'

export default function Card(props) {
    return (
        <div className="dic">
            <h1>{props.description}</h1>
            <span className="dic_image_container">
                <img className="dicimage" alt={props.name} src={props.src}></img>
            </span>
        </div>
    )
}
