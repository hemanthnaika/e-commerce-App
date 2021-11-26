import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import Products from './components/Products'
import Product from './components/Product'
import Order from './components/Order'
import MyOrders from './components/MyOrder'
import AdminPage from './components/AdminPage'
import Navbar from './layout/Navbar'
import PrivateRoute from "./routing/PrivateRoute";
import { Routes, Route } from 'react-router-dom'
import {Toaster}from 'react-hot-toast'
const App = () => {
  return (
    <div>
      {/* Add the Toaster in div  */}
      <div><Toaster/></div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<PrivateRoute child={<Login />} />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/products' element={<Products />} />
        <Route path='/admin' element={<AdminPage />} />
        <Route path='/Order' element={<Order />} />

      </Routes>
    </div>
  );
}

export default App;