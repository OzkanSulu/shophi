import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./App.scss"
import ScrollToTop from "./ScrollToTop";

const Layout = () => {
  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "/product/:id", element: <Product /> },
      { path: "/products/:id", element: <Products /> },
    ],
  },
]);

function App() {
  return (
    <div className="App">
    
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
