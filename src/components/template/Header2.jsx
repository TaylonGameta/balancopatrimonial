import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import firebase from 'firebase'
import $ from 'jquery';

let nome = null
let url = null

export default class Header extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount() {
        
            firebase.auth().onAuthStateChanged(usuario =>{
                if(usuario){
                    nome = firebase.auth().currentUser.displayName
                    url = firebase.auth().currentUser.photoURL
                }
            })
    
    }
    sair(){
        firebase.auth().signOut().then(()=>{
            
        })
    }

    render(){
        
        return(
            
            <nav className="navbar navbar-expand-lg mb-5">
            <Link className="ml-5 navbar-brand" Link to={this.props.link}>Balanço Patrimonial</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">

                <div className="mr-5 navbar-collapse collapse w-100 order-3 dual-collapse2" id="navbarNavDropdown" >
                    <ul className="mr-5 navbar-nav ml-auto">
                    <li class="mr-5 nav-item-right dropdown">
                                <img src={url} class="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                
                                </img>
                                    <div className="mr-5 dropdown-menu" aria-labelledby="navbarDropdown">
                                        <button className='btn btn-default'>{nome}</button>
                                        
                                        <button className='btn btn-default' onClick={this.sair}>Sair</button>
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

