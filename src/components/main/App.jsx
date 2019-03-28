import React from 'react'
import './App.css'
import {HashRouter} from 'react-router-dom'
import Router from './Routes'
import "bootstrap/dist/css/bootstrap.min.css"
import "font-awesome/css/font-awesome.min.css"
import * as firebase from 'firebase'
import Config from './config'



export default class App extends React.Component{
    constructor(){
        super()
            firebase.initializeApp(Config.config);
    }
    componentDidMount(){
        
    }
    render(){
        document.body.style = 'background: #f5f5f5;'
        return(
            <HashRouter>
                <Router></Router>
            </HashRouter>
        )
    }
}


    
    
    
    
    