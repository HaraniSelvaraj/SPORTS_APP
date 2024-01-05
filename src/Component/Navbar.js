import '../Component/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
    <nav className="navbar">
      <ul className="nav-menu">
        <li className="nav-item">
          <Link to="/" className="nav-link">HOME</Link>
        </li>
        <li className="nav-item">
          <Link to="/Shop" className="nav-link">SHOP</Link>
        </li>
        <li className="nav-item">
          <Link to="/About" className="nav-link">ABOUT</Link>
        </li>
        <li className="nav-item">
          <Link to="/Login" className="nav-link">LOGIN</Link>
        </li>
        <li className="nav-item">
          <Link to="/Signup" className="nav-link">SIGN UP</Link>
        </li>
        
       
      </ul>
    </nav>



  <div class="area"></div>
  <nav class="main-menu">
    <ul>
      <li>
        <a href="https://jbfarrow.com">
          <i class="fa fa-home fa-2x"></i>
          <span class="nav-text">
            Home
          </span>
        </a>

      </li>
      <li class="has-subnav">
        <a href="#">
          <i class="fa fa-globe fa-2x"></i>
          <span class="nav-text">
            Report
          </span>
        </a>

      </li>
      <li class="has-subnav">
        <a href="#">
          <i class="fa fa-comments fa-2x"></i>
          <span class="nav-text">
            Message
          </span>
        </a>

      </li>
      <li class="has-subnav">
        <a href="#">
          <i class="fa fa-camera-retro fa-2x"></i>
          <span class="nav-text">
            Product Photos
          </span>
        </a>

      </li>
      <li>
        <a href="#">
          <i class="fa fa-film fa-2x"></i>
          <span class="nav-text">
            Shops
          </span>
        </a>
      </li>
      <li>
        <a href="#">
          <i class="fa fa-book fa-2x"></i>
          <span class="nav-text">
            customers
          </span>
        </a>
      </li>
      <li>
        <a href="#">
          <i class="fa fa-cogs fa-2x"></i>
          <span class="nav-text">
            Settings
          </span>
        </a>
      </li>
      <li>
        <a href="#">
          <i class="fa fa-map-marker fa-2x"></i>
          <span class="nav-text">
            Member Map
          </span>
        </a>
      </li>
      <li>
        <a href="#">
          <i class="fa fa-info fa-2x"></i>
          <span class="nav-text">
            Documentation
          </span>
        </a>
      </li>
    </ul>

    <ul class="logout">
      <li>
        <a href="#">
          <i class="fa fa-power-off fa-2x"></i>
          <span class="nav-text">
            Logout
          </span>
        </a>
      </li>
    </ul>
  </nav>
</div>

  );
}

export default Navbar;