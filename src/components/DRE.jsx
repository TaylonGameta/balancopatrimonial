import React from 'react'
import Header from './template/Header2'

import firebase from 'firebase'
import "./Dash.css"
import {Link} from 'react-router-dom'
import Botao from './template/Botao'


export default class DRE extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Header></Header>
                <div className="da container">
                <Botao tipo="DRE"></Botao>
                    
                    <div className="row mt-3">
                        
                        <div className="form col-lg-6">
                        
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