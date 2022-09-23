import logo from './logo.svg';
import './App.css';
import Tester from './component/tester';
import Header1 from './component/Header1';
import Register from './component/Register';
import Order from './component/order';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import CreateOrder from './component/createOrder';
import ViewprevOrder from './component/prvOrderView';



function App() {
  return (
    <>

    <BrowserRouter>
     <Routes>
     <Route path='/' element={<Tester />} />
      <Route path='/order' element={<Order />} />
      <Route path='/order/viewprv' element={<ViewprevOrder />} /> {/* dummy route */}
      <Route path='/order/create' element={<CreateOrder />} />
    </Routes>
    </BrowserRouter>
    </>
   

  );
}

export default App;
