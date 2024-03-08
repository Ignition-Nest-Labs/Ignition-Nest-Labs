import React from 'react'

export const ArrowUp = ({ width, height, stroke, className }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 23 23" fill="none" className={className} >
      <path d="M15.4805 12.9403L15.4805 7.34454L9.88473 7.34454" stroke={stroke} stroke-width="1.275" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M7.64453 15.1805L15.4021 7.42285" stroke={stroke} stroke-width="1.275" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

  )
}


export const Line = ({stroke}) => {
  return (
    <svg width="82" height="43" viewBox="0 0 82 43" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 3.13252C12.7228 2.47776 74.6034 0.949962 79.5907 3.13253C85.8249 5.86073 18.8322 11.0989 15.4657 13.0632C12.7726 14.6346 68.0821 18.1922 71.3239 18.6287C74.5657 19.0652 32.7968 25.984 33.2955 41" stroke={stroke} stroke-width="4" stroke-linecap="round" />
    </svg>

  )
}