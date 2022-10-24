import "./TesteUseState.css";
import { useState } from "react";

const BotaoAlterarNome = (props) => {

  const [nome, setNome] = useState(props.text);

  function altNomeClick(){
    setNome("Antonio Garcia")
  }

  return (
    <>
      <div className="box-tutorial">
        <p>Botão para colocar só alterar o nome ao clicar</p>
        <h1>{nome}</h1>
        <button onClick={altNomeClick}>Alterar Nome</button>
      </div>
    </>
  );
};

export default BotaoAlterarNome;
