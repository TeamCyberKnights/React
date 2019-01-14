import React,{Component} from 'react'
import classes from './Menu.css'
import Aux from '../../Auxiliar'

const Menu = (props) => {

       
    const pushTo = (route) => {
        props.history.push(`/profesor/${route}`);
    }

    return (
            <Aux>
                <button className={classes.butonProfesor} onClick={() => {pushTo("")}}>Acasa</button>
                <button className={classes.butonProfesor} onClick={() => {pushTo("istoric")}}>Istoric</button>
                <button className={classes.butonProfesor} onClick={() => {pushTo("intrebari")}}>Intrebari</button>
                <button className={classes.butonProfesor} onClick={() => {pushTo("teste")}}>Teste</button>
                <button className={classes.butonProfesor} onClick={props.onLogOut}>Deconectare</button>
            </Aux>
    )
    }

export default Menu;