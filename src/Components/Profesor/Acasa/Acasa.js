import React, {Component} from 'react'
import classes from './Acasa.css'
import {Switch, Route} from 'react-router-dom';
import Teste from '../Teste/Teste';
import Intrebari from '../Intrebari/Intrebari';
import Istoric from '../Istoric/Istoric';

class Acasa extends Component
{
    state =
    {
       nrInregistrari: 5,
       inregistrari:
       [
           "Test 1076",
           "Test 1077",
           "Test 1078",
           "Test 1079",
           "Test 1080"
       ]
    }
    getOptions = (nr)=>
    {
        let options = [];
        for(let i=0;i<nr;i++)
        {
            options.push(
               <option>
                   {this.state.inregistrari[i]}
               </option>
            )
        }
        return options;
    }
    render()
    {
        let options = null;
        options = this.getOptions(this.state.nrInregistrari);
        return(
            

            <Switch>
                <Route exact path="/profesor" render={()=>(
                    <div className={classes.startTest}>
                        <button className={classes.start}>START</button>
                                <select className={classes.selectTest}>
                                {options}
                                </select>
                    </div>
                )}/>
                <Route exact path="/profesor/teste" component={Teste} />
                <Route exact path="/profesor/intrebari" component={Intrebari} />
                <Route exact path="/profesor/istoric" component={Istoric} />
            </Switch>
        );
    }

}

export default Acasa;