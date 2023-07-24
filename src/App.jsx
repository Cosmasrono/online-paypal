import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CheckoutForm from "./Components/Checkout";
import "./index.css";
import "./App.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AuthRoute from "./Components/AuthRoute";
import Home from "./pages/Home";

function App() {
  return (
   
      <>
        <nav className="flex">
          <img src="https://img.icons8.com/?size=1x&id=zCkt2fdFgcSM&format=png" alt="" />
        </nav>
        <div className="App items-center justify-center flex-col flex mt-4">
          <h1 className="text-slate-900 text-3xl font-extrabold">Online PayPal Payment Gateway Integration</h1>
          <p className="italic text-blue-700 font-bold">Move your money around the world with online PayPal</p>
        </div>

        <Routes>
          <Route path="/" element={<CheckoutForm />} />
          <Route element={<AuthRoute />}/>
            <Route path="/" element={<Home />} />
        
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </>
     
  );
}

export default App;
