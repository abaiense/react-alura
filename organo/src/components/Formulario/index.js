import "./Formulario.css";
import CampoTexto from '../CampoTexto'
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";

const Formulario = () => {

  const times = [
    'Programação',
    'Front-end',
    'Data Science',
    'Devops',
    'UX  e Design',
    'Mobila',
    'Inovação e Gestão'
  ]

  const aoSalvar = (event) => {
    event.preventDefault();
    console.log("o Form foi sumetido")
  }

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
        <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
        <CampoTexto label="Imagem" placeholder="Digite o endereco da imagem" />
        <ListaSuspensa obrigatorio={true} label="Times" itens={times}/>
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
