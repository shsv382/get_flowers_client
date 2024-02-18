import React, { useEffect, lazy, Suspense } from 'react';
import Spinner from "./components/spinner/spinner.component";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { Auth } from './pages/Auth';
import { Cart } from './pages/Cart';
import { Admin } from './pages/Admin';

// const Home = lazy(() => import('./pages/Home'));
// const Shop = lazy(() => import('./pages/Shop'));
// const Auth = lazy(() => import('./pages/Auth'));
// const Cart = lazy(() => import('./pages/Cart'));
// const Admin = lazy(() => import('./pages/Admin'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },      
  {
    path: "/admin",
    element: <Admin />,
  },
]);

function AppRouter() {
    return (
        <Suspense fallback={<Spinner />}>
            <RouterProvider router={router} />
        </Suspense>
    );
  }
          
  export default AppRouter;