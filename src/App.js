import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "./components/navComponents/Navbar";
import Detail from "./routes/Detail";
import Footer from "./components/footerComponents/Footer";
import Checkout from "./routes/Checkout"
import ItemListContainer from "./components/itemListComponents/ItemListContainer";
import Brief from "./components/checkoutComponents/Brief";


function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/category/:id" element={<ItemListContainer />} />
          <Route exact path="/item/:id" element={<Detail />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/brief" element={<Brief />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
