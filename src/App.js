import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import Home from './Components/home/Home';
import Header from './Components/home/header';
import SignUp from './Components/SignUp/SignUp';
import Cart from './Components/Cart/Cart';
import Checkout from './Components/Checkout/Checkout';
import Offers from './Components/Offers/Offers';
import Footer from './Components/home/footer';

function App() {

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<><Header /><Home /><Offers /><Footer /></>} />
          <Route path="/login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/cart" element={<><Header /><Cart /><Footer /></>} />
          <Route path="/checkout" element={<><Header /><Checkout /><Footer /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
