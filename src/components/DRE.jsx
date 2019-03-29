import React from 'react'
import Header from './template/Header2'

import firebase from 'firebase'
import "./Dash.css"
import {Link} from 'react-router-dom'
import Botao from './template/Botao'


export default class DRE extends React.Component{
    constructor(props){
        super(props)
        this.state = {rob : null, vc : null, desc : null, rol : null,
        cmv : null, lb : null, dv : null, da : null, lo : null, df : null, llair : null, ir : null, lldir : null}

        this.mudar = this.mudar.bind(this);
        this.mudar2 = this.mudar2.bind(this);
        this.mudar3 = this.mudar3.bind(this);
        this.mudar4 = this.mudar4.bind(this);
        this.mudar5 = this.mudar5.bind(this);
        this.mudar6 = this.mudar6.bind(this);
        this.mudar7 = this.mudar7.bind(this);
        this.mudar8 = this.mudar8.bind(this);
    }
    

    mudar(e){
        this.setState({rob : e.target.value})
        
    }
    mudar2(e){
        this.setState({vc : e.target.value})
        
    }
    mudar3(e){
        this.setState({desc : e.target.value})
        
    }
    mudar4(e){
        this.setState({cmv : e.target.value})
        
    }
    mudar5(e){
        this.setState({dv : e.target.value})
        
    }
    mudar6(e){
        this.setState({da : e.target.value})
        
    }
    mudar7(e){
        this.setState({df : e.target.value})
        
    }
    mudar8(e){
        this.setState({ir : e.target.value})
        
    }

    render(){
        const rol = this.state.rob - this.state.vc - this.state.desc
        const lb = rol - this.state.cmv
        const lo = lb - this.state.dv - this.state.da
        const llair = lo - this.state.df
        const total = llair - this.state.ir

        return(
            <React.Fragment>
                <Header></Header>
                <div className="da container">
                <Botao tipo="DRE"></Botao>
                    
                    <div className="row mt-3">
                        
                        <div className="form col-lg-6">
                        
                            <div className="form-group">
                                <label>Receita Operacional Bruta:</label>
                                <input name="rob" type="number" className="form-control" onChange={e =>this.mudar(e)} value={this.state.rob}/>
                            </div>
                            <hr></hr>
                            <div className="form-group">
                                <label>Vendas Canceladas:</label>
                                <input type="number" className="form-control" onChange={e => this.mudar2(e)}/>
                            </div>
                            <div className="form-group">
                                <label>Descontos:</label>
                                <input type="number" className="form-control" onChange={e => this.mudar3(e)}/>
                            </div>
                            <div className="form-group mt-5">
                                <label>Receita Operacional Líquida:</label>
                                <input type="number" className="form-control blue" value={rol}/>
                            </div>
                            <hr></hr>
                            <div className="form-group">
                                <label>CMV:</label>
                                <input type="number" className="form-control" onChange={e => this.mudar4(e)}/>
                            </div>
                            <div className="form-group mt-5">
                                <label>Lucro Bruto:</label>
                                <input type="number" className="form-control blue" value={lb}/>
                            </div>
                            <hr></hr>
                            <div className="form-group">
                                <label>Despesas de vendas:</label>
                                <input type="number" className="form-control" onChange={e => this.mudar5(e)}/>
                            </div>
                            <div className="form-group">
                                <label>Despesas Administrativas:</label>
                                <input type="number" className="form-control" onChange={e => this.mudar6(e)}/>
                            </div>
                            <div className="form-group mt-5">
                                <label>Lucro Operacional:</label>
                                <input type="number" className="form-control blue" value={lo}/>
                            </div>
                            <hr></hr>
                            <div className="form-group">
                                <label>Despesas Financeiras:</label>
                                <input type="number" className="form-control" onChange={e => this.mudar7(e)}/>
                            </div>
                            <div className="form-group mt-5">
                                <label>Lucro Líquido Antes do IR:</label>
                                <input type="number" className="form-control blue" value={llair}/>
                            </div>
                            <hr></hr>
                            <div className="form-group">
                                <label>IR:</label>
                                <input type="number" className="form-control" onChange={e => this.mudar8(e)}/>
                            </div>
                            <hr></hr>
                            <div className="form-group">
                                <label>Total:</label>
                                <input type="number" className="form-control blue" value={total}/>
                            </div>
                        </div>
                        <div className="col-lg-3"></div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}