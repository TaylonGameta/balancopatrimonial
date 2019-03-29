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
            tatual : null,
            atual : [],
            tipo : null,
            nome : null,
            valor : 4,
            ac : [{value : "Caixa", label : "Caixa"}, {value : "Estoque", label : "Estoque"},{value : "Aplicação CP", label : "Aplicação CP"},
            {value : "Contas a receber", label : "Contas a receber"}],

            anc : [{value : "Veículos", label : "Veículos"}, {value : "Imóveis", label : "Imóveis"},{value : "Máquinas/Equipamentos", label : "Máquinas/Equipamentos"},
            {value : "Marcas e patentes", label : "Marcas e patentes"},{value : "Part. outras empresas", label : "Part. outras empresas"}],

            pc : [{value : "Contas a pagar", label : "Contas a pagar"}, {value : "Salários a pagar", label : "Salários a pagar"},{value : "Fornecedores a pagar", label : "Fornecedores a pagar"},
            {value : "Empréstimos de CP", label : "Empréstimos de CP"}],

            pnc : [{value : "Títulos a pagar de LP", label : "Títulos a pagar de LP"}, {value : "Empréstimo/Financiamento de LP", label : "Empréstimo/Financiamento de LP"}],
            
            pl : [{value : "Lucros acumulados ou prejuízos", label : "Lucros acumulados ou prejuízos"}, {value : "Reservas de lucro", label : "Reservas de lucro"},{value : "Capital Social", label : "Capital Social"}]
        }
        this.salvar = this.salvar.bind(this);
       
    }

    salvar(){
        
        firebase.auth().onAuthStateChanged(usuario =>{
            if(usuario){
                if(this.state.valor < 0){
                    document.getElementById('erro').innerHTML = "O número deve ser positivo!"
                    return
                }
                if(this.state.tatual && this.state.valor && this.state.tipo != null){
                    firebase.database().ref('users/' + firebase.auth().currentUser.uid + '/' + this.state.tipo)
                    .push({nome : this.state.tatual, valor : parseFloat(this.state.valor)}).then(
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
        
        this.setState({tatual : selectedOption.value})
        console.log(this.state.tatual)
       
    }
    

    handleChange = (selectedOption) => {
        this.setState({tipo : null})
        this.setState({tipo : selectedOption.value})
        this.setState({atual : []})
        this.setState({tatual : null})
        if(selectedOption.value === 'ativoCirculante'){
            
            this.setState({atual : this.state.ac})
        }
        if(selectedOption.value === 'ativoNC'){
            
            this.setState({atual : this.state.anc})
        }
        if(selectedOption.value === 'passivoCirculante'){
            
            this.setState({atual : this.state.pc})
        }
        if(selectedOption.value === 'passivoNC'){
            
            this.setState({atual : this.state.pnc})
        }
        if(selectedOption.value === 'patrimonioL'){
            
            this.setState({atual : this.state.pl})
        }
        
    }


    componentDidMount() {
        
    
    }
    
    render(){

        return(
            <React.Fragment>
                <Header link="/dashboard"></Header>
                <div className="da">
                    
                    <div className="container">
                        <Botao tipo="Adicionar"></Botao>
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
                            <h5>Item</h5>
                                <Select
                                    placeholder="Selecionar"
                                    options={this.state.atual}
                                    onChange={this.handleChange2}
                                ></Select>
                            </div>
                            
                            </div> 
                            <div className="row mt-3">
                                <div className="col-lg-4">
                                    <form className='form'>
                                        
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