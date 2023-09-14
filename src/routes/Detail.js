import React, { useState, useEffect } from "react";
import ItemList from "../components/itemListComponents/ItemList";
import { useParams } from "react-router-dom";
import "../styles/ItemDetailStyles/itemDetailContainer.css";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import Loading from "../components/itemDetailComponents/Loading"

const Detail = () => {
  const [product, setProduct] = useState(null);
  const { id: itemId } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const itemCollection = collection(db, "items");

    getDocs(itemCollection).then((snapshot) => {
      const doc = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

      const filteredProducts = doc.find((producto) => producto.id === itemId);
      setProduct(filteredProducts);
    });
  }, [itemId]);

  return (
    <div className="itemDetailContainer">
      {product ? (
        <ItemList
          styleCard="itemDetailCard"
          src={product.url}
          name={product.title}
          price={product.price}
          description={product.description}
          id={product.id}
        />
      ) : (
        <Loading/>
      )}
    </div>
  );
};

export default Detail;
