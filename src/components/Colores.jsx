import React from 'react'
import "./btn.css"

export const Colores = ({obj,func}) => {
  const {id,color, isActive} = obj
  
  // console.log(color)
    
  return (
    <button  type='button' className={isActive? `active ${color}`: color} id={id} onClick={func}>{color}</button>
  )
}
