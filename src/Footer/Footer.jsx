import React, { useContext } from "react";
import Actions from "./Actions";
import Filter from "./Filter";
import './Footer.css';
import { TodoContext } from "../Context/TodoProvider";

const Footer = () => {
  const {remaining} = useContext(TodoContext);
  return (
    <footer className="footer">
      <Actions></Actions>
      <div className="footer-column">
        <div className="footer-heading">Remaining</div>
        <span className="remaining">{remaining} remaining todos</span>
      </div>
      <Filter></Filter>
    </footer>
  );
};

export default Footer;
