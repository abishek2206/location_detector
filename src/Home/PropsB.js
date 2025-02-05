import React from 'react'

const PropsB = (props) => {
    return (
    <div>
        <p>This is child. <br></br>
        Value from parent : {props.value}</p>
    </div>
  )
}

export default PropsB