import React from "react";
import MenuNav from "../navComponents/MenuNav";
import "../../styles/footerStyles/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContainer">
        <MenuNav styleClass="categoryFooter" />
      </div>
    </div>
  );
};

export default Footer;
