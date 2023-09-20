import React, { useContext } from "react";
import "../../styles/itemListStyles/card.css";
import { Link } from "react-router-dom";
import { CartWidgetContext } from "../../context/CartWidgetContext";
import ItemQuantitySelector from "../itemDetailComponents/ItemQuantitySelector";

const ItemList = ({ src, name, description, price, styleCard, id }) => {
  // const [cart, setCart] = useContext(CartWidgetContext);

  // const addToCart = () => {
  //   const itemFound = cart.find((item) => item.id === id);

  //   if (itemFound) {
  //     setCart((currentItems) =>
  //       currentItems.map((item) =>
  //         item.id === id ? { ...item, quantity: item.quantity + 1 } : item
  //       )
  //     );
  //   } else {
  //     setCart((currentItems) => [
  //       ...currentItems,
  //       { id, quantity: 1, price, src, name, description },
  //     ]);
  //   }
  // };

  const cardDefault = (
    <div className={styleCard}>
      <Link to={`/item/${id}`} className="linkContainer">
        <img src={src} alt="imagen de producto" />
        <div className="textContainer">
          <h2>{name}</h2>
          <p className="description">{description}</p>
        </div>
        <p className="price">${price}</p>
      </Link>
      <div className="addToCartPlusQuantity">
        {/* <button className="addToCartBtn" onClick={addToCart}>
          + Add to cart
        </button> */}
      </div>
    </div>
  );

  const cardDetail = (
    <div className={styleCard}>
      <div className="linkContainer">
        <img src={src} alt="imagen de producto" />
        <div className="textContainer">
          <h2>{name}</h2>
          <p className="description">{description}</p>
        </div>
        <p className="price">${price}</p>
      </div>
      <div className="addToCartPlusQuantity">
        <ItemQuantitySelector productId={id} />
        {/* <button className="addToCartBtn" onClick={addToCart}>
          + Add to cart
        </button> */}
      </div>
    </div>
  );

  return styleCard === "card" ? cardDefault : cardDetail;
};

export default ItemList;
