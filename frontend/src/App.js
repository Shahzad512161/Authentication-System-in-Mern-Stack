import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login"; // Adjust imports as needed
import Signup from "./pages/Signup";
import Main from "./pages/Main"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/main" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
