import React, {Component} from 'react'
import './Clogin.css'
import firebase from 'firebase'
export default class Login extends Component{

    constructor(props){
        super(props)
        this.state = {email : '', senha : ''}
        this.mudarSenha = this.mudarSenha.bind(this)
        this.mudarEmail = this.mudarEmail.bind(this)
        this.registrar = this.registrar.bind(this)
    }

    mudarSenha(e){
        this.setState({senha : e.target.value})
    }
    mudarEmail(e){
        this.setState({email : e.target.value})
    }
    registrar(){
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha).then(usuario =>{
            if(usuario) window.location.hash = "#/dashboard"
        })
    }
    render(){
        return (
            <div className="container">
                <div className="row">
                <div className="col-sm-4 "></div>
                    <div className="campo col-sm-12 col-lg-4 ">
                        <div className="form">
                        <div className="form-group">
                                <label>Nome:</label>
                                <input className="form-control"></input>
                            </div>
                            <div className="form-group">
                                <label>Email:</label>
                                <input className="form-control" onChange={e =>this.mudarEmail(e)}></input>
                            </div>
                            <div className="form-group">
                                <label>Senha:</label>
                                <input className="form-control" type="password" onChange={e => this.mudarSenha(e)}></input>
                            </div>
                            <button onClick={this.registrar} className="btn btn-primary">Registrar</button>
                        </div>
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