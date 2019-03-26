import React from 'react'
import Header from './template/Header'
import Login from './template/Clogin'

export default props =>
    <React.Fragment>
        <Header></Header>
        <Login history={[]}></Login>
    </React.Fragment>