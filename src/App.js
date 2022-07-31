import Componente1 from './Componentes/Componente1';
import Componente2 from './Componentes/Componente2';
import Componente3 from './Componentes/Componente3';
import Footer from './Componentes/Footer';
import NavBar from './Componentes/NavBar';
import './Css/App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    
    <div className="App">

        <NavBar/>

        <Componente1/>

        <Componente2/>

        <Componente3/>

        <Footer/> 
        
    </div>
  );
}

export default App;
