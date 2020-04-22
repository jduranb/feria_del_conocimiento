import React from 'react';

export class Calculadora extends React.Component {

    constructor(props) {
        super(props);
        this.state = { valor1: [], valor2: [], operacion: [], resultado: [] };
        this.valor1change = this.valor1change.bind(this);
        this.valor2change = this.valor2change.bind(this);
        this.operacionchange = this.operacionchange.bind(this);
        this.realizarOperar = this.realizarOperar.bind(this);
    }

    valor1change(e) {
        this.setState({ valor1: e.target.value });
    }

    valor2change(e) {
        this.setState({ valor2: e.target.value });
    }

    operacionchange(e) {
        this.setState({ operacion: e.target.value });
    }
    realizarOperar() {
        let operacion = this.state.operacion;
        switch (operacion) {
            case 'sumar':
                this.setState({ resultado: (parseFloat(this.state.valor1) + parseFloat(this.state.valor2)) });
                break;
            case 'restar':
                this.setState({ resultado: (parseFloat(this.state.valor1) - parseFloat(this.state.valor2)) });
                break;
            case 'multiplicar':
                this.setState({ resultado: (parseFloat(this.state.valor1) * parseFloat(this.state.valor2)) });
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <div className="footer">
                <p>ESTE ES UN COMPONENTE</p>
                valor 1 <input type="number" onChange={this.valor1change} value={this.state.valor1} />
                valor 2 <input type="number" onChange={this.valor2change} value={this.state.valor2} />
                <select onChange={this.operacionchange}>
                    <option ></option>
                    <option >sumar</option>
                    <option >restar</option>
                    <option >multiplicar</option>
                </select>
                <button onClick={this.realizarOperar}>operar</button>
                <br />
                <p>
                    el valor 1 es : {this.state.valor1}
                    <br />
                    el valor 2 es : {this.state.valor2}
                </p>
                Resultado : {this.state.resultado}
            </div>
        )
    }
}