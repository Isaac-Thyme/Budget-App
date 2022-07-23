import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store/index.js';
import Header from './component/Header/Header.jsx';
import Login from './component/Login/Login.jsx';
import Signup from './component/Signup/Signup.jsx';
import Home from './component/Home/Home.jsx';

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
