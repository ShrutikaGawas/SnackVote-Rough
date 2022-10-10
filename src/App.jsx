import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Status from "./components/Status";
import Admin from "./components/Admin";
import VoteForm from "./components/VoteForm";
import Lastpage from "./components/Lastpage";
import Login from "./components/Login";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Status" element={<Status />} />
          <Route path="/Admin" element={<Admin/>}/>
          <Route path="/Form" element={<VoteForm/>}/>
          <Route path="/Poll" element={<Lastpage/>}/>
          <Route path="/Login" element={<Login/>}/>
       
        </Routes>
      </Router>
    </>
  );
}

export default App;
