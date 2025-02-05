import React from 'react'

const DynamicRendering2 = (props) => {
  return (
    <>
    <div style={{alignItems:"start",fontFamily:"Times New Roman"}}> 
    <p>Name : {props.data}<br></br>
    Class : {props.data1}<br></br>
    Section : {props.data2}<br></br>
    Regno : {props.data3}<br></br>
    Phone_Number : {props.data4}<br></br></p>
    </div>
    </>

  )
}

export default DynamicRendering2