import React from 'react'
import PropsB from './PropsB'
const PropsA = () => {
var data = "house"
  return (
    <div style={{fontSize:18}}>
    <h1 style={{fontFamily:"Times New Roman"}}>Props</h1>

        <p>This is parent. <br></br>
        Data from parent {data}</p>
        <PropsB value={data}/>
    </div>
  )
}

export default PropsA