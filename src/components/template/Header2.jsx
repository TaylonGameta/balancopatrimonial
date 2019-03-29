import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import firebase from 'firebase'
import $ from 'jquery'
import { Redirect } from 'react-router-dom'



export default class Header extends React.Component{

    constructor(props){
        super(props)
        this.state = {nome : null, url : null, redirect : false}
        this.redirecionar = this.redirecionar.bind(this)
    }
    
    
    componentDidMount() {
        
            firebase.auth().onAuthStateChanged(usuario =>{
                if(usuario){
                    this.setState({nome : firebase.auth().currentUser.displayName})
                    this.setState({url : firebase.auth().currentUser.photoURL})
                    
                }
            })
    
    }
    redirecionar(){
        this.setState({redirect : true})
        if(this.state.redirect){
            return <Redirect to='/login' />  
        }
        
    }
    sair(){
        
        
        
    }

    render(){
        
        return(
            
            <nav className="navbar navbar-expand-lg">
            <Link className="navbar-brand" Link to='/dashboard'>Balanço Patrimonial</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">

                <div className="mr-5 navbar-collapse collapse w-100 order-3 dual-collapse2" id="navbarNavDropdown" >
                    <ul className="mr-5 navbar-nav ml-auto">
                    <li className="mr-5 nav-item-right dropdown">
                                <img src={this.state.url} class="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                
                                </img>
                                    <div className="mr-5 dropdown-menu" aria-labelledby="navbarDropdown">
                                        <button className='btn btn-default'>{this.state.nome}</button>
                                        
                                        
                                    </div>
                            </li>
                        <li className="nav-item">
                        
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
        )
    }
}

