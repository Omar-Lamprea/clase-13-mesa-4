
import React, { useEffect, useState } from 'react'

const Pizza = () => {
  const [tipo, setTipo] = useState("carne")

  useEffect(() =>{
    console.log("Se montó el componente de Pizza");

    
    return () =>{
      console.log('Se desmontó el compoennede de Pizza');
    }

  }, [])

  useEffect(()=>{
    console.log("Se actualizó el componente de Pizza");
    setTimeout(() => {
      setTipo('Romana')
    }, 2000);
  },[tipo])

  console.log("Se renderizó el componente de Pizza");

  return (
    <div>Pizza de: {tipo}</div>

  )
}

export default Pizza