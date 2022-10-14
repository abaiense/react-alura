import {useState} from 'react'
import './CampoTexto.css'

const CampoTexto = (props) => {
    
    const placeholderModificada = `${props.placeholder}...`

    const [valor, setValor] = useState('Guilherme Silveira')

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
        console.log(valor);
    }
    
    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input onChange={aoDigitado} value={props.valor}  required={props.obrigatorio} type="text" placeholder={placeholderModificada}/>
        </div>
    );
}

export default CampoTexto