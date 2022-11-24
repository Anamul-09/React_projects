
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Header from './header';
import Sidebar from './sidebar'
import Home from './home';
import Footer from './footer';
// import About from './About';
import { Outlet } from "react-router-dom";




function App() {
  return (
    <>

<Header brand="Anam tech" slogan="This is my first website"/>

<div className="container mt-5">
  <div className="row">
    <Sidebar/>
    < Outlet />
    
  </div>
</div>


< Footer />
      
    
    </>
  );
}

export default App;
