import React from 'react'
import Header from './template/Header2'

import firebase from 'firebase'
import "./Dash.css"
import {Link} from 'react-router-dom'


export default class DRE extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Header></Header>
                <div className="da container">
                <h1 id="nome">DRE</h1>
                    <hr></hr>
                    <hr></hr>
                    <button className="btn btn-success  mr-3" onClick={this.carregar}><i className="fa fa-plus-circle"></i><Link Link to="/add"> Adicionar</Link></button>
                    <button className="btn btn-info  mr-3" onClick={this.carregar}><i className="fas fa-redo"></i><Link Link to="/alterar"> Alterar</Link></button>
                    <button className="btn btn-danger mr-3" onClick={this.pegarNome}><i className="fa fa-trash"></i><Link Link to="/excluir"> Excluir</Link></button>
                    <button className="btn btn-info" ><i className="fas fa-redo"></i><Link Link to="/dre"> DRE</Link></button>
                    
                    <div className="row mt-3">
                        
                        <div className="col-lg-6">
                        
                            <div className="form-group">
                                <label>Receita Operacional Bruta:</label>
                                <input type="number" className="form-control"/>
                            </div>
                            <hr></hr>
                            <div className="form-group">
                                <label>Vendas Canceladas:</label>
                                <input type="number" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Descontos:</label>
                                <input type="number" className="form-control"/>
                            </div>
                            <div className="form-group mt-5">
                                <label>Receita Operacional Líquida:</label>
                                <input type="number" className="form-control"/>
                            </div>
                            <hr></hr>
                            <div className="form-group">
                                <label>CMV:</label>
                                <input type="number" className="form-control"/>
                            </div>
                            <div className="form-group mt-5">
                                <label>Lucro Bruto:</label>
                                <input type="number" className="form-control"/>
                            </div>
                            <hr></hr>
                            <div className="form-group">
                                <label>Despesas de vendas:</label>
                                <input type="number" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Despesas Administrativas:</label>
                                <input type="number" className="form-control"/>
                            </div>
                            <div className="form-group mt-5">
                                <label>Lucro Operacional:</label>
                                <input type="number" className="form-control"/>
                            </div>
                            <hr></hr>
                            <div className="form-group">
                                <label>Despesas Financeiras:</label>
                                <input type="number" className="form-control"/>
                            </div>
                        </div>
                        <div className="col-lg-3"></div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}