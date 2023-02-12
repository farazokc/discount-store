import './App.css';
import Splash from './Components/splash/Splash';
import Login from './Components/login/Login';
import Signup from './Components/signup/Signup';
import AdminHome from './Components/adminHome/AdminHome';
import UserHome from './Components/userHome/UserHome';
import Order from './Components/order/Order';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/adminHome" element={<AdminHome/>}/>
        <Route path="/userHome" element={<UserHome/>}/>
      </Routes> */}
          {/* splash screen */}
          {/* <Splash /> */}
          {/* <Login /> */}
          {/* login */}
          {/* <Signup/> */}
          {/* <AdminHome/> */}
          {/* <UserHome/> */}
          <Order/>

          {/* if admin => admin panel */}


          {/* if user => user panel */}
      
    </div>
  );
}

export default App;
