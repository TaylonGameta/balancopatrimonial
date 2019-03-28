import '../Dash.css'
import React from 'react'
import {Link} from 'react-router-dom'

export default class Botao extends React.Component{
    constructor(props){
        super(props)

    }
    DRE(){
        window.location.hash = "#/dre"
    }
    alterar(){
        window.location.hash = "#/alterar"
    }
    adicionar(){
        window.location.hash = "#/add"
    }
    excluir(){
        window.location.hash = "#/excluir"
    }

    render(){
        return(
            <React.Fragment>
                <h1 id="nome">{this.props.tipo}</h1>
                    <hr></hr>
                    <button className="btn btn-success  mr-3" onClick={this.adicionar}><i className="fa fa-plus-circle"></i> Adicionar</button>
                    <button className="btn btn-info  mr-3" onClick={this.alterar}><i className="fas fa-redo"></i>Alterar</button>
                    <button className="btn btn-danger mr-3" onClick={this.excluir}><i className="fa fa-trash"></i> Excluir</button>
                    <button className="btn btn-info" onClick={this.DRE} ><i className="fas fa-redo"></i>DRE</button>
                    <hr></hr>
            </React.Fragment>
        )
    }
}