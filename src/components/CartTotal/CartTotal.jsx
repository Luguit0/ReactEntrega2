// BOOTSTRA
import Table from 'react-bootstrap/Table';

// CUSTOM COMPONENTES
import { useCartContext } from '../../context/CartContext';

// ESTILOS
import './CartTotal.scss';

const CartTotal = () => {
  const { totalPrice } = useCartContext(); // UseContext + CartContext

  const total = totalPrice();

  return (
    <Table>
      <tbody>
        <tr>
          <td className='text-start cartTotal-txt'>TOTAL</td>
          <td className='text-end cartTotal-price'>${total}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default CartTotal;
