import React from 'react';
import './Login.css';
import{Link} from 'react-router-dom';
const Login=()=>
 {
    return (

        
        <div class="login-container">
            
        
        <form class="container">
            <h1>Login</h1>
            <label for="username">USERNAME</label>
            <input type="text" id="username" name="username" required placeholder="Enter your name"/>

            <label for="password">PASSWORD</label>
            <input type="password" id="password" name="password" required placeholder="Enter your password"/>
            <button type="submit">
                Submit
            </button>


        </form>
            <h4>Don't have an account? {' '}
            <Link to ="/Signup">Sign up</Link></h4>
    </div>
    
    );
}
export default Login;