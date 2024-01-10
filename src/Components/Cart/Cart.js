import { Divider, Typography } from "@mui/material";
import styles from './cart.module.css'
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartProduct from "./CartProduct";
import emptyCart from "../../Assets/images/emptyCart.png";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import CheckoutButton from "../Checkout/CheckoutButton";
import {clearCart } from "../../Reducers/CartItemsReducer";

function Cart() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = useSelector((state) => state.cart.count);
  const dispatch = useDispatch();
  const calcTotal = () => {
    return Math.floor(
      cartItems.reduce((total, item) => {
        // Ensure that the price and quantity properties exist
        if (item.price && item.quantity) {
          return total + Math.floor(item.price) * Math.floor(item.quantity);
        }
        return total;
      }, 0)
    );
  };
  

  const clearCartClick = () => {
    dispatch(clearCart());
  };
  return (
    <div className={styles.main}>
      <div className={styles.leftDiv}>
        {cartItems.length === 0 ? (
          <div className={styles.noItemsDiv}>
            <img src={emptyCart} alt="" />
            <div>
              <Typography className={styles.noItems}>
                Your Amazon Cart is empty
              </Typography>
              <Link to="/" className={styles.link}>
                <Typography className={styles.goToProducts}>
                  Show Products
                </Typography>
              </Link>
            </div>
          </div>
        ) : (
          <div className={styles.innerleftDiv}>
            <Typography className={styles.heading}>Shopping Cart</Typography>
            {cartItems.map((item, i) => {
              return (
                <div key={i}>
                  <Divider className={styles.divider} />
                  <CartProduct details={item} key={i} />
                </div>
              );
            })}
            <div className={styles.subTotal}>
              <Typography className={styles.subTotalText}>
                Subtotal ({cartCount} items) :{" "}
                <b>₹ {calcTotal().toLocaleString()}</b>
              </Typography>
            </div>
          </div>
        )}
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            paddingRight: "2rem",
            paddingTop: "1rem",
          }}
        >
          {cartItems.length !== 0 && (
            <Typography onClick={clearCartClick} className={styles.clearCart}>
              Clear Cart
            </Typography>
          )}
        </div>
        <Typography className={styles.footer}>
          The price and availability of items at Amazon.in are subject to
          change. The shopping cart is a temporary place to store a list of your
          items and reflects each item's most recent price. Do you have a
          promotional code? We'll ask you to enter your claim code when it's
          time to pay.
        </Typography>
      </div>
      {cartItems.length !== 0 && (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className={styles.rightDiv}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <FaCheckCircle className={styles.checkIcon} />
              <Typography className={styles.freeDelivery}>
                Your order is eligible for FREE Delivery.
              </Typography>
            </div>
            <Typography className={styles.checkoutText}>
              Select this option at checkout.{" "}
              <a
                href="https://www.amazon.in/gp/help/customer/display.html?nodeId=200904360&pop-up=1"
                target="blank"
                className={styles.checkoutLink}
              >
                Details
              </a>
            </Typography>
            <Typography className={styles.subTotalText}>
              Subtotal ({cartCount} items) :{" "}
              <b>₹ {calcTotal().toLocaleString()}</b>
            </Typography>
            <CheckoutButton quantity={0} />
          </div>
          <div className={styles.lowerRightDiv}>
            <Link to="/" className={styles.link}>
              <Typography className={styles.continueShopping}>
                Continue Shopping
              </Typography>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
