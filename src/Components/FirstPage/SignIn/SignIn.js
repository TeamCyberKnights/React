import React, {Component} from 'react'
import Aux from '../../Auxiliar'
import classes from './SignIn.css'
import axios from 'axios'
import {BrowserRouter as Router, Link, withRouter, Route, Switch} from 'react-router-dom'

class SignIn extends Component
{
    constructor(props)
    {
        super(props);
        this.state =
        {
            esteStudent:true,
            inputUtilizator:"",
            inputParola:""
        }
    }

    loginBackend = async () =>
        {
            let webToken = null;
            let esteStudent = true; 
            try {
              let response = await axios.post("http://localhost:8080/api/studenti/login",
              {"mail":this.state.inputUtilizator,"parola":this.state.inputParola});
              webToken = response.data.token;
              let auth = {
                  isAuthenticated: true,
                  token: webToken,
                  mail: response.data.mail,
                  esteStudent: response.data.student
              };
              localStorage.setItem("auth",JSON.stringify(auth));
              esteStudent = response.data.student;
              this.setState({esteStudent:esteStudent})
              console.log(webToken);
             
              this.props.onAuthenticate(webToken, esteStudent, response.data.mail);
              console.log(this.state.esteStudent);
              console.log(webToken);  
            } catch (e) {
                console.log("Intra  aici")
              console.warn(e)
            }
        }
    
    updateLoginCredentials = () =>
    {
        this.setState({inputUtilizator:this.refs.inputUtilizator.value});
        this.setState({inputParola:this.refs.inputParola.value});
    }
    login = () =>
    {
        this.loginBackend();
    }
    render()
    {
    // if(this.state.esteStudent===true)
    // {
    //     <Redirect to="/student"/>
    // }
    // else
    // {
    //     <Redirect to="/profesor"/>
    // }
    return(
            <Router>
                <Aux>
                    <input ref="inputUtilizator" onChange={this.updateLoginCredentials} className={classes.utilizator} type="text" placeholder="Utilizator"></input>
                    <input ref="inputParola" onChange={this.updateLoginCredentials} className={classes.parola} type="password" placeholder="Parola"></input>
                    <button onClick={this.login} className={classes.logare}>LOGIN</button>
                </Aux>
            </Router>
        )
    }
}

export default SignIn;