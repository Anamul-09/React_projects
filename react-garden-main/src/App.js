import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./componant/Home";
import About from "./componant/About";
import Contact from "./componant/Contact";
//service link start here
import Services from "./componant/Services/Services";
import ServiceDetails from "./componant/Services/ServiceDetails1";
import ServiceDetails2 from "./componant/Services/ServiceDetails2";
import ServiceDetails3 from "./componant/Services/ServiceDetails3";
import ServiceDetails4 from "./componant/Services/ServiceDetails4";
import ServiceDetails5 from "./componant/Services/ServiceDetails5";
import ServiceDetails6 from "./componant/Services/ServiceDetails6";
//service link Ends here
import Projects from "./componant/Projects";
import Features from "./componant/Features";
import FreeQuote from "./componant/FreeQuote";
import Team from "./componant/Team";
import Testimonial from "./componant/Testimonial";

import Registration from "./componant/Form/USRegistration";

import Addmain from "./componant/Admin/Addmain";
import Addhome from "./componant/Admin/Addhome";
import Users from "./componant/Admin/Users/Users";
import Insert from "./componant/Admin/Users/Insert";
import Edit from "./componant/Admin/Users/Edit";
import Products from "./componant/Admin/Product/Products";
import AddProduct from "./componant/Admin/Product/addProduct";
import EditProduct from "./componant/Admin/Product/EditProduct";
import MainTemplate from "./componant/MainTemplate";
import Sidebar from "./componant/Admin/Sidebar";
import AddLogin from "./componant/Admin/Administrator/AddLogin";
import AddRegister from "./componant/Admin/Administrator/AddRegister";
import USLogin from "./componant/Form/USLogin";
import USRegistration from "./componant/Form/USRegistration";
import Cart from "./componant/Services/Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<MainTemplate />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Services" element={<Services />} />
          <Route path="ServiceDetails1" element={<ServiceDetails />} />
          <Route path="ServiceDetails2" element={<ServiceDetails2 />} />
          <Route path="ServiceDetails3" element={<ServiceDetails3 />} />
          <Route path="ServiceDetails4" element={<ServiceDetails4 />} />
          <Route path="ServiceDetails5" element={<ServiceDetails5 />} />
          <Route path="ServiceDetails6" element={<ServiceDetails6 />} />
          <Route path="Cart" element={<Cart />} />

          <Route path="Projects" element={<Projects />} />
          <Route path="Features" element={<Features />} />
          <Route path="FreeQuote" element={<FreeQuote />} />
          <Route path="Team" element={<Team />} />
          <Route path="Testimonial" element={<Testimonial />} />
          <Route path="AddRegister" element={<AddRegister />} />
          <Route path="USRegistration" element={<USRegistration />} />
          <Route path="AddLogin" element={<AddLogin />} />
          <Route path="USLogin" element={<USLogin />} />
        </Route>

        <Route path="admin" element={<Addmain />}>
          <Route index element={<Addhome />} />
          <Route path="Users" element={<Users />} />
          <Route path="Sidebar" element={<Sidebar />} />
          <Route path="Insert" element={<Insert />} />
          <Route path="Users/Edit/:ids" element={<Edit />} />

          <Route path="Products" element={<Products />} />
          <Route path="AddProduct" element={<AddProduct />} />
          <Route path="product/edit/:ids" element={<EditProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
