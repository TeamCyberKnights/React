import React, {Component} from 'react'
import classes from './Istoric.css'


class Istoric extends Component
{
    state =
    {
        inregistrari:
        [
            ["Test Java", 9.86,"2/12/2018"],
            ["Test Java", 9.86,"2/12/2018"],
            ["Test Java", 9.86,"2/12/2018"],
            ["Test Java", 9.86,"2/12/2018"]
        ]
    }   
    renderIstoric = () =>
    {
        let inregistrari = [];
        this.state.inregistrari.map((element,index)=>
        {
            inregistrari.push(
                <div className={classes.inregistrare}>
                <p className={classes.inregistrareTest}>{element[0]}</p>
                <p className={classes.inregistrareMedie}>{element[1]}</p>
                <p className={classes.inregistrareData}>{element[2]}</p>
               </div>
            )
        })
        return inregistrari;
    }
    render()
    {
        let istoric = null;
        istoric = this.renderIstoric();
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