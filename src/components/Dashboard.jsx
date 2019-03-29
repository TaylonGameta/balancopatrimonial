import React from 'react'
import Header from './template/Header2'
import Dash from './template/Dash'
import firebase from 'firebase'
import "./Dash.css"
import {Link} from 'react-router-dom'
import Botao from './template/Botao'



export default class Dashboard extends React.Component{

    

    
    constructor(props){
        super(props)
        this.carregar = this.carregar.bind(this);
        this.handleChange = this.handleChange.bind(this);
        
        this.state = {ativosC : [], passivosC : [], ativosNC : [], passivosNC : [], patrimonioL : []}

        
        
    }

    

    handleChange(event) {
        
    }
    carregar(){
        
    }
    componentDidMount() {
        
        firebase.auth().onAuthStateChanged(usuario=>{
            if(usuario){
                
                firebase.database().ref("users/" + firebase.auth().currentUser.uid + "/ativoCirculante").on('child_added', snapshot =>{
                    const lista = this.state.ativosC
                    lista.push({chave : snapshot.key, valor : snapshot.val()})
                    this.setState({
                        ativosC :  lista
                    })
                })
                
                firebase.database().ref("users/" + firebase.auth().currentUser.uid + "/passivoCirculante").on('child_added', snapshot =>{
                    const lista = this.state.passivosC
                    lista.push({chave : snapshot.key, valor : snapshot.val()})
                    this.setState({
                        passivosC :  lista
                    })
                })
                

                
                firebase.database().ref("users/" + firebase.auth().currentUser.uid + "/passivoNC").on('child_added', snapshot =>{
                    const lista = this.state.passivosNC
                    lista.push({chave : snapshot.key, valor : snapshot.val()})
                    this.setState({
                        passivosNC :  lista
                    })
                })


                
                firebase.database().ref("users/" + firebase.auth().currentUser.uid + "/ativoNC").on('child_added', snapshot =>{
                    const lista = this.state.ativosNC
                    lista.push({chave : snapshot.key, valor : snapshot.val()})
                    this.setState({
                        ativosNC :  lista
                    })
                })


                firebase.database().ref("users/" + firebase.auth().currentUser.uid + "/patrimonioL").on('child_added', snapshot =>{
                    const lista = this.state.patrimonioL
                    lista.push({chave : snapshot.key, valor : snapshot.val()})
                    this.setState({
                        patrimonioL :  lista
                    })
                })
                
                
            }else{
                window.location.hash = "#/login"
            }
        })
        
        
        
    }
    
    render(){
        
        const nome = "valor"
        const totalPC = this.state.passivosC.map(a=>a.valor.valor).reduce((a,b)=>a+b, 0)
        const totalAC = this.state.ativosC.map(a=>a.valor.valor).reduce((a,b)=>a+b, 0)
        const totalpNC = this.state.passivosNC.map(a=>a.valor.valor).reduce((a,b)=>a+b, 0)
        const totalaNC = this.state.ativosNC.map(a=>a.valor.valor).reduce((a,b)=>a+b, 0)
        const totalPL = this.state.patrimonioL.map(a=>a.valor.valor).reduce((a,b)=>a+b, 0)

        const totalA = totalAC + totalaNC;
        const totalP = totalPC + totalpNC;
        

        const Items = this.state.passivosC.map(valor =>
            <React.Fragment>
                <li className="list-group-item list-group-item-action">{`${valor.valor.nome} : ${valor.valor.valor.toFixed(2)} R$`}</li>
            </React.Fragment>        
        )

        const Items2 = this.state.ativosC.map(valor =>{
            return(
                    <React.Fragment>
                        <li className="list-group-item list-group-item-action">{`${valor.valor.nome} : ${valor.valor.valor.toFixed(2)} R$` }</li>
                    </React.Fragment>    
                 )    
        })
        const Items3 = this.state.passivosNC.map(valor =>{
            return(
                    <React.Fragment>
                        <li className="list-group-item list-group-item-action">{`${valor.valor.nome} : ${valor.valor.valor.toFixed(2)} R$` }</li>
                    </React.Fragment>    
                 )    
        })
        const Items4 = this.state.ativosNC.map(valor =>{
            return(
                    <React.Fragment>
                        <li className="list-group-item list-group-item-action">{`${valor.valor.nome} : ${valor.valor.valor.toFixed(2)} R$` }</li>
                    </React.Fragment>    
                 )    
        })
        const Items5 = this.state.patrimonioL.map(valor =>{
            return(
                    <React.Fragment>
                        <li className="list-group-item list-group-item-action">{`${valor.valor.nome} : ${valor.valor.valor.toFixed(2)} R$` }</li>
                    </React.Fragment>    
                 )    
        })

        
        return(
            <React.Fragment>
                <Header></Header>
                <div className="da">
                    
                    <div className="container">
                        <Botao tipo="Dashboard"></Botao>
                    
                        <div className="row mt-5">
                            <div className="col-sm-12 col-md-6 col-lg-6 ">
                                <h5>Passivos Circulantes</h5>
                                <ul className="mt-3 list-group"> {Items} </ul>
                                <h5 className="mt-2">Total: {totalPC.toFixed(2)} R$</h5>
                                <hr></hr>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-sm-12 col-md-6 col-lg-6 ">
                                <h5>Ativos Circulantes</h5>
                                <ul className="mt-3 list-group"> {Items2}</ul>
                                <h5 className="mt-2">Total: {totalAC.toFixed(2)} R$</h5>
                                <hr></hr>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <h5>Passivos Não Circulantes</h5>
                                <ul className="mt-3 list-group"> {Items3}</ul>
                                <h5 className="mt-2">Total: {totalpNC.toFixed(2)} R$</h5>
                                <hr></hr>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <h5>Ativos Não Circulantes</h5>
                                <ul className="mt-3 list-group"> {Items4}</ul>
                                <h5 className="mt-2">Total: {totalaNC.toFixed(2)} R$</h5>
                                <hr></hr>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <h5>Patrimonio Líquido</h5>
                                <ul className="mt-3 list-group"> {Items5}</ul>
                                <h5 className="mt-2">Total: {totalPL.toFixed(2)} R$</h5>
                                <hr></hr>
                            </div>
                        </div>
                        
                        <div className="row mt-5">
                            <h5>Total Passivo: {totalP.toFixed(2)} R$</h5>
                            
                        </div>
                        <div className="row">
                            <h5>Total Ativo: {totalA.toFixed(2)} R$</h5>
                        </div>
                    </div>
                    
                    
                </div>
            </React.Fragment>
        )
        
    }
}