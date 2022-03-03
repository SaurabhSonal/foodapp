import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';

import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import singleProduct from './Pages/singleProduct';

const App = () => {
  return(
      <>
      <Router>
      <Navbar/>
        <Routes>
        <Route path="/" element={<Home/>}></Route>
          <Route path="/Product" element={<Product/>}></Route>
          <Route path="/Product/:_id" element={<singleProduct/>}></Route>
          <Route path="/Cart" element={<Cart/>}></Route>
        </Routes>
      </Router>
      </>
  );
};

export default App;
