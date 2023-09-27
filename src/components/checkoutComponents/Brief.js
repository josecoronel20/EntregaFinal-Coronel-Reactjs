import React, { useContext, useState } from "react";
import "../../styles/brief.css";
import BuyBtn from "./BuyBtn";
import { CartWidgetContext } from "../../context/CartWidgetContext";
import { collection, addDoc, getFirestore } from "firebase/firestore";

const Brief = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  

  return (
    <div className="brief">
      <h2>Completa con los datos del cliente:</h2>
      <input
        value={formData.name}
        name="name"
        type="text"
        placeholder="Nombre y apellido"
        onChange={handleChange}
      />
      <input
        value={formData.email}
        name="email"
        type="email"
        placeholder="E-mail"
        onChange={handleChange}
      />
      <input
        value={formData.address}
        name="address"
        type="text"
        placeholder="Dirección"
        onChange={handleChange}
      />

      <BuyBtn
      data={formData}
        formName={formData.name}
        formEmail={formData.email}
        formAddress={formData.address}
      />
    </div>
  );
};

export default Brief;
