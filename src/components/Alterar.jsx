import React from 'react'
import Header from './template/Header2'
import Dash from './template/Dash'
import firebase from 'firebase'
import "./Dash.css"
import Select from 'react-select'
import {Link} from 'react-router-dom'
import Botao from './template/Botao'

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
            selectedOption : null,
            item : [],
            id : null,
            nome : null,
            valor : null
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.mudarObj = this.mudarObj.bind(this);
        this.mudarObj2 = this.mudarObj2.bind(this);
        this.salvar = this.salvar.bind(this);
    }

    salvar(){
        console.log(this.state.nome)
        console.log(this.state.valor)
        if(this.state.nome && this.state.valor && this.state.selectedOption && this.state.id != null){
            if(this.state.valor < 0){
                document.getElementById('erro').innerHTML = "O número deve ser positivo!"
                return
            }
            if(firebase.auth().onAuthStateChanged){
                firebase.database().ref('users/' + firebase.auth().currentUser.uid + '/' + this.state.selectedOption.value + '/' + this.state.id)
                .set({nome : this.state.nome, valor : parseFloat(this.state.valor)}).then(
                    document.getElementById('success').innerHTML = "Alterado com sucesso"
                )
            }
        }else{
            document.getElementById("erro").innerHTML = "É necessário preencher o campo!"
        }
    }

    mudarObj(e){
        this.setState({nome : e.target.value})
    }
    mudarObj2(e){
        this.setState({valor : e.target.value})
    }

    handleChange2 = (selectedOption) => {
        
        this.setState({id : selectedOption.value})
        console.log(this.state.id)
        firebase.auth().onAuthStateChanged(usuario=>{
            if(usuario){
                firebase.database().ref("users/" + firebase.auth().currentUser.uid + '/' + this.state.selectedOption.value + '/' + this.state.id)
                .on('value', snapshot =>{
                    document.getElementById('nome2').innerHTML = `Nome: ${snapshot.val().nome}`
                    document.getElementById('valor').innerHTML = `Valor: ${snapshot.val().valor.toFixed(2)}R$`
                })
            }
        })
    }
    

    handleChange = (selectedOption) => {
        this.setState({item : []})
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
        firebase.auth().onAuthStateChanged(usuario =>{
            if(usuario){
                console.log("logado")
                firebase.database().ref("users/" + firebase.auth().currentUser.uid + '/' + this.state.selectedOption.value).on('child_added', snapshot =>{
                    const lista = this.state.item
                    lista.push({chave : snapshot.key, valor : {valor : {value : snapshot.key, label : snapshot.val().nome}}})
                    this.setState({
                        item :  lista
                    })
                })
            }
        })
        
        
        
    }


    componentDidMount() {
        
    
    }
    
    render(){

        const {selectedOption} = this.state
        const item = this.state.item.map(valor=> valor.valor.valor)
            
        
        return(
            <React.Fragment>
                <Header link="/dashboard"></Header>
                <div className="da">
                    <div className="container">
                            <Botao tipo="Alterar"></Botao> 
                            <h4 id="nome2"></h4>
                            <h4 id="valor"></h4>
                            <div className="row mt-3 mt-3">
                            <div className="col-lg-4 col-md-6">
                            <h5>Ativo/Passivo</h5>
                                <Select
                                    placeholder = 'Selecionar'
                                    onChange={this.handleChange}
                                    options={options}
                                />
                            </div>
                            <div className="col-lg-4 col-md-6">
                            <h5>Elemento</h5>
                                <Select
                                    placeholder = 'Selecionar'
                                    options={item}
                                    onChange={this.handleChange2}
                                />
                                
                            </div>
                            
                            </div> 
                            <div className="row mt-3">
                                <div className="col-lg-4">
                                    <form className="form">
                                        <div className="form-group">
                                            <label>Nome</label>
                                            <input onChange={e =>this.mudarObj(e)} type="text" className="form-control"/>
                                        </div>
                                        <div className="form-group">
                                            <label>Valor</label>
                                            <input onChange={e =>this.mudarObj2(e)} type="number" className="form-control"/>
                                        </div>
                                        
                                        
                                    </form>
                                    <p id="erro"></p>
                                    <p id="success"></p>
                                    <button onClick={this.salvar} className="btn btn-success">Mudar</button>
                                </div>
                                
                                
                            </div>
                    </div>
                    
                    
                    
                </div>
            </React.Fragment>
        )
        
    }
}