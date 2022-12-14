// BOOTSTRAP
import Modal from 'react-bootstrap/Modal';

// REACT COMPONENTES
import { useState } from 'react';
import { Link } from 'react-router-dom';

// COMPONENETS
import iconCart from '../../assets/icon-cart.svg';
import { useCartContext } from '../../context/CartContext';
import CartItem from '../../components/CartItem/CartItem';
import CartTotal from '../CartTotal/CartTotal';

// ESTILOS
import './CartWidget.scss';

function CartWidget() {
    const [show, setShow] = useState(false);
    const { cartList, clearCart } = useCartContext();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let totalQty = 0;

    cartList.map(prod => (totalQty = totalQty + prod.qty));

    return (
        <>
            <div
                onClick={handleShow}
                className='iconCart-container'
            >
                <img
                    src={iconCart}
                    alt='Carrito tienda'
                />
                {totalQty > 0 && <h6 className='quantityCartItems'>{totalQty}</h6>}
            </div>

            {cartList.length === 0 ? (
                <Modal
                    show={show}
                    onHide={handleClose}
                >
                    <Modal.Body className='emptyCart-container'>
                        <h5>CARRITO VACIO</h5>
                        <Link to='/store'>
                            <button className='btn--orange'>SEGUIR COMPRANDO</button>
                        </Link>
                    </Modal.Body>
                </Modal>
            ) : (
                <Modal
                    show={show}
                    onHide={handleClose}
                >
                    <Modal.Header>
                        <Modal.Title>Cart: {totalQty}</Modal.Title>
                        <p
                            onClick={clearCart}
                            className='cartWidget-txtBtn m-0'
                        >
                            QUITAR TODO
                        </p>
                    </Modal.Header>
                    <Modal.Body>
                        <CartItem />
                    </Modal.Body>
                    <Modal.Footer>
                        <CartTotal />
                        <Link to='/cart'>
                            <button className='btn--orange'>CHECKOUT</button>
                        </Link>
                    </Modal.Footer>
                </Modal>
            )}
        </>
    );
}

export default CartWidget;
