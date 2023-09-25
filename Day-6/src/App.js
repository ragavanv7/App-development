import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import StockWatch from './pages/StockWatch';
import Smart from './pages/Smart';
import Term from './pages/Term';
import Aboutus from './pages/Aboutus';
import Policies from './pages/Policies';
import Faq from './pages/Faq';
import Admin from './pages/Admin';
import InvestmentManagement from './pages/InvestmentManagement';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Dashboard" element={<Dashboard/>}/>
          <Route path="/signup" element={<Signup/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/watch" element={<StockWatch/>} />
          <Route path="/Terms" element={<Term/>} />
          <Route path="/smart" element={<Smart/>} />
          <Route path="/About" element={<Aboutus/>} />
          <Route path="/Policy" element={<Policies/>} />
          <Route path="/FAQ" element={<Faq/>} />
          <Route path="/AdminLogin" element={<Admin/>} />
          <Route path="/Investment" element={<InvestmentManagement/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;