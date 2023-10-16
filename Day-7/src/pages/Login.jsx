import { useState } from 'react';
import '../assets/css/Login.css'
import toast, {Toaster} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';
import { login1 } from '../redux/userSlice';
import { useDispatch } from "react-redux";
import {  loginUser } from './../Components/Service/Api'
function Login() {
    const nav = useNavigate();
    const dispatch =useDispatch();
    const [error, setError] = useState({})
    const [login, setLogin] = useState(
        {
            email: "",
            password: ""
        }
    )
   
    
    const handleChange = (e) => {
        setLogin({...login, [e.target.id]:e.target.value})
    };
    const handleClick = (e) => {
        e.preventDefault();
        loginUser(login)
        nav("/HOME")


    };

    return (
        <div className="LoginBorder">
            <Toaster />
            <div className='LoginImageBox'>
                
            </div>
            <div className='LoginBox'>
                <div className='LoginBoxTop'>
                    <div className='LoginBoxTitle'>
                        <h2>LIFE INSURANCES</h2>
                        <p>Term life insurance is a good defensive game plan .
                        </p>
                    </div>
                    <form className="LoginForm" onSubmit={handleClick}>
                        <input
                            onChange={handleChange}
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Email"
                        />
                        {error.email && <span className='ErrorMsg'>{error.email}</span>}
                        <input
                            onChange={handleChange}
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                        />
                        {error.password && <span className='ErrorMsg'>{error.password}</span>}
                        <button onClick={handleClick}>Login</button>
                    </form>
                </div>
                <div className='LoginBoxBottom'>
                    <h3 >Don't have an account? <span onClick={() => nav("/signup")}>Signup</span></h3>
                </div>
            </div>
        </div>
    );
}

export default Login;
