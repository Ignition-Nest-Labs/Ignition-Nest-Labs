import React from 'react'

const ArrowUp =({width, height, stroke, className}) =>{
  return (
    <svg width={width} height={height} viewBox="0 0 23 23" fill="none" className={className} >
    <path d="M15.4805 12.9403L15.4805 7.34454L9.88473 7.34454" stroke={stroke} stroke-width="1.275" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M7.64453 15.1805L15.4021 7.42285" stroke={stroke} stroke-width="1.275" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    
  )
}

export default ArrowUp