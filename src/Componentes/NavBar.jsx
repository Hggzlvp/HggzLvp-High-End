import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {

  return (
    
    <div className='container-fluid'>

        <div className="row">

                <div className="col-md-7  Icono" href="#home">
                  <img className='pt-4 pb-3' src='./logo.png'></img>
                </div>

                <div className="col-md-5 me-auto">
                  <Nav.Link className="col-md-4 pt-5  me-auto1" href="#Componente1">¿Que hacemos?</Nav.Link>
                  <Nav.Link className="col-md-4 pt-5  me-auto2" href="#Componente2">Galeria</Nav.Link>
                  <Nav.Link className="col-md-4 pt-5  me-auto3" href="#Footer">Contactos</Nav.Link>
                </div>          
        </div>

    </div>
  )
}

export default NavBar