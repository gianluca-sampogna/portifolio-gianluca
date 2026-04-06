import { Icon } from "@src/components/Icon";
import "./styles/index.css";
import { Sublinhado } from "@src/components/Sublinhado";
import { CORES } from "@src/themes/CORES";
import { type IconType } from "react-icons";

import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaPython,
  FaFontAwesome,
  FaBolt,
} from "react-icons/fa";
import {
  SiTypescript,
  SiVite,
  SiExpo,
  SiFastlane,
  SiAxios,
  SiGoogleplay,
  SiAppstore,
  SiPrettier,
  SiGooglemaps,
  SiNpm,
  SiYarn,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { Projeto } from "./components/Projeto";

import foto_assin from "@src/assets/app_assin.png";
import foto_plantech from "@src/assets/plantech.png";
import foto_appgithub from "@src/assets/app_github.png";
import portifolio_gianluca from "@src/assets/portifolio_gianluca.png";

type stack = {
  nome: string;
  icone: IconType;
  cor: string;
  url: string;
};

type projeto = {
  titulo: string;
  descricao: string;
  url: string;
  uri_image: string;
};

const Tecnologias = () => {
  const handleNavigate = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const frontEndStack = [
    {
      nome: "HTML5",
      icone: FaHtml5,
      cor: "#E34F26",
      url: "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
    },
    {
      nome: "CSS3",
      icone: FaCss3Alt,
      cor: "#1572B6",
      url: "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
    },
    {
      nome: "JavaScript",
      icone: FaJsSquare,
      cor: "#F7DF1E",
      url: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
    },
    {
      nome: "TypeScript",
      icone: SiTypescript,
      cor: "#3178C6",
      url: "https://www.typescriptlang.org/",
    },
    {
      nome: "React",
      icone: FaReact,
      cor: "#61DAFB",
      url: "https://react.dev/",
    },
    { nome: "Vite", icone: SiVite, cor: "#646CFF", url: "https://vitejs.dev/" },
    {
      nome: "Axios",
      icone: SiAxios,
      cor: "#5A29E4",
      url: "https://axios-http.com/",
    },
  ];

  const mobileStack = [
    {
      nome: "React Native",
      icone: TbBrandReactNative,
      cor: "#61DAFB",
      url: "https://reactnative.dev/",
    },
    {
      nome: "Expo",
      icone: SiExpo,
      cor: "#000020",
      url: "https://docs.expo.dev/",
    },
    {
      nome: "Fastlane",
      icone: SiFastlane,
      cor: "#00F200",
      url: "https://docs.fastlane.tools/",
    },
    {
      nome: "FontAwesome",
      icone: FaFontAwesome,
      cor: "#339AF0",
      url: "https://fontawesome.com/docs",
    },
    {
      nome: "Reanimated",
      icone: FaBolt,
      cor: "#9933FF",
      url: "https://docs.swmansion.com/react-native-reanimated/",
    },
    {
      nome: "Maps",
      icone: SiGooglemaps,
      cor: "#4285F4",
      url: "https://github.com/react-native-maps/react-native-maps",
    },
  ];

  const outrosStack = [
    {
      nome: "Git",
      icone: FaGitAlt,
      cor: "#F05032",
      url: "https://git-scm.com/",
    },
    {
      nome: "GitHub",
      icone: FaGithub,
      cor: "#181717",
      url: "https://github.com/",
    },
    {
      nome: "Python",
      icone: FaPython,
      cor: "#3776AB",
      url: "https://www.python.org/",
    },
    {
      nome: "Google Play",
      icone: SiGoogleplay,
      cor: "#410093",
      url: "https://play.google.com/console/about/",
    },
    {
      nome: "Apple Store",
      icone: SiAppstore,
      cor: "#0071E3",
      url: "https://developer.apple.com/app-store/",
    },
    {
      nome: "Prettier",
      icone: SiPrettier,
      cor: "#F7B93E",
      url: "https://prettier.io/",
    },
    {
      nome: "npm",
      icone: SiNpm,
      cor: "#CB3837",
      url: "https://www.npmjs.com/",
    },
    {
      nome: "Yarn",
      icone: SiYarn,
      cor: "#2C8EBB",
      url: "https://yarnpkg.com/",
    },
  ];

  const meusProjetos = [
    {
      titulo: "App Assin",
      descricao: "Aplicativo para os servidores do incaper",
      url: "https://play.google.com/store/apps/details?id=com.appassin&hl=pt_BR",
      uri_image: foto_assin,
    },
    {
      titulo: "Plantech",
      descricao: "Aplicativo para o controle da fertiirrigação de hortas",
      url: "https://github.com/PlantechPI/planTech-mobile",
      uri_image: foto_plantech,
    },
    {
      titulo: "App github",
      descricao:
        "Aplicativo que cria uma rede social com base na api do github",
      url: "https://github.com/gianluca-sampogna/AppGitHub",
      uri_image: foto_appgithub,
    },
    {
      titulo: "Portifolio",
      descricao: "Meu portifolio",
      url: "https://github.com/gianluca-sampogna/portifolio-gianluca",
      uri_image: portifolio_gianluca,
    },
  ];

  const renderStack = (stack: stack[]) => (
    <div className="icones">
      {stack.map((tech, index) => (
        <a
          key={index}
          href={tech.url}
          target="_blank"
          rel="noopener noreferrer"
          className="icone-item"
          title={tech.nome}
          style={{ "--cor-original": tech.cor } as React.CSSProperties}>
          <Icon as={tech.icone} size={80} color={CORES.CINZA} />
        </a>
      ))}
    </div>
  );

  return (
    <div className="container">
      <div>
        <p className="titulo">Tecnologias</p>
        <div className="sublinhado">
          <Sublinhado />
        </div>
      </div>

      <div className="square">
        <p>
          Isso inclui, mas não se limita a, as tecnologias que utilizo para
          construir aplicações do lado do cliente.
        </p>
        {renderStack(frontEndStack)}
      </div>

      <div className="square">
        <p>
          No universo mobile, foco em performance e automação, cuidando desde a
          navegação complexa até a publicação automatizada nas lojas.
        </p>
        {renderStack(mobileStack)}
      </div>

      <div className="square">
        <p>Outras... e muito mais</p>
        {renderStack(outrosStack)}
      </div>

      <div>
        <p className="titulo">Meus Projetos</p>
        <div className="sublinhado">
          <Sublinhado />
        </div>
      </div>

      <div className="projetos">
        {meusProjetos.map((projeto, index) => (
          <Projeto
            key={index}
            titulo={projeto.titulo}
            descricao={projeto.descricao}
            uri_image={projeto.uri_image}
            acao={() => handleNavigate(projeto.url)}
          />
        ))}
      </div>
    </div>
  );
};

export { Tecnologias };
