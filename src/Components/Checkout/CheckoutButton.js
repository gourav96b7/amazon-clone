import {  Typography } from "@mui/material";
import styles from './checkoutbutton.module.css';
import React from "react";
import { useSelector } from "react-redux";
import { Link ,useNavigate} from "react-router-dom";

function CheckoutButton({ quantity }) {
  const cartItems = useSelector((state) => state.cart.items);
  const user = useSelector((state) => state.user);
  const signedIn = useSelector((state) => state.signedIn);
  const navigate=useNavigate()
  // const handleCheckout1 = () => {
  //   axios
  //     .post(`https://stripe-backend-api-amazon.herokuapp.com/checkout`, {
  //       cartItems,
  //       userId: user.uid,
  //       email: user.email,
  //     })
  //     .then((res) => {
  //       if (res.data.url) {
  //         window.location.href = res.data.url;
  //       }
  //     })
  //     .catch((err) => {
  //       console.error(err.message);
  //     });
  // };
  const handleCheckout=()=>{
    navigate('/Checkout')
  }

  return (
    <>
      {signedIn ? (
        <Typography
          className={styles.proceedToBuy}
          onClick={() => handleCheckout()}
        >
          {quantity === 0
            ? "Proceed to Buy"
            : `Proceed to Buy ( ${quantity} items )`}
        </Typography>
      ) : (
        <Link to="/Login" className={styles.link}>
          <Typography className={styles.proceedToBuy}>
            {quantity === 0
              ? "Proceed to Buy"
              : `Proceed to Buy ( ${quantity} items )`}
          </Typography>
        </Link>
      )}
    </>
  );
}

export default CheckoutButton;
