import "./TesteUseState.css";
import { useState } from "react";

const PreencheClick = () => {

  const [count, setCount] = useState(0);

  function adicionarCount() {
    setCount(count + 1);
  }

  return (
    <div className="box-tutorial">
    <p>Botão para adicionar um numero co contador</p>
    <p>Você clicou {count} vezes</p>
    <button onClick={adicionarCount}>Clique aqui</button>
  </div>
  );
};

export default PreencheClick;
