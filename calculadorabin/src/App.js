import React, { useState } from "react";
import './App.css';
import InputEntrada from './components/InputEntrada';
import InputSaida from './components/InputSaida';

function App() {

  const [valor, setValor] = useState("");

  console.log("APP.js -- " + valor);

  return (
    <div className="App h-screen w-full flex justify-center items-center">
      <section className="w-2/4 bg-red-300 h-4/5 shadow-2xl rounded-3xl overflow-hidden">
        <InputEntrada valorEntrada={valor} aoAlterado={(valor => setValor(valor))}/>
        <InputSaida valorSaida={valor}/>
      </section>
    </div>
  );
}

export default App;
