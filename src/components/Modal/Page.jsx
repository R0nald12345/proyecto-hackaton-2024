import React, { useState } from 'react'
import ModalGrafico from './ModalGrafico'
import ModalEleccion from './ModalEleccion';

const Page = () =>{
  
  const [openModalGrafico, setOpenGrafico] = useState(false);
  const [openModalEleccion, setOpenEleccion] = useState(false);
  

  return (

    <div>

      <ModalGrafico
        open={openModalGrafico}
        onClose={()=>setOpenGrafico(false)}
      />

      <ModalEleccion
        open={openModalEleccion}
        onClose={()=>setOpenEleccion(false)}
      />

      <p className ='bg-red-500 text-clip'>Hello World</p>

      <div className='flex gap-10'>

        <button
          onClick={()=>setOpenGrafico(true)}
          >Modal1</button>
        
        <button
          onClick={()=>setOpenEleccion(true)}
        >Modal2</button>

      </div>

    </div>
  )
}

export default Page;
