import './Botao.css'
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
                    
                    <div className="botao">
                        
                        <button className="btn btn-success  mr-3" onClick={this.adicionar}>Adicionar</button>
                        <button className="btn btn-info  mr-3" onClick={this.alterar}>Alterar</button>
                        <button className="btn btn-danger mr-3" onClick={this.excluir}>Excluir</button>
                        <button className="btn btn-info" onClick={this.DRE} ><i className="fas fa-redo"></i>DRE</button>
                        
                    </div>
                    
                   
             </React.Fragment>
        )
    }
}