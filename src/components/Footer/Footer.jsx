// BOOTSTRAP
import { Container } from 'react-bootstrap';

// REACT COMPONENTES
import { Link } from 'react-router-dom';

// COMPONENTES
import NavList from '../NavBar/NavList';
import logo from '../../bs3.svg';

// ESTILOS
import './Footer.scss';

const Footer = () => {
    return (
        <Container
            fluid
            className='footer-container d-flex flex-column justify-content-evenly align-items-center align-items-md-start  py-3'
        >
            <Link to='/'>
                <img
                    src={logo}
                    className='m-3'
                    style={{
                        width: '120px',
                    }}
                />
            </Link>
            <NavList />
            <p className='footer-text my-3 ms-md-3 text-md-start'>
            BlackStanley es un emprendimiento familiar para satisfaser las necesecidades del matero, de camping y del viajero. Tenemos stock de todas las unidades y si, queres un termo unico, nunca antes visto, nosotros te lo traemos en menos de 10 días. 
            </p>
            
        </Container>
    );
};

export default Footer;