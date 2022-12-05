import "./App.css";
import { Routes, Route } from "react-router-dom";
import FrontPage from "./Pages/FrontPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FrontPage />}>
        {/* <Route index element={<Home />} /> */}
        {/* <Route index element={<Home />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
