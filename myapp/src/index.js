import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './home';
import NoPage from './NoPage'
import About from "./About";
import Contact from "./Contact";
import Cars from "./Cars";
import Colors from "./components/colors/colors";
import Search from "./components/search/search";
import LifeCycle from "./components/lifeCycle/lifeCycle";
import UserList from "./users/UserList";
import reportWebVitals from './reportWebVitals';


export default function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Cars" element={<Cars />} />
          <Route path="/colors" element={<Colors />} />
          <Route path="/search" element={<Search />} />
          <Route path="/LifeCycle" element={<LifeCycle />} />
          <Route path="/UserList" element={<UserList />} />
          <Route path="*" element={<NoPage />} />
      
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterApp />
  </React.StrictMode>
);


reportWebVitals();
