import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Header from './Componant/Header';
import Footer from './Componant/Footer';
import Home from './Componant/Home';
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div classNameName="App">
     
    <Header/>
    < Outlet />
    <Footer />

    </div>
  );
}

export default App;
