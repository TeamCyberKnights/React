import React, {Component} from 'react'
import classes from './Email.css'


class Email extends Component
{
    state =
    {
        utilizatori:
        [
            "Alexandru Dita",
            "Catalin Boja",
            "Bogdan Iancu",
            "Alin Zamfiroiu"
        ],
        materii:
        [
            "JAVA",
            "SDD",
            "POO"
        ]
    }

    getProfesori = () =>
    {
        let profesori = [];
        this.state.utilizatori.map((element,index)=>
        {
            profesori.push(<option>{element}</option>)
        })
        return profesori;
    }
    getMaterii = () =>
    {
        let materii = [];
        this.state.materii.map((element,index)=>
        {
            materii.push(<option>{element}</option>)
        })
        return materii;
    }
    render()
    {
        let profesori = null;
        let materii = null;
        profesori = this.getProfesori();
        materii = this.getMaterii();
        return(
            <div className={classes.containerEmail}>
                <p>Ai nevoie de ajutor?</p>
                <select className={classes.destinatar}>
                    {profesori}
                </select>
                <input type="text" className={classes.titlu} placeholder="Subiect Mesaj"></input>
                <select className={classes.materie}>
                    {materii}
                </select>
                <textarea className={classes.mesaj} placeholder="Spune ce ai pe suflet..."></textarea>
                <button>TRIMITE</button>
            </div>
        )
    }
}

export default Email;