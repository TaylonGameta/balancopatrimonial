import React, {Component} from 'react'
import './Clogin.css'

export default class Login extends Component{
    render(){
        return (
            <div className="container">
                <div className="row">
                <div className="col-sm-4 "></div>
                    <div className="campo col-sm-12 col-lg-4 ">
                        <form className="form">
                        <div className="form-group">
                                <label>Nome:</label>
                                <input className="form-control"></input>
                            </div>
                            <div className="form-group">
                                <label>Email:</label>
                                <input className="form-control"></input>
                            </div>
                            <div className="form-group">
                                <label>Senha:</label>
                                <input className="form-control" type="password"></input>
                            </div>
                            <button className="btn btn-primary">Registrar</button>
                        </form>
                        <div className="footer mt-2">
                           
                            <hr></hr>
                            <p>2019 (c) Taylon Sopeletto</p>
                        </div> 
                    </div> 
                    <div className="col-sm-4 "></div>    
                </div>
            </div>
            
        )
    }
}