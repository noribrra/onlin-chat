import "./App.css";
import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes } from "react-router-dom";
import Singup from "./pages/singup/SingUp";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import { Usercontext } from "./context/Authcontext";
function App() {
  const { authuser } = Usercontext();

  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Toaster />
      <Routes>
        <Route
          path="/"
          element={authuser ? <Home /> : <Navigate to="login" />}
        />
        <Route
          path="/singup"
          element={authuser ? <Navigate to="/" /> : <Singup />}
        />
        <Route
          path="/login"
          element={authuser ? <Navigate to="/" /> : <Login />}
        />
      </Routes>
    </div>
  );
}

export default App;
