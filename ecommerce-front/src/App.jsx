import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';

const App = () => {
  const user = true;
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/produtos" element={<ProductList />} />
        <Route path="/produtos/:category" element={<ProductList />} />
        <Route path="/produto/:id" element={<Product />} />
        <Route path="/carrinho" element={<Cart />} />
        <Route path="/login" element={user ? <Navigate replace to="/"  /> : (<Login/>)  }/>
        <Route path="/cadastro" element={user ? <Navigate replace to="/"  /> : (<Register/>)  }/>
      </Routes>
    </Router>
  )
};

export default App;