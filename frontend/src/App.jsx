import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar' //Navbar has been mounted in this app.jsx. tolor khinit ami div t classname =app di taar tolot <Navbar/> diute eikhini ahi gol
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Cart from './pages/Cart/Cart'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Verify from './pages/verify/verify'
import MyOrders from './pages/MyOrders/MyOrders'

const App = () => {

  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>} {/* if showLogin is true, the LoginPopup component will be displayed, otherwise return the fragment */}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/order' element={<PlaceOrder />}></Route>
          <Route path='/verify' element={<Verify />}></Route>
          <Route path='/myorders' element={<MyOrders />}></Route>
        </Routes>
      </div>
      <Footer/>
    </>

  )
}

export default App
