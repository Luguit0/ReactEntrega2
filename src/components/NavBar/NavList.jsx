// BOOTSTRAP
import Nav from 'react-bootstrap/Nav';

// REACT COMPONENTS
import { NavLink } from 'react-router-dom';

// ESTILOS
import './NavList.scss';


const NavList = () => {
    return (
        <Nav className='navlist-container mx-3'>
            <NavLink
                to='/store'
                className='navlist-item ms-md-0'
            >
                PRODUCTOS
            </NavLink>
            <NavLink
                to='/category/termos'
                className='navlist-item'
            >
                TERMOS
            </NavLink>
            <NavLink
                to='/category/botellas'
                className='navlist-item'
            >
                BOTELLAS
            </NavLink>
            <NavLink
                to='/category/combos'
                className='navlist-item'
            >
                COMBOS
            </NavLink>
        </Nav>
    );
};
export default NavList;