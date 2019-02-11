import React from 'react'

const Name = ( {name, handleChange} )=> {
  return(
    <>
    <label className='label' htmlFor='name'>Enter Your Name: </label>
    <input className='input' type ='text' id='name' name={name} onChange={handleChange} />

    </>
  )
}


export default Name
// <label className='label' htmlFor='name'>Enter Your Name: </label>
// <input className='input' type ='text' id='name' name={props.name} />
