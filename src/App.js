
import Navbar from './componentrs/Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

import Cart from './pages/Cart';
import Product from './pages/Product';
import ShopCatagory from './pages/ShopCatagory';
import Login from './pages/Login';
import Shop from './pages/Shop';
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element= {<Shop/>}/>
      <Route path="/mens" element= {<ShopCatagory category= "men"/>}/>
      <Route path="/Womens" element= {<ShopCatagory category= "women"/>}/>
       <Route path="/Product" element= {<Product/>}/>
      <Route path="/:Productid"element= {<Product/>}/>
      <Route path="/Cart"element= {<Cart/>}/>
      <Route path="/Login"element= {<Login/>}/>   
    </Routes>
    </BrowserRouter>
  

    </>
  );
}

export default App;
