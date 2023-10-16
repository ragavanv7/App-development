import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Smart from './pages/Smart';
import Term from './pages/Term';
import Aboutus from './pages/Aboutus';
import Policies from './pages/Policies';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import InvestmentManagement from './pages/InvestmentManagement';
import AdminLogin from './pages/Admin';
import Dash from './pages/Dash';
import Welcome from './pages/Welcome';
import InsurancePlans from './pages/InsurancePlans';
import Movies from './pages/Movies';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Dashboard" element={<Dashboard/>}/>
          <Route path="/signup" element={<Signup/>} />
          <Route path="/HOME" element={<Home/>} />
          <Route path="/watch" element={<Dash/>} />
          <Route path="/Terms" element={<Term/>} />
          <Route path="/smart" element={<Smart/>} />
          <Route path="/About" element={<Aboutus/>} />
          <Route path="/Policy" element={<Policies/>} />
          <Route path="/FAQ" element={<Faq/>} />
          <Route path="/AdminLogin" element={<AdminLogin/>} />
          <Route path="/Investment" element={<InvestmentManagement/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/" element={<Welcome/>} />
          <Route path="/InsurancePlans" element={<InsurancePlans/>} />
          <Route path="/Movies" element={<Movies/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;