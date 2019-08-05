import { Navbar } from "reactstrap";
import React from "react";
const Footer = () => {
  return (
    <section style={{ marginTop: "auto" }}>
      <Navbar style={{ backgroundColor: "#528feb" }}>
        <div style={{ display: "block", width: "200px" }} className="mx-auto">
          <h1>Moody</h1>
        </div>
      </Navbar>
    </section>
  );
};

export default Footer;
