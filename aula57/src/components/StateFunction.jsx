import React, {setState, useState} from "react";

export default function StateFunction (){
    const [numero, setNumero] = useState(10)

    numero = numero + 100

    return(
        <div>
            <h2>componente de função</h2>
            <h3>número atual:{numero}</h3>
            <button onClick={()=> setNumero(numero + 100)}>somar 100</button>
        </div>
    )
}