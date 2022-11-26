import './App.css';
import Header from './componant/Header';
import Footer from './componant/Footer';
import Home from './componant/Home';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div>
      <Header/>
    <Outlet />
    < Footer/>
 
    </div>
  );
}

export default App;
