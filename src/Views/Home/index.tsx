import { useState } from "react";
import "./styles/index.css";
import { Header } from "./components/Header";
import { SobreMim } from "./components/SobreMim";
import { Tecnologias } from "./components/Tecnologias";

function Home() {
  // const [count, setCount] = useState(0);

  return (
    <div id="container">
      <Header />
      <SobreMim />
      <Tecnologias />
    </div>
  );
}

export { Home };
