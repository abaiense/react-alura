import "./TesteUseState.css";
import BotaoAlterarNome from "./BotaoAlterarNome";
import PreencheClick from "./PreencheClick";
import PreencheOnChange from "./PreencheOnChange";
import Count from "./Count";
import ArrayState from "./ArrayState";

function TesteUseState() {

  return (
    <div>
        <BotaoAlterarNome text={'Clique para alterar o nome'} />
        <PreencheClick />
        <PreencheOnChange />
        <Count />
        <ArrayState />
    </div>
  );
}

export default TesteUseState;
