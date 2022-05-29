import { useState } from "react";

export default function FormMultiple() {

    const [inputs, setInputs] = useState({})

    const handleChange = (event) => {
        const inputName = event.target.name
        const inputValue = event.target.value

        setInputs(
            (values) => (console.log(values),
            {
                ...values, [inputName]: inputName
            })
        )


    }

    const handleSubmit = (event) => {
        event.preventDefault()

        alert(JSON.stringify(inputs))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>formulário</h3>
                <input
                    type="text"
                    name='username'
                    value={inputs.username || ""}
                    placeholder="username"
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name='age'
                    value={inputs.age || ""}
                    placeholder="idade"
                    onChange={handleChange}
                />
                <textarea
                    type="description"
                    cols="30"
                    rows="10"
                    onChange={handleChange}
                    placeholder="descrição">
                </textarea>
                <input type="submit" name="submit" value="Enviar" />
            </form>
            <p>nome:{inputs.username}</p>
            <p>descrição:{inputs.description}</p>
            <p>Idade:{inputs.age}</p>
        </div>
    )
}