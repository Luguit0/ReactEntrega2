// REACT COMPONENTES
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// COMPONENTES
import NavBar from './components/NavBar/Navbar';
import Home from './components/Home/Home';
import CartContextProvider from './context/CartContext';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './containers/CartContainer/CartContainer';


// ESTILOS
import './App.scss';

function App() {
  return (
    <div className="App">
            <BrowserRouter>
        <CartContextProvider>
          <NavBar />
          <Routes>
            <Route
              index
              path='/'
              element={<Home />}
            />
            <Route
              index
              path='/store'
              element={<ItemListContainer />}
            />
            <Route
              index
              path='/category/:categoryId'
              element={<ItemListContainer />}
            />
            <Route
              path='/detail/:productId'
              element={<ItemDetailContainer />}
            />
            <Route
              path='/cart'
              element={<CartContainer />}
            />

            <Route
              path='*'
              element={<Navigate to='/' />}
            />
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
