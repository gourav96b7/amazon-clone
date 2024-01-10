import React from "react";
import "../../css/Home.css";
import "../../css/ProductBox.css"
import amazonBanner from "../../Assets/images/amazonBanner.jpg";
import UseProduct from "../../hooks/useProduct.js";
import { useDispatch } from "react-redux";
import { addNewProductToCart } from "../../Reducers/CartItemsReducer.js";

const randomId = () => Math.ceil(Math.random()*10);

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src={amazonBanner}
          alt="Homepage Logo"
        />

        <div className="home_row">
          <RenderProduct id={randomId()} />
          <RenderProduct id={randomId()} />
          <RenderProduct id={randomId()} />
          <RenderProduct id={randomId()} />
        </div>

        <div className="home_row">
          <RenderProduct id={randomId()} />
          <RenderProduct id={randomId()} />
          <RenderProduct id={randomId()} />
          <RenderProduct id={randomId()} />
        </div>
      </div>
    </div>
  );
}

// Create a separate component to render the product
const RenderProduct = ({ id }) => {
  const dispatch = useDispatch();
  const { product, loading, error } = UseProduct(id);

  const addToCart = () => {
    dispatch(addNewProductToCart(product));
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const renderStars = () => {
    const stars = Math.round(product.rating.rate);
    const starsArray = [];
    for (let i = 0; i < stars; i++) {
      starsArray.push(<span key={i}>🌟</span>)
    }
    return starsArray;
  }

  return (

    <div className="product_box">

      <img src={product.image} alt="" className="image"/>
      <div className="product__info">
        <p className="title">{product.title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{Math.floor(product.price*79.67)}</strong>
        </p>
        <div className="product__rating">
          {renderStars()}
          {product.rating.rate}<br />
          {product.rating.count} ratings
        </div>
      </div>

      <button onClick={addToCart} className="addToCart">Add to Cart</button>
    </div>
  );
};

export default Home;
