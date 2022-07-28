import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './component/Header/Header.jsx';
import Login from './component/Login/Login.jsx';
import Signup from './component/Signup/Signup.jsx';
import Home from './component/Home/Home.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
