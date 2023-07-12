import './App.css';
import { About } from '../src/pages/About/index'
import { Home } from '../src/pages/Home/index'
import { MainLayout } from '../src/layouts/main.layout'

import { Navigate, useRoutes } from "react-router-dom";
import { permittedRoutes } from '../src/routes/index'

export const App = ()=> {
  const mainRoutes = {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "*", element: <Navigate to="/404" /> },
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
    ],
  };

  const routing = useRoutes([mainRoutes, ...permittedRoutes()]);
  return (
    <>{routing}</>  
  );
}


