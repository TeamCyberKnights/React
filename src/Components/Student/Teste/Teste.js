import React, {Component} from 'react'
import classes from './Teste.css'
import axios from 'axios';

class Teste extends Component
{

    constructor(props) {
        super(props);
        this.state =
        {
            filter:'',
            teste:
            [
               
            ]
        }
        this.getTeste=this.getTeste.bind(this);
    }
   

    async getTeste() {
        const response = await axios.get("http://localhost:8080/api/teste/hardcodat");
        const teste = response.data;
        this.setState(()=>({
            teste: teste
        }));
    }

    componentDidMount() {
        this.getTeste();
    }

    getRezultate = () =>
    {
        let teste = [];
        this.state.teste.map((element,index)=>
        {
            let denumireTest = element[0];
            let profesor = element[1];
            let descriere = element[2];
            let materie = element[3];
            let tipTest = element[4];
            let tip = tipTest===true?"Private":"Public";
            let durata = element[5];
            if(((denumireTest.toUpperCase().includes(this.state.filter.toUpperCase()))||(materie.toUpperCase().includes(this.state.filter.toUpperCase())))&&this.state.filter!='')
            {
                teste.push(<div className={classes.Test}>
                <p className={classes.testDenumire}>{denumireTest}</p>
                <p className={classes.testProfesor}>{profesor}</p>
                <p className={classes.testDescriere}>{descriere}</p>
                <p className={classes.testMaterie}>{materie}</p>
                <p className={classes.testTip}>{tip}</p>
                <p className={classes.testDurata}>{durata} minute</p>
                </div>)
            }
        })
        return teste;
    }
    cautaDupaInput = (event) =>
    {
        this.setState({filter:event.target.value})
    }
    render()
    {
        let rezultate = null;
        rezultate = this.getRezultate();
        return(
            <div className={classes.containerTest}>
                <p>Cauta Test</p>
                <input onChange={(event)=>this.cautaDupaInput(event)} type="text" 
                className={classes.cautareTest} placeholder="Introduce Denumire Testului"></input>
                <div className={classes.containerCautari}>
                    {rezultate}
                </div>
            </div>
        )
    }
}

export default Teste;