import logo from './logo.svg';
import './App.css';
import LoginUser from './Components/LoginUser';
import Register from './Components/Register';
import Home from './Components/Home';
import { BrowserRouter, Route, Routes, Link, NavLink } from 'react-router-dom';
function App() {
  return (

    <>
      <BrowserRouter>
              <Routes >
                <Route path="/" exact element={<LoginUser/>} />
                <Route path="/register" element={<Register/>} />
                 <Route path="/home" element={<Home/>} />
                {/* <Route path="/changePass" component={changePassword} />
                <Route path="/post" component={Page} />  */}
              </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
