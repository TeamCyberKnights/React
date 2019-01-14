import React, {Component} from 'react'
import classes from './Acasa.css'
import {Switch, Route} from 'react-router-dom';
import Teste from '../Teste/Teste';
import Email from '../Email/Email';
import Istoric from '../Istoric/Istoric';


class Acasa extends Component
{
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        if(!this.props.isAuthenticated && !this.props.token) {
            this.props.history.push("/");
        } 
    }
  

    render()
    {
        return(<div className={classes.containerAcasa}>
                   
                    <Switch>
                        <Route exact path="/student" render={()=>(
                            <div>
                                <div className={classes.divButon}>
                                    <button className={classes.butonStart}>START</button>
                                </div>
                                <input className={classes.cautaCod} type="text" placeholder="Cod Acces"></input>
                            </div>
                        )} />
                        <Route exact path="/student/teste" component={Teste} />
                        <Route exact path="/student/istoric"  component={Istoric} />
                        <Route exact path="/student/email"  component={Email} />
                    </Switch>


                </div>);
    }
}

export default Acasa;