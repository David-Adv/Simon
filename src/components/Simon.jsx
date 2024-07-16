import React, { useEffect, useState } from 'react'
import {Colores} from "./Colores"
import {obtenerNumeroAleatorio} from "./aleatorio"
import"./tablero.css"
const simonColors = [
    {
    id:1,
    color:"amarillo",
    isActive: false

   },
   {
    id:2,
    color:"verde",
    isActive: false
   },{
     id:3,
     color:"rojo",
     isActive: false
   },{
     id:4,
     color:"azul",
     isActive: false
   }

]
let interval = null;
export const Simon = () => {

  const [secuencia,setSecuencia] = useState([obtenerNumeroAleatorio()])
  const [counter,setCounter] = useState(0)

  // const [mostrarValor,setMostrar] = useState(0)

  const[btnColores,setBtnColores] = useState(simonColors)




  const checkear = (obj)=>{
    // console.log(obj.id)
    


    if(secuencia[counter] == obj.id){
    
      setCounter(counter + 1 )

      if(secuencia.length - 1 <= counter){

        console.log("llegaste al maximo pibe")
        setCounter(0)
        setSecuencia([...secuencia,obtenerNumeroAleatorio()])
      }

    }else{
      alert("le pifiaste, empeza denuevo")
      // setCounter([])
      setSecuencia([obtenerNumeroAleatorio()])
    }


   
    

  }


  const [index, setIndex] = useState(0)




  const delay = (array) => {
    console.log('render')
     interval = setInterval(() => {
     setIndex((prev)=> prev + 1)
    }, 900);

  }


  if (index + 1 >= secuencia.length)
    {
      clearInterval(interval)
    } 

useEffect(()=>{
  setIndex(0)
  delay(secuencia)
},[secuencia])


  return (
    <>
    <p>{secuencia[index-1]}</p>
    <p>{secuencia}</p>
    <div className='btn-container'>
    {btnColores.map((item,index )=> (<Colores key={index} obj={item} func={()=>checkear(item) } ></Colores> ))}
        {/* <Colores></Colores> */}
        {/* <button id={1}>1</button> */}
        </div>
    </>
  )
}
