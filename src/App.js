import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login"
import Cart from "./pages/Cart";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ThankYouPage from "./pages/ThankYouPage";
import SignUp from "./pages/SignUp";
function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/sucessPurchase" element={<ThankYouPage />} />
        </Routes>
        <ToastContainer />
    </>
  );
}

export default App;
