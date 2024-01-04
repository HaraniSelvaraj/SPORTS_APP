import Login from './Component/Login';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Signup from'./Component/Signup';
import react,{Component} from 'react'
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import About from './Component/About';
import Footer from './Component/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
      
      <Navbar></Navbar>
      <Routes>

        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Signup' element={<Signup/>}></Route>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Footer' element={<Footer/>}></Route>
       
       
      </Routes>
     
      
      </BrowserRouter>
      
    </div>
  )
}
export default App;