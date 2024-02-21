
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListaContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';


function App() {
  return (
    <div className="App">
    <NavBar />
    <ItemListaContainer greeting={'Tus productos'} />
    <ItemCount initial ={1} stock={10} onAdd={(quantity) => console.log('cantidad agregada', quantity)}/>
    </div>
  );
}

export default App;
