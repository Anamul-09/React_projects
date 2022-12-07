import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Preferences from "./componants/Preferences";
import Dashboard from "./componants/Dashboard";
import Login from "./componants/Login";

import "./App.css";

function App() {
  const [token, setToken] = useState();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="container">
      <h1>My Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/preferences" element={<Preferences />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
