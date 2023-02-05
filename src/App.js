import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Route, Routes } from "react-router-dom";

import './App.scss';
import './components/assets/fonts/Fonts.css';

import HomePage from './pages/homePage/homePage.component';
import Navigation from './routs/navigation/navigation.component';
import Authentication from './routs/authentication/authentication';
import Shop from './routs/shop/shop.component';
import Checkout from './routs/checkout/checkout.component';
import { checkUserSession } from './store/user/user.action';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(checkUserSession())
    },[dispatch])
  return (
    <div className="App container">
      <Routes>
        <Route path='/' element={<Navigation/>} >
          <Route index element={<HomePage/>}/>
          <Route path='auth' element={<Authentication/>}/>
          <Route path='shop/*' element={<Shop/>}/>
          <Route path='checkout' element={<Checkout/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
