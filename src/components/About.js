import React from 'react'
export default function About(props) {
  return (
    <div style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2 > About Us </h2>
    </div>
  )
}
