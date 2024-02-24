import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./containers/Home";
import Products from "./containers/Products";
import Cart from "./containers/Cart";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;