
import React, { Component } from "react";
import Display from './Display';
import Botoes from "./Botoes";
import FormPassos from "./PassosForm";

class Contador extends Component {

    state = {
        numero: this.props.numeroInicial || 0,// busca a propriedade por um class
        passo: this.props.passoInicial || 5
    }


    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo,
        });
    }

    dec = () =>  {
        this.setState({
            numero: this.state.numero - this.state.passo,
        });
    }

    getValue = (evt) =>{
        this.setState({
            passo: +evt.target.value
        })
    }

    render = () => {
        return (
            <div>
                <h2>Contador</h2>
                <Display numero={this.state.numero}/>
                <FormPassos pegaValor={this.getValue} setPasso={this.state.passo}/>
                <Botoes incrementar={this.inc} decrementar={this.dec}/>
            </div>
        );
    }
}

export default Contador;