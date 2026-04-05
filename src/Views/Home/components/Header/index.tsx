import React from "react";
import { Icon } from "@src/components/Icon";
import { FaEnvelope, FaSun } from "react-icons/fa";
import "./styles/index.css";

const Header = () => {
  return (
    <div id="container-header">
      {/* Remova as divs internas e deixe os elementos soltos */}
      <Icon as={FaEnvelope} size={26} color="var(--cinza)" />
      <p>gianlucascalzisampogna@gmail.com</p>
      <Icon as={FaSun} size={26} color="var(--cinza)" />
    </div>
  );
};

export { Header };
