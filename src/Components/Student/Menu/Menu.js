import React from 'react'
import classes from './Menu.css'
import Aux from '../../Auxiliar'

const Menu = (props) => {
    
    const pushTo = (route) => {
        props.history.push(`/student/${route}`);
    }

    return (
        <Aux>
            <button className={classes.butonStudent} onClick={() => {pushTo("")}}>Acasa</button>
            <button className={classes.butonStudent} onClick={() => {pushTo("istoric")}}>Istoric</button>
            <button className={classes.butonStudent} onClick={() => {pushTo("teste")}}>Teste</button>
            <button className={classes.butonStudent} onClick={() => {pushTo("email")}}>Email</button>
            <button className={classes.butonStudent} onClick={props.onLogOut}>Deconectare</button>
        </Aux>
    )

}
    
export default Menu;