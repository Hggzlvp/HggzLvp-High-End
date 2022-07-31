import React from 'react'

function Componente3() {
  return (
    <div className='container-fluid DivComp3'>  

      <div className='row filaDeImagenes'>

        <div className='col-md-4 imagenIzq'>
            <img src=".\Componente3\imagenes\Larga-Izquierda.jpg" alt="" />
        </div>

        <div className='col-md-4 imagenAr'>
            
            <div className='ImgMedioA'>
                <img src=".\Componente3\imagenes\Corta-Arriba.jpg" alt="" />
            </div>
            
            <div className='ImgMedioB'>
                <img src=".\Componente3\imagenes\Corta-Abajo.jpg" alt="" />
            </div>
            
        </div>
     
        <div className='col-md-4 imagenDer'>
            <img src=".\Componente3\imagenes\Larga-Derecha.jpg" alt="" />
        </div>

      </div>
      

      <div className='row textosComp3'>

        <div className='col-md-3 txt3'>
            <img src=".\Componente3\Iconos\iconoir_design-pencil.png" alt="" />
            <h3>Diseñamos</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, officiis.</p>
        </div>
        <div className='col-md-3 txt3'>
            <img src=".\Componente3\Iconos\carbon_carbon-for-ibm-product.png" alt="" />
            <h3>Producimos</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, officiis.</p>
        </div>
        <div className='col-md-3 txt3'>
            <img src=".\Componente3\Iconos\material-symbols_rocket-launch-outline.png" alt="" />
            <h3>Lanzamos</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, officiis.</p>
        </div>
        <div className='col-md-3 txt3'>
            <img src=".\Componente3\Iconos\radix-icons_update.png" alt="" />
            <h3>Refresh</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, officiis.</p>

        </div>
      </div>

    </div>
  )
}

export default Componente3