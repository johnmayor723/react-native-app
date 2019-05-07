import React, {Component} from 'react'
import {Scene , Stack, View, Router} from 'react-native-router-flux'
import Signout from '../pages/signup'
import Login from '../pages/login'


export default class Routes extends Component  {
   render(){
   	return(
       <Router>
          <Stack key='root' hideNavbar='true'>
               <Scene key="login" component={Login} title="Login" initial={true}/>
			   <Scene key="signup" component={Signup} title="Register"/>
          </Stack>
       </Router>
   	)
   }
}