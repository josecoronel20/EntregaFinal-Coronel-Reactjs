import React from "react";
import MenuNav from "../navComponents/MenuNav";
import "../../styles/footerStyles/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContainer">
        <MenuNav style="categoryFooter" />
      </div>
    </div>
  );
};

export default Footer;
