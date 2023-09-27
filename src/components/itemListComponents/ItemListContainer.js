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
    let filteredProducts = [...products];
    if (categoryName) {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === categoryName
      );
    }

    setProductsInList(filteredProducts);
  }, [categoryName]); 

  const location = useLocation();
  const isDetailPage = location.pathname.includes("/item/");

  return (
    <div className="itemListContainer">
      {productsInList.length !== 0 ? (
        productsInList.map((product) => (
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
