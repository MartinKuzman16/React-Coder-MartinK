
import './App.css';
import Cards from './components/Cards/Cards';
import CortesImg from './components/assets/corte-salinas.jpg';
import MechasImg from './components/assets/mechas-salinas.jpg';
import CerasImg from './components/assets/ceras.img5.jpg';
import NavBar from './components/NavBar/NavBar';
import ItemListaContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';


function App() {
  return (
    <div className="App">
    <NavBar />
    <ItemListaContainer greeting={'Tus productos'}/>
            <h3>bienvenidos</h3>
            <Cards titulo= "cortes" agenda= "sin agenda" img={CortesImg}/>
            <Cards titulo ="Colormetria" agenda= "debe agendar" img={MechasImg}/>
            <Cards titulo ="Prductos" agenda="consultar stock" img={CerasImg}/>

    <ItemCount initial ={1} stock={10} onAdd={(quantity) => console.log('cantidad agregada', quantity)}/>
    </div>
  );
}

export default App;
