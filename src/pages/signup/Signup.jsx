import React from "react";
import {Link} from "react-router-dom";
import "./SignupT.css";

function Signup() {

    return (
        <div className="container_glass">
            <form>
                <div className="LOGIN_HEAD">
                    <h2>SIGN-UP</h2>
                </div>
                <div className="username">
                    <input type="text" id="Username" placeholder="Username/Email" />
                    <i className='bx bxs-user'></i>
                </div>
                <div className="Password">
                    <input type="password" id="Password" placeholder="Set password" />
                    <i className='bx bxs-lock-alt'></i>
                    <br />
                </div>
                <div className="submit">
                    <Link to="/"><button type="submit">SIGN-UP</button></Link>
                </div>
                <div className="already_exist">
                    <p>Have an account? <Link to="/">Login</Link></p>
                </div>
            </form>
        </div>
    );
}

export default Signup;
