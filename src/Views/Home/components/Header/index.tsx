import React from "react";
import { Icon } from "@src/components/Icon";
import { FaEnvelope, FaSun, FaUser, FaCode, FaBriefcase } from "react-icons/fa";
import "./styles/index.css";

const Header = () => {
  return (
    <div id="container-header">
      <div className="conteudo-esquerda">
        <Icon as={FaEnvelope} size={20} color="var(--cinza)" />
        <p>gianlucascalzisampogna@gmail.com</p>
        <Icon as={FaSun} size={20} color="var(--cinza)" />
      </div>

      <div className="conteudo-direita">
        <a href="#container-sobre-mim" className="parte">
          <Icon as={FaUser} size={18} color="var(--cinza)" />
          <span>Sobre mim</span>
        </a>

        <a href="#tecnologias" className="parte">
          <Icon as={FaCode} size={18} color="var(--cinza)" />
          <span>Tecnologias</span>
        </a>

        <a href="#meus-projetos-secao" className="parte">
          <Icon as={FaBriefcase} size={18} color="var(--cinza)" />
          <span id="meus-projetos">Meus projetos</span>
        </a>
      </div>
    </div>
  );
};

export { Header };
