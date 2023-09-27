import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/buyBtn.css";
import { CartWidgetContext } from "../../context/CartWidgetContext";
import swal from "sweetalert";
import { collection, addDoc, getFirestore } from "firebase/firestore";

const BuyBtn = ({ formName, formEmail, formAddress, data }) => {
  const [cart, setCart] = useContext(CartWidgetContext);
  const formData = data;
  const db = getFirestore();

  const buy = async () => {
    try {
      if (!formData.name || !formData.email || !formData.address) {
        alert("Por favor, complete todos los campos del formulario.");
        return;
      }

      const cartDescription = cart.map((item) => ({
        name: item.title,
        quantity: item.quantity,
        price: item.price,
      }));

      const orderData = {
        ...formData,
        cart: cartDescription,
      };

      const docRef = await addDoc(collection(db, "orders"), orderData);

      console.log(
        "Datos del cliente y productos enviados a Firebase. ID del documento:",
        docRef.id
      );
    } catch (error) {
      console.error(
        "Error al enviar los datos del cliente y productos a Firebase:",
        error
      );
    }

    setCart([]);
    swal("Tu compra se realizó con éxito");
  };

  if (formName && formEmail && formAddress) {
    return (
      <Link to={"/"}>
        <button className="buyBtn" onClick={buy}>
          Finalizar compra
        </button>
      </Link>
    );
  }
};

export default BuyBtn;
