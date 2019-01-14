import React, {Component} from 'react'
import classes from './Intrebari.css'
import Aux from '../../Auxiliar'
import {BrowserRouter as Router, Route} from 'react-router-dom'


class Intrebari extends Component
{
    state = 
    {
        nrOptiuni:2,
        Java:
        [
                ["Cum o cheama pe fata primarului?", "Maria", true, "Andreea", false, "Ioana",false,"Laura",false,"Irina",false,"Alexandra",true],
                ["Cum o cheama pe fata primarului?", "Maria", false, "Alexandra",true],
                ["Cum o cheama pe fata primarului?", "Maria", false, "Andreea", false, "Ioana",false,"Laura",false,"Irina",false,"Alexandra",true]
        ],
                POO:
        [
                ["Cum o cheama pe fata primarului?", "Maria", true, "Andreea", false, "Ioana",true,"Laura",false,"Irina",false,"Alexandra",true],
                ["Cum o cheama pe fata primarului?", "Maria", true, "Andreea", false, "Ioana",true,"Laura",false,"Irina",false,"Alexandra",true],
                ["Cum o cheama pe fata primarului?", "Andreea", false, "Ioana",true,"Laura",false,"Irina",false,"Alexandra",true]
        ]

    }
    insereazaRaspuns = (nr) =>
    {   
        let raspunsuri = [];
        for(let i=0;i<nr;i++)
        {
            raspunsuri.push(
                <Aux>
                    <input className={classes.raspunsuri} type="text" placeholder="Introduce raspuns"></input>
                    <input className={classes.raspunsuriCB} type="checkbox"></input>
                </Aux>);
        }
        return raspunsuri;
    }
    adaugaRaspuns = () =>
    {
        let nrOptiuni = this.state.nrOptiuni;
        if(nrOptiuni<6)
        {
            this.setState({nrOptiuni:nrOptiuni+1})
        }
    }
    salveazaRaspuns = () =>
    {
        this.setState({nrOptiuni:2});
    }
    getIntrebari = () =>
    {   
        const styleRaspunsCorect =
        {
            backgroundColor: 'green'
        }
        let intrebari=[];
        intrebari.push(<div className={classes.materie}>
            <p>JAVA</p>
           {this.state.Java.map((element,index)=>
            {
                return(
                    <div className={classes.raspunsuri}>  
                        <p key={index} className={classes.intrebare}>{element[0]}</p>
                        {element[1]===undefined?null:element[2]===true?<p key={index} className={classes.raspunsCorect}>{element[1]}</p>:
                        <p key={index} className={classes.raspuns}>{element[1]}</p>}
                        {element[3]===undefined?null:element[4]===true?<p key={index} className={classes.raspunsCorect}>{element[3]}</p>:
                        <p key={index} className={classes.raspuns}>{element[3]}</p>}
                        {element[5]===undefined?null:element[6]===true?<p key={index} className={classes.raspunsCorect}>{element[5]}</p>:
                        <p key={index} className={classes.raspuns}>{element[5]}</p>}
                        {element[7]===undefined?null:element[8]===true?<p key={index} className={classes.raspunsCorect}>{element[7]}</p>:
                        <p key={index} className={classes.raspuns}>{element[7]}</p>}           
                        {element[9]===undefined?null:element[10]===true?<p key={index} className={classes.raspunsCorect}>{element[9]}</p>:
                        <p key={index} className={classes.raspuns}>{element[9]}</p>}                       
                        {element[11]===undefined?null:element[12]===true?<p key={index} className={classes.raspunsCorect}>{element[11]}</p>:
                        <p key={index} className={classes.raspuns}>{element[11]}</p>}                    
                        </div>)
            })}
        </div>)
        intrebari.push(<div className={classes.materie}>
            <p>POO</p>
           {this.state.POO.map((element,index)=>
            {
                return(
                    <div className={classes.raspunsuri}>
                        <p key={index} className={classes.intrebare}>{element[0]}</p>
                        {element[1]===undefined?null:element[2]===true?<p key={index} className={classes.raspunsCorect}>{element[1]}</p>:
                        <p key={index} className={classes.raspuns}>{element[1]}</p>}
                        {element[3]===undefined?null:element[4]===true?<p key={index} className={classes.raspunsCorect}>{element[3]}</p>:
                        <p key={index} className={classes.raspuns}>{element[3]}</p>}
                        {element[5]===undefined?null:element[6]===true?<p key={index} className={classes.raspunsCorect}>{element[5]}</p>:
                        <p key={index} className={classes.raspuns}>{element[5]}</p>}
                        {element[7]===undefined?null:element[8]===true?<p key={index} className={classes.raspunsCorect}>{element[7]}</p>:
                        <p key={index} className={classes.raspuns}>{element[7]}</p>}           
                        {element[9]===undefined?null:element[10]===true?<p key={index} className={classes.raspunsCorect}>{element[9]}</p>:
                        <p key={index} className={classes.raspuns}>{element[9]}</p>}                       
                        {element[11]===undefined?null:element[12]===true?<p key={index} className={classes.raspunsCorect}>{element[11]}</p>:
                        <p key={index} className={classes.raspuns}>{element[11]}</p>}       
                    </div>)
            })}
        </div>)
        return intrebari;
    }

    render()
    {
        let raspunsuri = null;
        let intrebari = null;
        raspunsuri = this.insereazaRaspuns(this.state.nrOptiuni);
        intrebari = this.getIntrebari();
        return(
            <Router>
            <div className={classes.mainContainer}>
                <div className={classes.creeazaIntrebare}>
                    <input className={classes.textIntrebare} type="text" placeholder="Creeaza o intrebare noua"></input>
                    <p className={classes.dificultateText}>Materie</p>
                    <select className={classes.selectDificultate}>
                        <option>JAVA</option>
                        <option>POO</option>
                        <option>SDD</option>
                    </select>
                    <p className={classes.dificultateText}>Dificultate</p>
                    <select className={classes.selectDificultate}>
                        <option>Usor</option>
                        <option>Mediu</option>
                        <option>Greu</option>
                    </select>
                    <div className={classes.raspunsuriContainer}>
                        {raspunsuri}
                    </div>
                    <button onClick={this.salveazaRaspuns} className={classes.adaugaRaspuns}>Salveaza</button>
                    <button onClick={this.adaugaRaspuns} className={classes.adaugaRaspuns}>Adauga Raspuns</button>
                </div>
                <div className={classes.containerIntrebariExistente}>
                    <p>INTREBARILE TALE</p>
                    {intrebari}
                </div>
            </div>       
            </Router>
        )
    }
}

export default Intrebari;