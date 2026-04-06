import "./styles/index.css";

interface IProjeto {
  uri_image: string;
  titulo: string;
  descricao: string;
  acao?: () => void;
}

const Projeto: React.FC<IProjeto> = ({
  uri_image,
  titulo,
  descricao,
  acao,
}) => {
  return (
    <div className="projeto-card" onClick={acao}>
      <img
        src={uri_image}
        alt={`Capa do projeto ${titulo}`}
        className="projeto-imagem"
      />
      <div className="projeto-infos-overlay">
        <h3 className="projeto-titulo">{titulo}</h3>
        <p className="projeto-descricao">{descricao}</p>
      </div>
    </div>
  );
};

export { Projeto };
