import logo from './logo.svg';
// import './App.css';

import Register from './component/Register';
import Order from './component/order';
import Login from './component/login';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import CreateOrder from './component/createOrder';



function App() {
  return (
    <>

    <BrowserRouter>
     <Routes>
     <Route path='/' element={<Login />} />
     <Route path='/Register' element={<Register />} />
      <Route path='/order' element={<Order />} />
      <Route path='/order/create' element={<CreateOrder />} />
    </Routes>
    </BrowserRouter>
    </>
   

  );
}

export default App;
