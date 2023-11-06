import React from "react";
import Form from "./Form";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="heading">TODO APP</h1>
      <Form></Form>
    </header>
  );
};

export default Header;
