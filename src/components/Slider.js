import React from 'react'
import GliderComponent from 'react-glider-carousel';
import Card from './Card'
import blizniak from '../images/domy-po-skali/blizniak.jpg'
import energooszczedny from '../images/domy-po-skali/energooszczedny.jpg'
import parterowy from '../images/domy-po-skali/parterowy.jpg'
import pietrowy from '../images/domy-po-skali/pietrowy.jpg'

export default function Component(props) {

  return (
    <GliderComponent hasArrows={true} scrollLock={true} settings={ {slidesToShow : props.number, slidesToScroll : 1}}  >
      <div><Card className="dic" src={blizniak} description="Domy Bliźniak" /></div>
      <div><Card className="dic" src={energooszczedny} description="Domy Energooszczędne" /></div>
      <div><Card className="dic" src={parterowy} description="Domy Parterowe" /></div>
      <div><Card className="dic" src={pietrowy} description="Domy Piętrowe" /></div>
    </GliderComponent>
  )
}