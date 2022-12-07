import "./App.css";
import Header from "./Componant/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Componant/Footer";

function App() {
  return (
    <div>
      <Header />

      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
