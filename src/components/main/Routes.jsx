import React from 'react'
import {Switch, Route} from 'react-router'

import Login from '../Login'
import Registrar from '../Registrar'
import Dashboard from '../Dashboard'
import Alterar from '../Alterar'
import Add from '../Add'
import DRE from '../DRE'

export default props =>
    <Switch>
        <Route exact path='/' component={Login}></Route>
        <Route path='/login' component={Login}></Route>
        <Route path='/registrar' component={Registrar}></Route>
        <Route path='/dashboard' component={Dashboard}></Route>
        <Route path='/alterar' component={Alterar}></Route>
        <Route path='/add' component={Add}></Route>
        <Route path='/dre' component={DRE}></Route>

    </Switch>