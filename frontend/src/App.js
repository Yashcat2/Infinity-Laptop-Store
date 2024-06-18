import './App.css';
import  Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {ShopCategory } from './Pages/ShopCategory';
import{Shop} from './Pages/Shop';
import { Product } from './Pages/Product';
import { Cart } from './Pages/Cart';
import { LogingSignup } from './Pages/LogingSignup';
import { Footer } from './Components/Footer/Footer';
import asus from './Components/Assests/asus3.jpg'
import dell from './Components/Assests/dell3.jpg'
import hp from './Components/Assests/hp2.jpg'
import msi from './Components/Assests/msi2.jpg'
import lenovo from './Components/Assests/lenovo2.jpg'
import acer from './Components/Assests/acer.jpg'
import Services from './Pages/Services';
import ContactUs from './Pages/ContactUs';
import About from './Pages/About';

function App() {  
  return (
    <div>
      <BrowserRouter> 
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/asus' element={<ShopCategory banner={asus} catagory="asus" />}/>
          <Route path='/dell' element={<ShopCategory banner={dell} catagory="dell" />}/>
          <Route path='/hp' element={<ShopCategory banner={hp} catagory="hp" />}/>
          <Route path='/msi' element={<ShopCategory banner={msi} catagory="msi" />}/>
          <Route path='/lenovo' element={<ShopCategory banner={lenovo} catagory="lenovo" />}/>
          <Route path='/acer' element={<ShopCategory banner={acer} catagory="acer" />}/>

          <Route path='/product'element={<Product/>}>
              <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LogingSignup/>}/>
          <Route path='/aboutus' element={<About/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/contactus' element={<ContactUs/>}/>
            
        </Routes>
        <Footer/>      
      </BrowserRouter>
    </div>
  );
}

export default App;
