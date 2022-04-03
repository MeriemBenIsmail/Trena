import "./App.css";

import { useUserContext } from "./contexts/userContext";
import { Alert } from "react-bootstrap"
import { Auth }from "./pages/Auth";
import { Home }from "./pages/Home"
function App() {
  const {loading ,error ,user}= useUserContext();
  return (
    <div className="App">
    {error && <Alert variant="danger">{'user not found'}</Alert>}
    {loading ? <h5>Loading...</h5> : <> {user ? <Home /> : <Auth />} </>}

  </div>

  );
}

export default App;
