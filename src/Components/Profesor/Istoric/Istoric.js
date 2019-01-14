import React, {Component} from 'react'
import Aux from '../../Auxiliar'
import classes from './Istoric.css'

class Istoric extends Component
{
    state = 
    {
        nrInregistrari: 4,
        inregistrari:
        [
            ['Test Java 1076',9.67,'6/06/2018'],
            ['Test SDD 1046',9.77,'24/06/2018'],
            ['Test BPC 1022',9.77,'25/01/2017'],
            ['Test Android 1076', 9.88, '25/01/2019']
        ]
    }
    renderIstoric = (nr) =>
    {
        let inregistrari = [];
        for(let i=0;i<nr;i++)
        {
            inregistrari.push(
               <div className={classes.inregistrare}>
                <p className={classes.inregistrareTest}>{this.state.inregistrari[i][0]}</p>
                <p className={classes.inregistrareMedie}>{this.state.inregistrari[i][1]}</p>
                <p className={classes.inregistrareData}>{this.state.inregistrari[i][2]}</p>
               </div>
            )
        }
        return inregistrari;
    }
    render()
    {
        let istoric = null;
        istoric = this.renderIstoric(this.state.nrInregistrari);
        return(
            <div className={classes.containerIstoric}>
                <div className={classes.containerHeader}>
                    <p className={classes.headerTest}>Test</p>
                    <p className={classes.headerMedie}>Medie</p>
                    <p className={classes.headerData}>Data</p>
                </div>
                <div className={classes.continutIstoric}>
                    {istoric}
                </div>
            </div>
        )
    }
}

export default Istoric;