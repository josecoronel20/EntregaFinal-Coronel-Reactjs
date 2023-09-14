import React, { useState, useEffect } from "react";
import "../../styles/itemListStyles/itemListContainer.css";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { collection, getFirestore, getDocs } from "firebase/firestore";
import Loading from "../itemDetailComponents/Loading";
import ItemList from "./ItemList";
const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { id: categoryName } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const itemCollection = collection(db, "items");

    getDocs(itemCollection).then((snapshot) => {
      const doc = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

      if (categoryName) {
        const filteredProducts = doc.filter(
          (product) => product.category === categoryName
        );
        setProducts(filteredProducts);
      } else {
        setProducts(doc);
      }
    });
  }, [categoryName]);

  const location = useLocation();
  const isDetailPage = location.pathname.includes("/item/");

  return (
    <div className="itemListContainer">
      {products.length != 0 ? products.map((product) => (
        <ItemList
          styleCard="card"
          src={product.url}
          name={product.title}
          price={product.price}
          description={product.description}
          isDetailPage={isDetailPage}
          id={product.id}
        />
      )) : <Loading />}
      
    </div>
  );
};

export default ItemListContainer;
