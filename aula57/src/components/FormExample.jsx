import React from "react";

export default class FormExample extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            email:''
        }

        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)


    }

   

    handleSubmit(event){

        event.preventDefault();

        alert(this.state.email);

    }

    handleSubmitChange(event){
        return this.setState({
            email: event.target.value 

        })
    }

    render(){
        return(
            <div>
                <h2>exemplo de formulário</h2>
                <form onSubmit={()=>this.handleSubmit}>
                    <input type="text" placeholder="email" onChange={()=> this.handleInputChange()}/>
                    <button>enviar</button>
                </form>
                <h2>Email:{this.name.email}</h2>
            </div>
        )
    }
}