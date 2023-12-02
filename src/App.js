import { BrowserRouter, Routes, Route } from "react-router-dom";
import PeluNav from "./components/Navbar";
import PeluFooter from "./components/Footer";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Us from "./pages/Us";
import Registration from "./pages/Registration";
import Cart from "./pages/Cart";

function App() {
  return (
    <BrowserRouter>
      <PeluNav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/us" element={<Us />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <PeluFooter />
    </BrowserRouter>
  );
}

export default App;
