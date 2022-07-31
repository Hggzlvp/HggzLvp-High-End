import React from 'react'

function Footer() {
  return (
  <div className='container-fluid DivFooter'>
    <div className=' row articleFooter'>

        <div className='col-md-6 imagenIg'>
          <img src=".\Footer\instagram.png" alt="" />
        </div>
                   
        <div className='col-md-6 txtContacto'>
            <p>¡Seguinos en Instagram! <br /> Y enterate de todo</p>
            <button >¡SEGUINOS!</button>
        </div>


    </div>
  </div>
  )
}

export default Footer