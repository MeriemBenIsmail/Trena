import "./App.css";

import { useUserContext } from "./contexts/userContext";
import { Alert } from "react-bootstrap"
import { Profile } from './pages/Profile'
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Home }from "./pages/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Terrain } from "./pages/Terrain";
import { Coach } from "./pages/Coach";
import { Admin } from "./pages/Admin"
function App() {
  const {loading ,error ,user}= useUserContext();
  return (
    /*loading ? <h5>Loading...</h5> : <> {user ? <Home /> : <Auth />} </>*/
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login></Login>} />
        <Route exact path="/signup" element={<Signup></Signup>} />
        <Route exact path="/home" element={<Home></Home>} />
        <Route exact path="/profil" element={<Profile></Profile> }/>
        <Route exact path="/terrains" element={<Terrain></Terrain> }/>
        <Route exact path="/coachs" element={<Coach></Coach> }/>
        <Route exact path="/admin" element={<Admin></Admin> }/>
      </Routes>
    </Router>
   

  );
}

export default App;
