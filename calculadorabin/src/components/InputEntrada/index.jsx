import "./InputEntrada.css";

const InputEntrada = (props) => {
    
    const aoDigitado = (evento) => {
    
    props.aoAlterado(props.valorEntrada);

  };

  return (
    <section className="w-full bg-red-800 h-1/2 p-6">
      <input
        type="text"
        className="w-full h-full bg-transparent text-center text-4xl text-white"
        placeholder="Digite um numero"
        id="infoEntrada"
      />
      <button className="bg-lime-300 p-5" onClick={aoDigitado}>
        Converter
      </button>
    </section>
  );
};

export default InputEntrada;
