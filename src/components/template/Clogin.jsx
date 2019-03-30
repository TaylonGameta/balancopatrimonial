import React, {Component} from 'react'
import './Clogin.css'

import * as firebase from 'firebase'
import { Redirect } from 'react-router-dom'


export default class Login extends Component{

    constructor(props){
        super(props)
        this.state = {user : '', email : '', senha : ''}
        this.verificar = this.verificar.bind(this);
        this.loginGoogle = this.loginGoogle.bind(this);
        this.mudarSenha = this.mudarSenha.bind(this);
        this.mudarEmail = this.mudarEmail.bind(this);
        this.login = this.login.bind(this);
    }
    mudarSenha(e){
        this.setState({senha : e.target.value})
    }
    mudarEmail(e){
        this.setState({email : e.target.value})
    }
    login(){
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha).then(usuario =>{
            if(usuario) window.location.hash = "#/dashboard"
        })
    }

    verificar(){
        firebase.auth().onAuthStateChanged(usuario=>{
            if(usuario){
                return 1
            }
        }) 
    }

    loginGoogle(){
        var provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithPopup(provider).then(resposta=>{
            console.log(resposta)
            window.location.hash = "#/dashboard"
        }).catch(erro =>{
            document.getElementById("erro").innerHTML = "Alguma coisa falhou"
            
        })
        
    }
    loginFacebook(){
        var provider = new firebase.auth.FacebookAuthProvider()
        firebase.auth().signInWithPopup(provider).then(resposta=>{
            console.log(resposta)
           
        }).catch(erro =>{
            document.getElementById("erro").innerHTML = "Alguma coisa falhou"
           
        })
        
    }
   
    routeChange(){
        window.location.hash = "#/registrar"
    }
    sair(){
        firebase.auth().signOut().then(()=>{
            
        })
    }
    render(){
        document.body.style = 'background: #f5f5f5;';
        return (
            <div className="container">
                <div className="row">
                <div className="col-sm-4 "></div>
                    <div className="campo col-sm-12 col-lg-4 ">
                        <div className="form">
                            <div className="form-group">
                                <label>Email:</label>
                                <input className="form-control" onChange={e =>this.mudarEmail(e)}></input>
                            </div>
                            <div className="form-group">
                                <label>Senha:</label>
                                <input className="form-control" type="password" onChange={e =>this.mudarSenha(e)}></input>
                            </div>
                            <p id= 'erro'></p>
                            <button onClick={this.login} className="btn btn-success">Login</button>
                        </div>
                        <div className="footer mt-2">
                            <hr></hr>
                            <p>Logar com:</p>
                            <button onClick={this.loginGoogle} className="btn btn-light"><i className="fa fa-google"></i></button>
                            <button onClick={this.loginFacebook}className="btn btn-primary"><i className="fa fa-facebook"></i></button>
                            <hr></hr>
                            <p>2019 (c) Taylon Sopeletto</p>
                            
                            
                            <h3>{this.state.user}</h3>
                            
                        </div> 
                    </div> 
                    <div className="col-sm-4 "></div>    
                </div>
            </div>
            
        )
    }
}