import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Auth/Login";
import Register from "./Auth/Register";

function App() {
  return (
    <>
      {/* <h1 className="text-6xl">Notes Web Site</h1> */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
