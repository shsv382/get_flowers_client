import React, { useEffect, lazy, Suspense } from 'react';
import Spinner from "./components/spinner/spinner.component";
import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { Auth } from './pages/Auth';
import { Cart } from './pages/Cart';
import { Admin } from './pages/Admin';
import { Product } from './pages/Product';

function AppRouter() {
    return (
        <Suspense fallback={<Spinner />}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/admin' element={<Admin />} />
                <Route path='/products/:productId' element={<Product />} />
            </Routes>
        </Suspense>
    );
  }
          
  export default AppRouter;