import './Assets/css/App.css';
import Login from './Components/login';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Signup from './Components/signup';
function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;