import React, { Component } from 'react';
import classes from './App.css';
import Header from './Components/Header/Header'
import SignUp from './Components/FirstPage/SignUp/SignUp'
import AcasaStudent from './Components/Student/Acasa/Acasa';
import Footer from './Components/Footer/Footer'
import Display1 from './Components/Profesor/Display/Display'
import Display2 from './Components/Student/Display/Display'
import {Switch, Route} from 'react-router-dom'
import { withRouter } from "react-router";
import axios from 'axios';

import AcasaProfesor from './Components/Profesor/Acasa/Acasa';



class App extends Component {

  constructor(props, context) {
    super(props);
    this.state = {
      isAuthenticated: false,
      token: null,
      mail: null
    }
    console.log(this.props)
    this.authenticate=this.authenticate.bind(this);
    this.logOut=this.logOut.bind(this);
  }

  
  componentDidMount() {
    let auth = JSON.parse(localStorage.getItem("auth"));
    if(auth) {
        this.setState(()=>({
          isAuthenticated: auth.isAuthenticated,
          token: auth.token,
          mail: auth.mail
        }),()=>{
            if(auth.esteStudent) {
              this.props.history.push("/student");
            } else {
              this.props.history.push("/profesor");
            }
        })
    }
  }



  authenticate(token, esteStudent, mail) {
      this.setState(()=>({
        token: token,
        isAuthenticated: true,
        mail: mail
      }), () => {
  
        console.log(esteStudent)
        if(esteStudent===true)
        {
            this.props.history.push("/student");
        }
        else
        {
            this.props.history.push("/profesor");
        }
      });
  }

  logOut() {
    console.log("Mergeee")
    this.setState(()=>({
      token: null,
      isAuthenticated: false
    }));
    this.props.history.push("/");

    localStorage.setItem("auth",null);

    let body = {mail: this.state.mail}

    axios.post("http://localhost:8080/api/studenti/logout", body,
      {headers: { 'Authorization': this.state.token}}
    );

  
  }

  getHeader = (nr) =>
  {
    let header = [];
    header.push(<Header/>);
    
    return header;
  }
  getContent = (nr) =>
  {
    let content = [];
    if(this.state.webPage===1)
    {
      content.push(<SignUp/>);
    }
    else if(this.state.webPage===2)
    {
      content.push(<Display1/>);
    }
    else if(this.state.webPage===3)
    {
      content.push(<Display2/>);
    }
    return content;
  }
  getFooter = (nr) =>
  {
    let footer = [];
    if(this.state.webPage===1)
    {
        footer.push(
        <div className={classes.footer}>
          <Footer/>
        </div>
      );
    }
    return footer;
  }
  render() {
    let header = null;
    let content = null;
    let footer = null;
    header = this.getHeader(this.state.webPage);
    content = this.getContent(this.state.webPage);
    footer = this.getFooter(this.state.webPage);

    return (
      // <Aux>
      //     <div className={classes.container}>
      //       {header}
      //     <div className={classes.content}>
      //         {content}
      //     </div>
      // </div>
      // {footer}
      // </Aux>

        

        <div>
          <div className={classes.container}>
            {/* <Route path="/home" component={Header}/> */}
            <Header onLogOut={this.logOut} onAuthenticate={this.authenticate}/>
            <div className={classes.content}>


             <Switch>
                <Route exact path="/" render={({history})=>(<SignUp history={history} onAuthenticate={this.authenticate} />)}/>
                <Route path="/student" render={({history})=>(<AcasaStudent history={history} isAuthenticated={this.state.isAuthenticated} token={this.state.token} />)}/>
                <Route path="/profesor" render={({history})=>(<AcasaProfesor history={history} isAuthenticated={this.state.isAuthenticated} token={this.state.token} />)}/>

            </Switch>

              {/* <Route path="/home" component={SignUp}/> */}
            </div>
          </div>
          <div className={classes.footer}>
            <Footer/>
          </div>
        </div>
    );
  }
}

export default withRouter(App);

