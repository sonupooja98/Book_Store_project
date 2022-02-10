import logo from './logo.svg';
import './App.css';
import Orderplaced from './component/Orderplaced/Orderplaced';

import Main from './pages/mainpage/Main';
import Bookcard from './component/bookcard/Bookcard';
// import Home from './pages/home/Home';
import Wishlist from './component/wishlist/Wishlist';
import Cart from './component/cart/Cart';


import Home from './pages/home/Home';
import {
  BrowserRouter, Route, Switch
} from 'react-router-dom';
function App() {
  return (
    <div className="App">
     

     
     <BrowserRouter >
    <Switch>
     <Route path='/' component={Main} exact />
     <Route path='/home' component={Home} />
    <Route path='/wishlist' component={Wishlist} />
    <Route path='/cart' component={Cart} />
      
     </Switch>
    </BrowserRouter>
     {/* <Orderplaced /> */}
   </div>
  );
}

export default App;
