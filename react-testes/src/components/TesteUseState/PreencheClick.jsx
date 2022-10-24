import "./TesteUseState.css";
import { useState } from "react";

const PreencheClick = () => {

  const [nome, setNome] = useState("Preencha e Clique para alterar");

  function preencherValor() {
    let nomeDigitado = document.querySelector("#nome");
    setNome(nomeDigitado.value);
  }

  return (
    <div className="box-tutorial">
      <p>Alterar o nome ao Digitar e clicar no botao</p>
      <h1>{nome}</h1>
      <input type="text" placeholder="digite seu nome" id="nome" />
      <button onClick={preencherValor}>Clicar</button>
    </div>
  );
};

export default PreencheClick;
