import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './componant/Home';
import About from './componant/About';
import Contact from './componant/Contact';
import Services from './componant/Services';
import Projects from './componant/Projects';
import Features from './componant/Features';
import FreeQuote from './componant/FreeQuote';
import Team from './componant/Team';
import Testimonial from './componant/Testimonial';
import Test from './componant/Test';
import Users from './componant/Users';
import Edit from './componant/Edit';
import Insert from './componant/Insert';
import Product from './componant/products/Allproduct';
import App from './App';


export default function RouterApp(){
  return (
    <BrowserRouter>
    
    <Routes>
    <Route path='/' element={< App/>}>
      <Route index element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Test' element={<Test/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Services' element={<Services/>}/>
      <Route path='/Users' element={<Users/>}/>
      <Route path='/Projects' element={<Projects/>}/>
      <Route path='/Product' element={<Product/>}/>
      <Route path='/Features' element={<Features/>}/>
      <Route path='/FreeQuote' element={<FreeQuote/>}/>
      <Route path='/Team' element={<Team/>}/>
      <Route path='/Testimonial' element={<Testimonial/>}/>
      <Route path='/Users/Edit/:ids' element={<Edit/>}/>
      <Route path='/Insert' element={<Insert/>}/>
      
    
      


      
     
      </Route>
    </Routes>

    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <RouterApp />
  
);


reportWebVitals();
