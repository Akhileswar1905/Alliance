import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/login/Login.jsx";
import Register from "./components/register/Register.jsx";
import InnerNav from "./components/InnerNav/InnerNav.jsx";
import RegisterDev from "./components/devReg/RegisterDev.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<InnerNav />}>
          <Route index element={<Register />} />
          <Route path="org" element={<Register />} />
          <Route path="dev" element={<RegisterDev />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
