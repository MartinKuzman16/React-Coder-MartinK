
import './App.css';
import Cards from './components/Cards/Cards';
import CortesImg from './components/assets/corte-salinas.jpg';
import MechasImg from './components/assets/mechas-salinas.jpg';
import CerasImg from './components/assets/ceras.img5.jpg';

import "bulma/css/bulma.css";

import NavBar from './components/NavBar/NavBar';
import ItemListaContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetalContainer from './components/ItemDetailContainer/ItemDetailContainer';



function App() {
  return (
    <div className="App">
    <NavBar />
    <ItemListaContainer greeting={'Tus productos'}/>

            <section classsName ="hero is-primary">
              <div className='hero-body'>
                <h2 className='title'>bienvenidos</h2>
              </div>
            </section> 
        <div className="container">
              <section className="section">
            <div className="columns">
                  <div className="columns is-4">
                  <Cards titulo= "cortes" agenda= "sin agenda" img={CortesImg}/>
                </div>
                <div className="columns is-4">
                  <Cards titulo ="Colormetria" agenda= "debe agendar" img={MechasImg}/>
                  </div>
                <div className="columns is-4">
                  <Cards titulo ="Prductos" agenda="consultar stock" img={CerasImg}/>
                </div>
            </div>
              </section>
        </div>

            <div className='App'>
              <BrowserRouter>
              <NavBar />
              <Routes>
                <Route path='/' element= {<ItemListContainer/>}/>
                <Route path=  '/category/:categoryId' element={<ItemListContainer />} />
                <Route path='/Item/:itemId' element= {<ItemDetalContainer/>} />
                <Route path= '*' element ={<h1>404 NOT FOUND </h1>} />
              </Routes>
              </BrowserRouter>
              </div>
            
            
    
    </div>
  );
}

export default App;
