import './App.css';
import { Hotel } from './pages/Hotel';
import { Home } from '../src/pages/Home/index'
import { About } from '../src/pages/About/index'
import { permittedRoutes } from '../src/routes/index'
import { Navigate, useRoutes } from "react-router-dom";
import { MainLayout } from './layouts/user/partial/main.layout';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';
import { Login } from './pages/Auth/Login';
import { Register } from './pages/Auth/Register';

export const App = ()=> {
  const mainRoutes = {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "*", element: <Navigate to="/404" /> },
      { path: "", element: <Home /> },
      { path: "about-us", element: <About /> },
      { path: "hotel", element: <Hotel /> },
      { path: "blog", element: <Blog /> },
      { path: "contact-us", element: <Contact /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  };

  const routing = useRoutes([mainRoutes, ...permittedRoutes()]);
  return (
    <>{routing}</>  
  );
}


