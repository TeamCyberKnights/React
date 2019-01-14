import React,{Component} from 'react'
import classes from './Header.css'
import Logo from '../../Assets/logo.png'
import SignIn from '../FirstPage/SignIn/SignIn'
import ProfesorMenu from '../Profesor/Menu/Menu'
import StudentMenu from '../Student/Menu/Menu'
import {Switch, Route} from 'react-router-dom'

class Header extends Component
{

    constructor(props) {
        super(props);
    }

    state = 
    {
        webPage: 1
    }

    renderMenu(nr)
    {
        let menu = [];
        if(this.state.webPage===1)
        {
            menu.push(<SignIn/>);
        }
        else if(this.state.webPage===2)
        {
            menu.push(<ProfesorMenu onLogOut={this.props.onLogOut}/>)
        }
        else if(this.state.webPage===3)
        {
            menu.push(<StudentMenu onLogOut={this.props.onLogOut}/>)
        }
        return menu;
    }
    render()
    {
        let menu = null;
        menu = this.renderMenu(this.state.webPage);
        let headerHeight = null;
        return(
            <div className={classes.header}>
                <div className={classes.logo}>
                    <img src={Logo}></img>
                </div>
                <div className={classes.menu}>
                    <Switch>
                        <Route path="/student" render={({history}) => (<StudentMenu history={history} onLogOut={this.props.onLogOut}/>)} />
                        <Route path="/profesor" render={({history}) => (<ProfesorMenu history={history} onLogOut={this.props.onLogOut}/>)} />
                        <Route path="/" render={({history}) => (<SignIn history={history} onAuthenticate={this.props.onAuthenticate}/>)} />
                    </Switch>
                </div>
            </div>
        )
    }
    
}

export default Header;