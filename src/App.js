import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";
import Riwayat from "./pages/Riwayat";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Login" element={<Login />} />
        <Route path="Register" element={<Register />} />
        <Route path="ResetPassword" element={<ResetPassword />} />
        <Route path="riwayat" element={<Riwayat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
