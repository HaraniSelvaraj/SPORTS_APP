import React from 'react';
import './Signup.css';
import {Link} from 'react-router-dom';
function Signup()
 {
    return (
        
        <div>
      
<form>
        <h2>SIGNUP</h2>
    
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required/>
    
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required/>
        
        <label for="Email">Email:</label>
        <input type="email" id="password" name="email" required/>
        
        <label for="number">Mobile Number:</label>
        <input type="number" id="number" name="number" required/>
    
        <input type="submit" value="Register"></input>
        <button type="submit"><Link to="/Login">LOGIN</Link>
               
            </button>
        
        
</form>
    </div>
    
    )
}
export default Signup;