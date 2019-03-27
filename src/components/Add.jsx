import React from 'react'
import Header from './template/Header2'
import Dash from './template/Dash'
import firebase from 'firebase'
import "./Dash.css"
import Select from 'react-select'
import {Link} from 'react-router-dom'

const items = [{chave : '', valor : {nome : '', valor : ''}}]

const options = [
    { value: 'ativoCirculante',label: 'Ativo Circulante'},
    { value: 'passivoCirculante',label: 'Passivo Circulante'},
    { value: 'ativoNC',label: 'Ativo não Circulante'},
    { value: 'passivoNC',label: 'Passivo não Circulante'},
    { value : 'patrimonioL', label : 'Patrimonio Líquido'}
  ];

  

export default class Dashboard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            tipo : null,
            nome : null,
            valor : null
        }
        this.salvar = this.salvar.bind(this);
       
    }

    salvar(){
        console.log(this.state.nome)
        console.log(this.state.valor)
        firebase.auth().onAuthStateChanged(usuario =>{
            if(usuario){
                if(this.state.nome && this.state.valor && this.state.tipo != null){
                    firebase.database().ref('users/' + firebase.auth().currentUser.uid + '/' + this.state.tipo)
                    .push({nome : this.state.nome, valor : parseFloat(this.state.valor)}).then(
                        document.getElementById('success').innerHTML = 'Cadastrado com sucesso!'
                    )
                }else{
                    document.getElementById('erro').innerHTML = "Os campos devem ser preenchidos"
                }
            }
        })
        
    }

    mudarObj(e){
        this.setState({nome : e.target.value})
    }
    mudarObj2(e){
        this.setState({valor : e.target.value})
    }

    handleChange2 = (selectedOption) => {
        
       
    }
    

    handleChange = (selectedOption) => {
        this.setState({tipo : null})
        this.setState({tipo : selectedOption.value})
        console.log(this.state.tipo)
        
    }


    componentDidMount() {
        
    
    }
    
    render(){

        return(
            <React.Fragment>
                <Header link="/dashboard"></Header>
                <div className="da">
                    
                    <div className="container">
                        <h1>Adicionar</h1>
                        <hr></hr>
                        <hr></hr>
                        <button className="btn btn-success  mr-3"><i className="fa fa-plus-circle"></i><Link Link to="/add"> Adicionar</Link></button>
                        <button className="btn btn-info  mr-3" ><i className="fas fa-redo"></i><Link Link to="/alterar"> Alterar</Link></button>
                        <button className="btn btn-danger mr-3"><i className="fa fa-trash"></i><Link Link to="/excluir"> Excluir</Link></button>   
                        <button className="btn btn-info" ><i className="fas fa-redo"></i><Link Link to="/dre"> DRE</Link></button>
                            <div className="row mt-3">
                            <div className="col-lg-4 col-md-6">
                            <h5>Ativo/Passivo</h5>
                                <Select
                                    placeholder = 'Selecionar'
                                    onChange={this.handleChange}
                                    options={options}
                                />
                            </div>
                            <div className="col-lg-4 col-md-6">
                             
                            </div>
                            
                            </div> 
                            <div className="row mt-3">
                                <div className="col-lg-4">
                                    <form className='form'>
                                        <div className="form-group">
                                            <label>Nome</label>
                                            <input onChange={e =>this.mudarObj(e)} className='form-control'></input>
                                        </div>
                                        <div className="form-group">
                                            <label>Valor</label>
                                            <input onChange={e =>this.mudarObj2(e)} className='form-control'></input>
                                        </div>
                                        
                                        
                                    </form>
                                    <p id="erro"></p>
                                    <p id="success"></p>
                                    <button onClick={this.salvar}  className="btn btn-success">Cadastrar</button>
                                </div>
                                
                                
                            </div>
                    </div>
                    
                    
                    
                </div>
            </React.Fragment>
        )
        
    }
}