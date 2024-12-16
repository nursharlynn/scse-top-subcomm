import { Route, Routes, Navigate, BrowserRouter, useLocation } from 'react-router-dom';
import Login from './pages/LoginPage/LoginPage.js';
import Dashboard from './pages/GLPage/Dashboard.js';
import Register from './pages/GLPage/Register.js';
import FormPage from './pages/GLPage/FormPage.js';
import Booking from './pages/GLPage/Booking.js';
import Navbar from './components/Navbar.tsx';
import Footer from "./components/Footer.tsx";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== '/' && <Navbar />}
      <Routes>
          <Route path="/" element={<Navigate replace to="/login"/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/register" element={<Register />} />
          <Route path="/dashboard/register/form" element={<FormPage />} />
          <Route path="/dashboard/booking" element={<Booking />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default function AppWithRouter() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
