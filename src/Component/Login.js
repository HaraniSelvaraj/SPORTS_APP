import React from 'react';
import './Login.css';
import{Link} from 'react-router-dom';
const Login=()=>
 {
    return (

        
        <div class="login-container">
            
        
        <form class="container">
            <h2>LOGIN</h2>
            
            <label for="username">USERNAME</label>
            <input type="text" id="username" name="username" required placeholder="Enter your name"/>

            <label for="password">PASSWORD</label>
            <input type="password" id="password" name="password" required placeholder="Enter your password"/>
            <button type="submit"><Link to="/Home"></Link>
                Submit
            </button>
            <button type="submit"><Link to="/">LOGIN</Link>
               
            </button>
        </form>
            
    </div>
    
    );
}
export default Login;