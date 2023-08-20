import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "./components/navComponents/Navbar";
import Home from "./routes/Home";
import ItemList from "./routes/ItemList";
import Detail from "./routes/Detail"
import Footer from "./components/footerComponents/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/category/:id" element={<ItemList />} />
        <Route exact path="/item/:id" element={<Detail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
