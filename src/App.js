import './App.css';
import { Home } from '../src/pages/Home/index'
import { About } from '../src/pages/About/index'
import { permittedRoutes } from '../src/routes/index'
import { Navigate, useRoutes } from "react-router-dom";
import { MainLayout } from './layouts/user/partial/main.layout';

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


