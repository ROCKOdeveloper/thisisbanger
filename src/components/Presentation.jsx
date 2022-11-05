import React from 'react'
import bg from '../assets/img/afterMovie2.mp4';

function Presentation() {
  return (
    <>
      <video className='w-full h-full' loop autoPlay muted >
        <source src={bg} type="video/mp4" />
      </video>
    </>
  )
}

export default Presentation
