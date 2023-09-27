import React, { createContext, useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";

export const ProductsFirebaseContext = createContext(null);

export const ProductsFirebaseProvider = ({ children }) => {

  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = collection(db, "items");

    getDocs(itemCollection).then((snapshot) => {
      const doc = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setProducts(doc);
      console.log(products);
    });
  }, []);

  return (
    <ProductsFirebaseContext.Provider value={[products]}>
      {children}
    </ProductsFirebaseContext.Provider>
  );
};
