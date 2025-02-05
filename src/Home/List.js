import React from 'react'

const List = () => {
    const arr1=["a","b","c","d","e"]
    const arr2=[1,2,3,4,5]
  return (
    <>
    <h1 style={{fontFamily:"Times New Roman"}}>List</h1>
    <div >
        <p style={{fontSize:24}}>Order list</p>
        <ol>
            {
                arr1.map((value,index)=>(
                    <li key={index}>{value}</li>
                ))
            }
        </ol>
        <p style={{fontSize:24}}>Unorder list</p>
        <ul>
            {
                arr2.map((value1,index)=>(
                    <li key={index}>{value1}</li>
                ))
            }
        </ul>
    </div>
    </>
  )
}

export default List
