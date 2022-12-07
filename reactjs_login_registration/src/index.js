import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Componant/Login";
import Home from "./Componant/Home";
import Register from "./Componant/Register";

export default function RouterApp() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="Home" element={<Home />} />
            <Route path="Login" element={<Login />} />
            <Route path="Register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterApp />
  </React.StrictMode>
);

reportWebVitals();
