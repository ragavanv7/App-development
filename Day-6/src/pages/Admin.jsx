import { useState } from 'react';
import toast, {Toaster} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';
import { login1 } from '../redux/userSlice';
import { useDispatch } from "react-redux";
function Admin() {
    const nav = useNavigate();
    const dispatch =useDispatch();
    const [error, setError] = useState({})
    const [login, setLogin] = useState(
        {
            username: "",
            password: ""
        }
    )
    // const Login = (e) => {
    //     e.preventDefault();
    //     console.log("Logging in with username:", login.username);
    //     console.log("Password:", login.password);
    // };
    
    const handleChange = (e) => {
        setLogin({...login, [e.target.id]:e.target.value})
    };
    const handleClick = (e) => {
        e.preventDefault();
        setError({});
        let validationErrors ={}
        if (!login.username.trim()) {
            validationErrors.username = "Email is required";
        }
        else if (!/\S+@\S+\.\S+/.test(login.username)) {
            validationErrors.username = "Email is invalid";
        }
        if (!login.password.trim()) {
            validationErrors.password = "Password is required";
        }
        else if (login.password.length < 8) {
            validationErrors.password ="The password must be 8 characters or longer";
        }
        setError(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            dispatch(login1({
                username: login.username
            }))
            nav("/Dashboard");   
            toast.success('Login Successful');
        }

    };

    return (
        <div className="LoginBorder">
            <Toaster />
            <div className='LoginImageBox'>
                
            </div>
            <div className='LoginBox-2'>
                <div className='LoginBoxTop'>
                    <div className='LoginBoxTitle'>
                        <h1>Admin Login</h1>
                        <br/>
                        <h2>LIFE INSURANCES</h2>
                        
                    </div>
                    <form className="LoginForm" onSubmit={handleClick}>
                        <input
                            onChange={handleChange}
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Email"
                        />
                        {error.username && <span className='ErrorMsg'>{error.username}</span>}
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
                
            </div>
        </div>
    );
}

export default Admin;
