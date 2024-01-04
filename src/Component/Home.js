import React from 'react';
import "./Home.css";
import { Link } from 'react-router-dom';
import Footer from './Footer.js';
import Navbar from './Navbar.js';

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      
      <main>
       
      
    <section class="products">
      <div class="product">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-fsOrBbWH7So1g_vKzCri12tOKd80UWhkaA&usqp=CAU" alt="Toy 1"/>
        
      </div>
      
      <div class="product">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAE-uF5MZJu6IxZh-C4wh25AnqZcl7_fDk6w&usqp=CAU" alt="Toy 2"/>
        
      </div>
      
      <div class="product">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYvAypfuqYz6R1XJnhkh7Uo0BuIVerLxNvgQ&usqp=CAU" alt="Toy 3"/>
        
      </div>
      
      <div class="product">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2S1rYwS2dy0YBwUtQstq1TYBnboNJ_o_cJg&usqp=CAU" alt="Toy 4"/>
        
      </div>
      <div class="product">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdzEGyqu3IvhWfsovFUOBqfsSL8046bxGKGA&usqp=CAU" alt="Toy 5"/>
        
      </div>
      <div class="product">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScm598TyNngBQfUW5yWjDsxjHqLgXp3BtE6A&usqp=CAU" alt="Toy 6"/>
        
      </div>
      <div class="product">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7gpSNp3JF5rPsr8F7HKOXu-fUkazJsIGXpQ&usqp=CAU" alt="Toy 7"/>
        
      </div>
      <div class="product">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS83RPWD-SAEyjbuKiWFrEIqvAjc9pwhJxUeg&usqp=CAU" alt="Toy 8"/>
        
      </div>
      <div class="product">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_nagi69wAjfc9wA03E6gqJQVtgPIvY1E1Jg&usqp=CAU" alt="Toy 9"/>
        
      </div>
      <div class="product">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyi8NQww9OvIVQkBZhSszC3F4L58KliV6S6g&usqp=CAU" alt="Toy 10"/>
        <p>$24.99</p>
        <button>Add to Cart</button>
      </div>
      <div class="product">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc-ZI6Ke4KfNL-DzyR7C26pnIlMKNvfn5ArLT3dApUCsbS1kY2TXrXjofVCdXCcsyz3h4&usqp=CAU" alt="Toy 11"/>
        <p>$18.99</p>
        <button>Add to Cart</button>
      </div>
      <div class="product">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIm_M4LbRQvfzGeoD7Z5797lyboYYtmPun6w&usqp=CAU" alt="Toy 12"/>
        <p>$44.99</p>
        <button>Add to Cart</button>
      </div>
      
    </section>
  </main>


      <Footer></Footer>
    </div>
  );
};

export default HomePage;