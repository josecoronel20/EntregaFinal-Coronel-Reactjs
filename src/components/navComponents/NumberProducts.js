import React, { useState } from "react";
import "../../styles/navStyles/numberProduct.css"

const NumberProducts = ({ arr }) => {
  // const numArr = arr.length;

const [numArr, setNumArr] = useState(arr.length);

  return (
  <p className="numberProducts">{numArr}</p>
  )
};

export default NumberProducts;
