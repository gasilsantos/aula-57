import {useState} from "react";

export default function StatProps(props){

    const [cor, setCor] = useState("azul")

    return(
        <div>
            <h2>Componente de função com props</h2>
            <h3>Minha cor favorita: {cor}</h3>
            <button onClick={()=> setCor(props.cor)}>minha cor favorita</button>
        </div>
    )
}