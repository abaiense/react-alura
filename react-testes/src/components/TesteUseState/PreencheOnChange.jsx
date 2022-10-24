import "./TesteUseState.css";
import { useState } from "react";

const PreencheClick = () => {
  const [nome, setNome] = useState("Preencha o campo");

  return (
    <div className="box-tutorial">
      <p>Alterar o nome ao Digitar</p>
      <h1>{nome}</h1>
      <input
        type="text"
        placeholder="digite seu nome"
        onChange={(e) => setNome(e.target.value)}
      />
    </div>
  );
};

export default PreencheClick;
