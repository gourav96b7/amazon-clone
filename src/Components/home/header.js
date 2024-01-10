import React, { useState } from "react";
import "../../css/header.css";
import { Link } from "react-router-dom";
import amazonLogo from "../../Assets/images/amazonLogo.png";
import { useSelector } from "react-redux";
import { cartCount as basketCount } from "../../Reducers/CartItemsReducer";

function Header() {

  const [forceUpdate, setForceUpdate] = useState(false);
  const triggerUpdate = () => {
    setForceUpdate((prev) => !prev);
  };

const cartCount = useSelector(basketCount);

const handleAuthentication = () => {
    const storedUser = localStorage.getItem('user');
  
    if (storedUser) {
      console.log('Logging out user:', storedUser);
      localStorage.removeItem('user');
      triggerUpdate();
    } else {
      console.log('Performing sign-in or other actions');
      triggerUpdate();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src={amazonLogo}
          alt = "amazon-logo"
        />
      </Link>

      <div className="header__nav">
        <Link to={!localStorage.getItem('user') && '/login'}>
            <div onClick={handleAuthentication} className="header__option">
                <span className="header__optionLineOne">Hello {!localStorage.getItem('user') ? 'Guest' : JSON.parse(localStorage.getItem('user')).email}</span>
                <span className="header__optionLineTwo">{localStorage.getItem('user') ? 'Sign Out' : 'Sign In'}</span>
            </div>
        </Link>

        <Link to='/cart'>
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <Link to="/cart">
          <div className="header__optionBasket">
            <span className="header__optionLineTwo header__basketCount">
                Cart
                {cartCount}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
