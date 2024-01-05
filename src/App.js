import Login from './Component/Login';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Signup from'./Component/Signup';
import react,{Component} from 'react'

import Home from './Component/Home';
import About from './Component/About';
import Shop from './Component/Shop';


function App() {
  return (
    <div>
      <BrowserRouter>
      
      
      <Routes>

        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Signup' element={<Signup/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Shop' element={<Shop/>}></Route>
       
       
      </Routes>
     
      
      </BrowserRouter>
      
    </div>
  )
}
export default App;