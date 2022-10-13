import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Status from "./components/Status";
import Admin from "./components/Admin";
import VoteForm from "./components/VoteForm";
import MenuItems from "./components/MenuItems";
import Login from "./components/Login";
import AuthProvider from "./components/AuthProvider";
import RequireAuth from "./components/RequireAuth";
function App() {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/Menu"
            element={
              <RequireAuth>
                <Menu />
              </RequireAuth>
            }
          />
          <Route
            path="/Status"
            element={
              <RequireAuth>
                <Status />
              </RequireAuth>
            }
          />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Form" element={<VoteForm />} />
          <Route path="/MenuItems" element={<MenuItems />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
