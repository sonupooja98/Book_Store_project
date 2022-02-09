import logo from './logo.svg';
import './App.css';
import Main from './pages/mainpage/Main';
import Bookcard from './component/bookcard/Bookcard';
// import Home from './pages/home/Home';
import Wishlist from './component/wishlist/Wishlist';


import Home from './pages/home/Home';
import {
  BrowserRouter, Route, Switch
} from 'react-router-dom';
function App() {
  return (
    // <div className="App">
    //  {/* <Main /> */}
    //  <Home />
    //  {/* <Bookcard /> */}

    // </div>
    <BrowserRouter >
    <Switch>
    <Route path='/' component={Main} exact />
    <Route path='/home' component={Home} />
    <Route path='/wishlist' component={Wishlist} />
      
    </Switch>
    </BrowserRouter>
  );
}

export default App;
