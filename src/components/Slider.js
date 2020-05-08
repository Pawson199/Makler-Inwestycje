import React from 'react'
import GliderComponent from 'react-glider-carousel';

export default function Component(props) {

  return (
    <GliderComponent hasArrows={true} settings={ {slidesToShow : props.number, slidesToScroll : 1}}  >
      <div><div className="dic">Slide 2</div></div>
      <div><div className="dic">Slide 3</div></div>
      <div><div className="dic">Slide 4</div></div>
      <div><div className="dic">Slide 5</div></div>
      <div><div className="dic">Slide 7</div></div>
      <div><div className="dic">Slide 9</div></div>
    </GliderComponent>
  )
}