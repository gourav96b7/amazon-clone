import { Button, Divider, Typography } from "@mui/material";
import styles from './checkout.module.css';
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import orderPlaced from "../../Assets/images/testing.png";
import {setCartFromLocalStorage} from '../../Reducers/CartItemsReducer'

function Checkout() {
  const dispatch = useDispatch();
  const signedIn = useSelector((state) => state.signedIn);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify({ items: [], count: 0 }));
    localStorage.setItem("signedIn", JSON.stringify(signedIn));
    dispatch(setCartFromLocalStorage({ items: [], count: 0 }));
  }, [dispatch, signedIn]);

  const deliveryDate = () => {
    let current = new Date();
    current.setDate(current.getDate() + 5);
    const date = current.getDate();
    const month = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ][current.getMonth()];
    const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ][current.getDay()];
    return weekday + ", " + date + " " + month;
  };
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.left}>
            <Typography className={styles.orderPlaced}>
              <FaCheckCircle className={styles.checkIcon} />
              Order placed, thank you!
            </Typography>
            <Typography className={styles.confirmation}>
              Confirmation will be sent to your email.
            </Typography>
            <Typography className={styles.shippingTo}>
              Shipping to {user.displayName}
            </Typography>
            <Divider className={styles.divider} />
            
            <Typography >Delivery date</Typography>
            <Typography className={styles.date}>{deliveryDate()}</Typography>
          </div>
          <div className={styles.right}>
            <a href="https://www.primevideo.com/" target="blank">
              <img src={orderPlaced} alt="" className={styles.orderImage} />
            </a>
          </div>
        </div>
      </div>
      <Link to="/" className={styles.link}>
        <Button className={styles.buy}>Continue Shopping</Button>
      </Link>
    </div>
  );
}

export default Checkout;
