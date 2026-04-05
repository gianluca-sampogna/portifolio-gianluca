import { useState } from "react";
import "./styles/index.css";
import { Header } from "./components/Header";
import { SobreMim } from "./components/SobreMim";

function Home() {
  // const [count, setCount] = useState(0);

  return (
    <div id="container">
      <Header />
      <SobreMim />
    </div>
  );
}

export { Home };
