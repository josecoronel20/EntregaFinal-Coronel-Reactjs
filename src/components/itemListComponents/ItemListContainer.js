import React, { useState, useEffect, useContext } from "react";
import "../../styles/itemListStyles/itemListContainer.css";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Loading from "../itemDetailComponents/Loading";
import ItemList from "./ItemList";
import { ProductsFirebaseContext } from "../../context/ProductsFirebaseContext";

const ItemListContainer = () => {
  const { id: categoryName } = useParams();
  const [productsInList, setProductsInList] = useState([]);
  const [products] = useContext(ProductsFirebaseContext);

  useEffect(() => {
    if (categoryName) {
      const filteredProducts = products.filter(
        (product) => product.category === categoryName
      );
      setProductsInList(filteredProducts);
    } else {
      setProductsInList(productsInList);
    }
  }, [categoryName]);

  const location = useLocation();
  const isDetailPage = location.pathname.includes("/item/");

  return (
    <div className="itemListContainer">
      {products.length !== 0 ? (
        products.map((product) => (
          <ItemList
            styleCard="card"
            src={product.url}
            name={product.title}
            price={product.price}
            description={product.description}
            isDetailPage={isDetailPage}
            id={product.id}
          />
        ))
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default ItemListContainer;
