import { NavLink } from "react-router-dom";
import CarWidget from "../Carwidget/Carwidget";
import './NavBar.css';

const NavBar = () => {
    return ( 
        <nav className="navBar">
            <NavLink to='/' className="logo">
                <h1> Ecommerce </h1>
            </NavLink>
            <div className="Categorias">
                <NavLink to='/category/Servicios' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Servicios</NavLink>  
                <NavLink to='/category/Productos' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Productos</NavLink>  
                <NavLink to='/category/Cursos' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Cursos</NavLink>  
            </div>
            <CarWidget />
        </nav>   
    );
}

export default NavBar;
