import React, { useState, useEffect } from "react";
import Card from "./Card";
import "../../styles/catalogStyles/catalog.css"

const Catalog = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(products => setProducts(products))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="catalog">
            {products.map((product) => (
                <Card
                    src={product.image}
                    name={product.title}
                    price={product.price}
                    description={product.description}
                />
            ))}
        </div>
    )
}

export default Catalog;
