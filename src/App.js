import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";
import Riwayat from "./pages/Riwayat";
import Verifikasi from "./pages/Verifikasi";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Login" element={<Login />} />
        <Route path="Register" element={<Register />} />
        <Route path="ResetPassword" element={<ResetPassword />} />
        <Route path="Riwayat" element={<Riwayat />} />
        <Route path="Verifikasi" element={<Verifikasi />} />
        <Route path="Checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
