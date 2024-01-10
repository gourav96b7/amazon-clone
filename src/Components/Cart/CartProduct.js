import { Card, Typography } from "@mui/material";
import styles from './cartproduct.module.css';
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import useProduct from "../../hooks/useProduct";
import { updateProduct,removeProductFromCart, } from "../../Reducers/CartItemsReducer";

function CartProduct(props) {
  const { details } = props;
  const { product, loading, error } = useProduct(details.id);
  const dispatch = useDispatch();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  const calcPrice = (val) => {
    return Math.floor(val);
  };
  const deleteFromCart = () => {
    dispatch(removeProductFromCart({id:details.id,quantity: details.quantity}));
  };
  return (
    <Card className={styles.main}>
      <img src={details.image} alt="" className={styles.image} />
      <div style={{ width: "75%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Typography className={styles.title}>{product.title}</Typography>
          <Typography>₹ {calcPrice(details.price).toLocaleString()}</Typography>
        </div>
        <Typography className={styles.stock}>In stock</Typography>
        <div className={styles.giftDiv}>
          <Typography className={styles.giftOptions}>
            Gift options not available.
          </Typography>
          <a
            href="https://www.amazon.in/gp/help/customer/display.html?pop-up=1&nodeId=200898020"
            className={styles.link}
            target="blank"
          >
            Learn more
          </a>
        </div>
        <div className={styles.quantityDiv}>
          <Typography className={styles.quantity}>Quantity: </Typography>
          <select
            className={styles.select}
            onChange={(e) => {
              // setItemQuantity(e.target.value);
              dispatch(updateProduct({id:product.id,quantity:e.target.value}));
            }}
            value={details.quantity}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select>
        </div>
        <label
          className={`${styles.deleteLink} ${styles.removeButton}`}
          onClick={deleteFromCart}
        >
          Delete item from Cart
        </label>
      </div>
    </Card>
  );
}

export default CartProduct;
