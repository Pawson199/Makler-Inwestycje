import React from 'react'
import GliderComponent from 'react-glider-carousel';

export default function Component() {
  return (
    <GliderComponent hasArrows={true} settings={ {slidesToShow : 2, slidesToScroll : 1}}  >
      <div className="dic">Slide 1</div>
      <div className="dic">Slide 2</div>
      <div className="dic">Slide 3</div>
      <div className="dic">Slide 4</div>
    </GliderComponent>
  )
}