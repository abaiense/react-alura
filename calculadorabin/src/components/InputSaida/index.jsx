import "./InputSaida.css";

const InputSaida = (props) => {

console.log("teste: " + props.valorSaida)

  return (
    <section className="w-full bg-red-600 h-1/2">
      <span
        type="text"
        className="w-full h-full bg-transparent text-center text-4xl text-white"
      >
      {props.valorSaida}
      </span>
    </section>
  );
};

export default InputSaida;
