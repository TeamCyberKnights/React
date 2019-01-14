import React from 'react'
import classes from './Footer.css'

const Footer = () =>
{
    return(
        <div className={classes.footer}>
            <h3>ASE, Facultatea de Cibernetica, Statistica si Informatica Economica</h3>
            <p>&copy; Cosmin Chiriac, Marin Rusu, Andrei Turcu, Gabriel Vasilescu, Mihnea Vorovenci</p>
        </div>
    )
}

export default Footer;