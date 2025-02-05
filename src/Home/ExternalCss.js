import React from 'react'
import "./ExternalCss.css"
const ExternalCss = () => {
  return (
    <div style={{fontSize:18,textAlign:"center"}}>
    <h1 style={{fontFamily:"Times New Roman"}}>ExternalCSS</h1>
        <p className='demo1'>hello</p>
        <p className='demo2'>students</p>
        <p className='demo3'>welcome to skcet!!</p>
    </div>
  )
}

export default ExternalCss