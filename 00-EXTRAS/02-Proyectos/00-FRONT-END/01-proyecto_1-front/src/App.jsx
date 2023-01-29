import { Route, Routes } from "react-router-dom";
import "./App.css";
import SvgLogo from "./components/SvgLogo";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <SvgLogo />
        <div className="navbar__btn-container">
          <button>Sign up</button>
          <button>Log in</button>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
