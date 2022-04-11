
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import Orders from './components/Orders/Orders';
import SignUp from './components/SignUp/SignUp'
import Shop from './components/Shop/Shop';
import RequiredAuth from './components/RequiredAuth/RequiredAuth';
import Shipment from './components/Shipment/Shipment';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/orders' element={<Orders></Orders>}></Route>
        <Route path='/inventory' element={
        <RequiredAuth>
          <Inventory></Inventory>
        </RequiredAuth>
      }></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/shipment' element={
          <RequiredAuth>
            <Shipment></Shipment>
          </RequiredAuth>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
