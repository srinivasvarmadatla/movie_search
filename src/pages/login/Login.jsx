import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginT.css";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const logincheck = (e) => {
        e.preventDefault();
        if (username && password) {
            navigate('/Search-page');
        } else {
            alert("Please enter both username and password.");
        }
    };

    return (
        <div className="container_glass">
            <form onSubmit={logincheck}>
                <div className="LOGIN_HEAD">
                    <h2>LOGIN</h2>
                </div>
                <div className="username">
                    <input 
                        type="text" 
                        id="Username" 
                        placeholder="Username/Email(type something)" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                    />
                    <i className='bx bxs-user'></i>
                </div>
                <div className="Password">
                    <input 
                        type="password" 
                        id="Password" 
                        placeholder="Password(type something)" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                    <i className='bx bxs-lock-alt'></i>
                    <br />
                </div>
                <div className="check_area">
                    <div className="forget_password">
                        <Link>Forget password?</Link>
                    </div>
                </div>
                <div className="submit">
                    <button type="submit">LOGIN</button>
                </div>
                <div className="already_exist">
                    <p>Don't have an account? <Link to="/sign-up"><button type="button">Register</button></Link></p>
                </div>
            </form>
        </div>
    );
}

export default Login;
