import { Badge } from "@src/components/Badge";
import "./styles/index.css";
import { Icon } from "@src/components/Icon";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Importando os ícones
import minhaFoto from "@src/assets/foto_gianluca.png";

const SobreMim = () => {
  const handleNavigate = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <div id="container-sobre-mim">
        <div id="redes-sociais">
          <a
            onClick={() =>
              handleNavigate("https://github.com/gianluca-sampogna")
            }
            className="social-link"
            style={{ "--cor-original": "#181717" } as React.CSSProperties}
            title="GitHub">
            <Icon as={FaGithub} size={45} color="var(--cinza)" />
          </a>
          <a
            onClick={() =>
              handleNavigate(
                "https://www.linkedin.com/in/gianluca-sampogna-11628a279/",
              )
            }
            className="social-link"
            style={{ "--cor-original": "#0077B5" } as React.CSSProperties}
            title="LinkedIn">
            <Icon as={FaLinkedin} size={45} color="var(--cinza)" />
          </a>{" "}
        </div>
        <div id="quem-sou">
          <div id="badge">
            <Badge text="Sou eu" />
          </div>
          <p className="nome">Gianluca</p>
          <p className="nome">Scalzi</p>
          <p className="nome">Sampogna</p>
          <div id="stacks">
            <p className="txt-stack">Desenvolvedor mobile</p>
            <p className="txt-stack">Desenvolvedor front-end</p>
          </div>
          <div id="falando-sobre-mim">
            <p id="txt-falando-sobre-mim">
              Desenvolvedor de software do Espirito Santo, Brasil, com
              experiência em desenvolvimento de Apicativos até sua publicação e
              construção de páginas web sólidas.
            </p>
          </div>
          <div id="fale-comigo">
            <div id="btn-fale-cmg">
              <div id="btn-fale-cmg-interno">
                <p>Fale Comigo</p>
              </div>
            </div>
          </div>
        </div>
        <div id="imagem">
          <img
            src={minhaFoto}
            alt="Foto de Gianluca Scalzi Sampogna"
            className="foto-perfil"
          />
        </div>
      </div>
      <div id="overview-sobre-mim">
        <p id="titulo">Sobre mim</p>
        <div id="texto-sobre-mim">
          <p id="texto">
            Sou um engenheiro de software focado em entregar soluções mobile de
            alta performance e com sólida experiência no ecossistema de
            tecnologia. Como profissional e como pessoa, possuo uma forte
            disciplina para aprender novas ferramentas, refinar meus processos e
            evoluir constantemente. Minha carreira é marcada pela busca da
            excelência técnica, com especialidade no desenvolvimento mobile
            utilizando React Native. Tenho trabalhado ativamente na criação de
            aplicativos escaláveis, desde a concepção e arquitetura até a
            automação de deploys e publicação em lojas. Sou movido pelo desafio
            de resolver problemas complexos e comprometido em elevar o nível de
            experiência do usuário em cada linha de código.
          </p>
        </div>
      </div>
    </>
  );
};

export { SobreMim };
