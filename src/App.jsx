import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/login/Login.jsx";
import Register from "./components/register/Register.jsx";
function App() {
  return (<>
  <Routes>
    <Route path="login" element={<Login/>}></Route>
    <Route path="register" element={<Register/>}></Route>
  </Routes>
  </>);
}

export default App;
